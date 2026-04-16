import Link from 'next/link';
import { projectData } from '@/data/projectsData';

export default function ProjectsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Dự Án Tiêu Biểu</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData.map((project) => (
                    <div key={project.id} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div className="relative h-60 w-full overflow-hidden">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                            <p className="text-gray-600 line-clamp-2 mb-4">{project.description}</p>
                            <Link
                                href={`/projects/${project.id}`}
                                className="inline-block font-semibold text-red-600 hover:text-red-700 transition"
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