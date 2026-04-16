import { projectData } from '@/data/projectsData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function ProjectDetail({ params }: { params: { id: string } }) {
    // Tìm dự án theo ID
    const project = projectData.find((p) => p.id === params.id);

    // Nếu không thấy thì báo 404
    if (!project) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <Link href="/projects" className="text-blue-600 hover:underline mb-6 inline-block">
                ← Quay lại danh sách
            </Link>

            <img
                src={project.img}
                alt={project.title}
                className="w-full h-[400px] object-cover rounded-3xl shadow-lg mb-8"
            />

            <h1 className="text-4xl font-extrabold text-blue-900 mb-4">{project.title}</h1>
            <p className="text-xl text-gray-500 italic mb-8 border-l-4 border-red-600 pl-4">
                {project.description}
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {/* Render nội dung chi tiết */}
                <p>project.content</p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4">Bạn cần tư vấn về dự án tương tự?</h3>
                <Link
                    href="/#contact"
                    className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition"
                >
                    Liên hệ ngay
                </Link>
            </div>
        </div>
    );
}