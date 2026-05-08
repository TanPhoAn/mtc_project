import Link from 'next/link';
import { projectData } from '@/data/projectsData';
import {getDictionary} from "@/app/dictionaries";

export default async function ProjectsPage({params}: { params: Promise<{ lang: 'vi' | 'en' }> }) {
    // 1. Chờ lấy biến lang từ params
    const { lang } = await params;

    // 2. Lấy từ điển tương ứng (nếu ông muốn dịch tiêu đề "Tin tức & Sự kiện")
    const dict = await getDictionary(lang);
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Công Trình Tiêu Biểu</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData.map((project) => (
                    <div key={project.id} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div className="relative h-60 w-full overflow-hidden">
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 flex flex-col h-1/2">
                            <div className={"flex-grow min-h-[140px]"}>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600 line-clamp-2 mb-3 ">{project.description}</p>
                            </div>

                            <Link
                                href={`/${lang}/projects/${project.id}`}
                                className="inline-block font-semibold text-red-600 hover:text-red-700 transition mb-1"
                            >
                                Xem chi tiết →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}