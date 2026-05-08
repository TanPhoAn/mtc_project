import { projectData } from '@/data/projectsData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function ProjectDetail({ params }: { params:Promise<{ lang: 'vi' | 'en', id: string }> }) {
    // Tìm project theo ID
    const { lang, id } = await params;
    const project = projectData.find((p) => p.id === id);

    // Nếu không tìm thấy thì trả về trang 404
    if (!project) notFound();

    const title = lang === 'vi' ? project.title : project.title_en;
    const description = lang === 'vi' ? project.description : project.description_en;

    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <Link href={`/projects`} className="text-blue-600 hover:text-blue-800 font-semibold mb-6 inline-block">
                {lang === 'vi' ? '← Quay lại danh sách' : '← Back to list'}
            </Link>

            <header className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{title}</h1>
            </header>

            {/* GALLERY ẢNH */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {/* Ảnh chính to nhất */}
                <div className="md:col-span-2 flex justify-center">
                    <img
                        src={project.images[0].url}
                        alt={title}
                        className="w-3/4 h-auto rounded-2xl shadow-lg object-cover max-h-fit"
                    />
                </div>

                {/* Các ảnh phụ (nếu có) */}
                <div className="flex flex-col gap-16">
                    {project.images.slice(1).map((img, index) => (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center group">
                            <div className="lg:col-span-3 overflow-hidden rounded-2xl shadow-xl bg-gray-50">
                                <img
                                    src={img.url}
                                    alt={img.caption}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                                />
                            </div>

                            {img.caption && (
                                <div className="flex items-center w-full pl-10">
                                    <div className="flex items-center gap-4 p-4 bg-white/90 backdrop-blur-sm rounded-xl border-l-4 border-red-600 shadow-xl">
                                        <span className="text-sm font-bold text-red-600 uppercase tracking-wider border-r border-gray-200 pr-4">
                                            {lang === 'vi' ? `Hình ${index + 1}` : `Image ${index + 1}`}
                                        </span>
                                        <p className="text-gray-700 text-base italic font-semibold pr-2">
                                            {img.caption}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* FOOTER CỦA TRANG CHI TIẾT */}
            <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">
                    {lang === 'vi' ? 'Bạn cần tư vấn giải pháp điện tương tự?' : 'Need a similar electrical solution?'}
                </h3>
                <p className="text-blue-800 mb-4 text-sm">
                    {lang === 'vi' ? 'Hãy liên hệ với Minh Thanh để được khảo sát và báo giá tối ưu nhất.' : 'Contact Minh Thanh for the most optimal survey and quotation.'}
                </p>
                <a href="tel:02773852252" className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition inline-block">
                    {lang === 'vi' ? 'Gọi ngay: 02773.852.252' : 'Call now: 02773.852.252'}
                </a>
            </div>
        </div>
    );
}