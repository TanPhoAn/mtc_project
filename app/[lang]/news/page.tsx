import React from 'react';
import Link from 'next/link';
import { newsData } from '@/data/newsData';
import { getDictionary } from '@/app/dictionaries';

export default async function NewsPage({ params }: { params: Promise<{ lang: 'vi' | 'en' }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main className="bg-gray-50 min-h-screen pb-20">
            {/* Banner Header */}
            <section className="bg-[#1e3a8a] py-16 text-white text-center">
                <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
                    {lang === 'vi' ? 'Tin tức & Sự kiện' : 'News & Events'}
                </h1>
                <p className="mt-4 text-blue-200">
                    {lang === 'vi' ? 'Cập nhật những hoạt động mới nhất của Công Ty Minh Thanh' : 'Latest activities of Minh Thanh Company'}
                </p>
            </section>

            {/* Danh sách tin tức */}
            <section className="max-w-7xl mx-auto px-6 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
                            {/* Ảnh tin tức */}
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={lang === 'vi' ? item.title : item.title_en}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {item.date}
                                </div>
                            </div>

                            {/* Nội dung */}
                            <div className="p-6 flex flex-col flex-1">
                                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#292c8f] transition-colors">
                                    {/* SỬA 2: Hiển thị tiêu đề theo ngôn ngữ */}
                                    {lang === 'vi' ? item.title : item.title_en}
                                </h2>
                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
                                    {/* SỬA 3: Hiển thị mô tả theo ngôn ngữ */}
                                    {lang === 'vi' ? item.description : item.description_en}
                                </p>

                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <Link
                                        href={`/${lang}/news/${item.id}`}
                                        className="text-[#292c8f] font-bold flex items-center gap-2 hover:gap-4 transition-all"
                                    >
                                        {lang === 'vi' ? 'Xem chi tiết' : 'View details'} <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}