import { newsData } from '@/data/newsData';
import { notFound } from 'next/navigation';

// Thêm async vào function
export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {

    // Đợi params resolve xong mới lấy id
    const { id } = await params;
    console.log("ID from URL:", id);

    // Tìm bài viết
    const item = newsData.find((n) => String(n.id) === String(id));

    if (!item) {
        notFound();
    }

    // ... các phần import và await params giữ nguyên

    return (
        <main className="max-w-4xl mx-auto py-20 px-6">
            {/* 1. Ảnh bìa lớn & Tiêu đề */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#292c8f] uppercase leading-tight">
                {item.title}
            </h1>
            <p className="text-gray-500 mb-6 font-medium">📅 {item.date}</p>

            <div className="rounded-2xl overflow-hidden mb-10 shadow-lg border-4 border-gray-100">
                <img src={item.image} alt={item.title} className="w-full h-auto object-cover" />
            </div>

            {/* 2. Render nội dung động từ mảng blocks */}
            <div className="space-y-8">
                {item.blocks.map((block, index) => {
                    if (block.type === 'text') {
                        return (
                            <p key={index} className="text-gray-700 leading-relaxed text-justify text-lg">
                                {block.value}
                            </p>
                        );
                    }
                    if (block.type === 'image') {
                        return (
                            <div key={index} className="space-y-2">
                                <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
                                    <img src={block.value} alt={block.alt} className="w-full h-auto hover:scale-[1.02] transition-transform duration-500" />
                                </div>
                                {/*{block.alt && (*/}
                                {/*    <p className="text-center text-sm text-gray-500 italic">*/}
                                {/*        Hình: {block.alt}*/}
                                {/*    </p>*/}
                                {/*)}*/}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </main>
    );
}

