import React from 'react';
import Link from 'next/link';

const newsData = [
    {
        id: 1,
        title: "LỄ KÝ KẾT THỎA THUẬN HỢP TÁC VỚI TRƯỜNG CAO ĐẲNG CƠ ĐIỆN",
        date: "12/03/2026",
        image: "/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC - LE KY KET THUC TAP/4.jpg",
        description: "Ngày 12/3/2026 tại CƠ SỞ ĐÀO TẠO NGHỀ ĐỒNG THÁP đã diễn ra lễ ký kết hợp tác đào tạo..."
    },
    {
        id: 2,
        title: "MINH THANH TRIỂN KHAI DỰ ÁN ĐIỆN NĂNG LƯỢNG MẶT TRỜI TẠI KCN",
        date: "05/04/2026",
        image: "/2026_MTC_WEB/2026_MTC_WEB_ANH/du-an-2.jpg",
        description: "MTC chính thức khởi động dự án lắp đặt hệ thống điện mặt trời công suất lớn..."
    },
    // Thêm các tin khác ở đây...
];
export default function NewsPage() {
    return (
        <main className="bg-gray-50 min-h-screen pb-20">
            {/* Banner Header */}
            <section className="bg-[#1e3a8a] py-16 text-white text-center">
                <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Tin tức & Sự kiện</h1>
                <p className="mt-4 text-blue-200">Cập nhật những hoạt động mới nhất của Minh Thanh MTC</p>
            </section>

            {/* Danh sách tin tức */}
            <section className="max-w-7xl mx-auto px-6 -mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
                            {/* Ảnh tin tức */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {item.date}
                                </div>
                            </div>

                            {/* Nội dung */}
                            <div className="p-6 flex flex-col flex-1">
                                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#292c8f] transition-colors">
                                    {item.title}
                                </h2>
                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
                                    {item.description}
                                </p>

                                {/* Nút bấm gán ID/Index */}
                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <Link
                                        href={`/news/${item.id}`}
                                        className="text-[#292c8f] font-bold flex items-center gap-2 hover:gap-4 transition-all"
                                    >
                                        Xem chi tiết <span>→</span>
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