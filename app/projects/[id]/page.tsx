import { projectData } from '@/data/projectsData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function ProjectDetail({ params }: { params:Promise<{ id: string }> }) {
    // Tìm project theo ID
    const {id} = await params;
    const project = projectData.find((p) => p.id === id);

    // Nếu không tìm thấy thì trả về trang 404
    if (!project) notFound();

    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            {/* Nút quay lại */}
            <Link href="/projects" className="text-blue-600 hover:text-blue-800 font-semibold mb-6 inline-block">
                ← Quay lại danh sách
            </Link>

            <header className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{project.title}</h1>
                <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
                    {/*{project.location && <span>📍 {project.location}</span>}*/}
                    {/*{project.year && <span>📅 Năm hoàn thành: {project.year}</span>}*/}
                </div>
            </header>

            {/* GALLERY ẢNH */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {/* Ảnh chính to nhất */}
                <div className="md:col-span-2 flex justify-center">
                    <img
                        src={project.images[0].url}
                        alt={project.title}
                        className="w-3/4 h-auto rounded-2xl shadow-lg object-cover max-h-fit"
                    />
                </div>

                {/* Các ảnh phụ (nếu có) */}
                <div className="flex flex-col gap-16">
                    {project.images.slice(1).map((img, index) => (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center group">

                            {/* Khối chứa ảnh: Chiếm 2/3 chiều ngang */}
                            <div className="lg:col-span-2 overflow-hidden rounded-2xl shadow-lg bg-gray-50">
                                <img
                                    src={img.url}
                                    alt={img.caption}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            </div>

                            {/* Khối chứa Caption: Nằm ngang hoàn toàn */}
                            {img.caption && (
                                <div className="flex items-center w-full lg:w-max">
                                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl border-l-4 border-red-600 shadow-md min-w-max">
                                        {/* Phần "HÌNH X" */}
                                        <span className="text-sm font-bold text-red-600 uppercase tracking-wider whitespace-nowrap border-r border-gray-200 pr-4">
                            {`Hình ${index + 2}`}
                        </span>

                                        {/* Phần nội dung caption nằm ngang hoàn toàn */}
                                        <p className="text-gray-700 text-base italic font-semibold whitespace-nowrap pr-2">
                                            {img.caption}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* NỘI DUNG CHI TIẾT */}
            {/*<div className="prose prose-blue max-w-none">*/}
            {/*    <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-red-600 pl-4 mb-4">*/}
            {/*        Thông tin chi tiết dự án*/}
            {/*    </h2>*/}
            {/*    <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">*/}
            {/*        {project.description || "Đang cập nhật nội dung chi tiết cho công trình này..."}*/}
            {/*    </p>*/}
            {/*</div>*/}

            {/* FOOTER CỦA TRANG CHI TIẾT */}
            <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">Bạn cần tư vấn giải pháp điện tương tự?</h3>
                <p className="text-blue-800 mb-4 text-sm">Hãy liên hệ với Minh Thanh để được khảo sát và báo giá tối ưu nhất.</p>
                <a href="tel:02773852252" className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition inline-block">
                    Gọi ngay: 02773.852.252
                </a>
            </div>
        </div>
    );
}