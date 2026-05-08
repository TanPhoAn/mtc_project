import Link from 'next/link';
import { projectData } from '@/data/projectsData';
import {getDictionary} from "@/app/dictionaries";

export default async function ProjectsPage({params}: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as 'vi' | 'en';
    const dict = await getDictionary(lang);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center uppercase tracking-tight">
                {dict.home.projects_title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData.map((project) => (
                    <div key={project.id} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                        <div className="relative h-60 w-full overflow-hidden">
                            <img
                                src={project.thumbnail}
                                alt={lang === 'vi' ? project.title : project.title_en}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 uppercase line-clamp-3">
                                    {lang === 'vi' ? project.title : project.title_en}
                                </h3>
                                <p className="text-gray-600 line-clamp-2 mb-3 ">
                                    {lang === 'vi' ? project.description : project.description_en}
                                </p>
                            </div>

                            <Link
                                href={`/projects/${project.id}`}
                                className="inline-block font-semibold text-red-600 hover:text-red-700 transition mt-4"
                            >
                                {lang === 'vi' ? 'Xem chi tiết →' : 'View details →'}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}