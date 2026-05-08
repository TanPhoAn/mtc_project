import { newsData } from '@/data/newsData';
import { notFound } from 'next/navigation';

// Sửa lại type của params để nhận cả lang và id
export default async function NewsDetailPage({params}: {
    params: Promise<{ lang: 'vi' | 'en'; id: string }>
}) {

    // Đợi params resolve để lấy cả lang và id
    const { lang, id } = await params;

    // Tìm bài viết theo ID
    const item = newsData.find((n) => String(n.id) === String(id));

    if (!item) {
        notFound();
    }

    return (
        <main className="max-w-4xl mx-auto py-20 px-6 bg-white min-h-screen">
            {/* 1. Tiêu đề & Ngày tháng */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#292c8f] uppercase leading-tight">
                {/* Chọn title theo ngôn ngữ */}
                {lang === 'vi' ? item.title : item.title_en}
            </h1>
            <p className="text-gray-500 mb-6 font-medium">
                {lang === 'vi' ? `📅 Ngày: ${item.date}` : `📅 Date: ${item.date}`}
            </p>

            {/* Ảnh bìa chính */}
            <div className="rounded-2xl overflow-hidden mb-10 shadow-lg border-4 border-gray-100">
                <img
                    src={item.image}
                    alt={lang === 'vi' ? item.title : item.title_en}
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* 2. Render nội dung động từ mảng blocks */}
            <div className="space-y-8">
                {item.blocks.map((block, index) => {
                    if (block.type === 'text') {
                        return (
                            <p key={index} className="text-gray-700 leading-relaxed text-justify text-lg">
                                {/* Chọn nội dung text theo ngôn ngữ */}
                                {lang === 'vi' ? block.value : block.value_en}
                            </p>
                        );
                    }
                    if (block.type === 'image') {
                        return (
                            <div key={index} className="space-y-2">
                                <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
                                    <img
                                        src={block.value}
                                        alt={lang === 'vi' ? block.alt : block.alt_en}
                                        className="w-full h-auto hover:scale-[1.02] transition-transform duration-500"
                                    />
                                </div>
                                {/* Hiển thị caption nếu có và dịch caption */}
                                {(block.alt || block.alt_en) && (
                                    <p className="text-center text-sm text-gray-500 italic">
                                        {lang === 'vi' ? `Hình: ${block.alt}` : `Photo: ${block.alt_en}`}
                                    </p>
                                )}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </main>
    );
}