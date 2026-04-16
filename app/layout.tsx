'use client';
import { useState } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    // Hàm bổ trợ để đóng menu khi click vào link
    const closeMenu = () => setIsOpen(false);

    return (
        <html lang="vi" className="scroll-smooth">
        <body className={`${inter.className} bg-white text-gray-900`}>

        {/* TOP BAR */}
        <div className="bg-[#1e3a8a] text-white py-2 px-6 text-xs md:text-sm flex justify-between items-center">
            <div className="flex space-x-4">
                <span>📞 <a href="tel:02773852252" className="hover:text-red-400">02773.852.252</a> </span>
                <span className="hidden md:inline">📧 mtcdongthap@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
                <button className="font-bold underline text-red-400">VN</button>
                <span>|</span>
                <button className="hover:text-red-400 transition">EN</button>
            </div>
        </div>

        {/* NAVIGATION */}
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            {/* Thay px-auto thành px-4 (mobile) và md:px-8 (desktop) để tránh mất content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">

                {/* LOGO - Bỏ margin âm -ml-10 để tránh bị văng khỏi màn hình */}
                <div className="flex items-center shrink-0">
                    <Link href="/" onClick={closeMenu} className="block">
                        <img
                            src="/2026_MTC_WEB/2026_MTC_WEB_ANH/2026%20WEB-BANG%20HIEU.png"
                            alt="Minh Thanh Logo"
                            className="h-10 md:h-12 w-auto object-contain transition-transform hover:scale-110"
                        />
                    </Link>
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex space-x-8 font-semibold text-gray-700">
                    <Link href="/" className="hover:text-red-600 transition">Trang Chủ</Link>
                    <Link href="/about" className="hover:text-red-600 transition">Giới Thiệu</Link>
                    <Link href="/news" className="hover:text-red-600 transition">Tin Tức</Link>
                    <Link href="/projects" className="hover:text-red-600 transition">Dự Án</Link>
                </div>

                {/* HAMBURGER BUTTON */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-blue-900 p-2 focus:outline-none hover:bg-gray-100 rounded-lg transition"
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU - Trượt mượt mà */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t 
        ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="flex flex-col space-y-4 p-6 font-semibold text-gray-700">
                    <Link href="/" onClick={closeMenu} className="hover:text-red-600 transition border-b border-gray-50 pb-2">Trang Chủ</Link>
                    <Link href="/about" onClick={closeMenu} className="hover:text-red-600 transition border-b border-gray-50 pb-2">Giới Thiệu</Link>
                    <Link href="/news" onClick={closeMenu} className="hover:text-red-600 transition">Tin Tức</Link>
                </div>
            </div>
        </nav>

        {children}

        {/* FOOTER */}
        <footer className="bg-[#1e3a8a] text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* CỘT 1: GIỚI THIỆU CHUNG */}
                <div className="space-y-4">
                    <div className="bg-white p-2 inline-block rounded-md shadow-sm">
                        <h2 className="text-xl font-bold text-red-600 uppercase leading-tight">Minh Thanh</h2>
                        <p className="text-[10px] font-bold text-blue-900 uppercase tracking-tighter">Minh Thanh Limited Company</p>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed text-justify">
                        Với hơn 25 năm kinh nghiệm, chúng tôi cam kết mang đến giải pháp năng lượng an toàn, bền vững và hiệu quả nhất cho khách hàng.
                    </p>
                </div>

                {/* CỘT 2: DỊCH VỤ CHÍNH */}
                <div>
                    <h3 className="text-lg font-bold mb-6 border-l-4 border-red-500 pl-3 uppercase tracking-wide">Lĩnh vực</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li className="hover:text-white transition cursor-pointer">⚡ Đường dây & Trạm biến áp</li>
                        <li className="hover:text-white transition cursor-pointer">🏭 Điện công nghiệp & Dân dụng</li>
                        <li className="hover:text-white transition cursor-pointer">💡 Chiếu sáng công cộng</li>
                        <li className="hover:text-white transition cursor-pointer">☀️ Năng lượng mặt trời</li>
                        <li className="hover:text-white transition cursor-pointer">🛠 Bảo trì & Sửa chữa hệ thống điện</li>
                    </ul>
                </div>

                {/* CỘT 3: LIÊN KẾT NHANH */}
                <div>
                    <h3 className="text-lg font-bold mb-6 border-l-4 border-red-500 pl-3 uppercase tracking-wide">Liên kết</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li><Link href="/" className="hover:text-white transition">Trang chủ</Link></li>
                        <li><Link href="/about" className="hover:text-white transition">Giới thiệu công ty</Link></li>
                        <li><a href="#projects" className="hover:text-white transition">Dự án tiêu biểu</a></li>
                        <li><Link href="/news" className="hover:text-white transition">Tin tức & Sự kiện</Link></li>
                        <li><a href="#contact" className="hover:text-white transition">Liên hệ báo giá</a></li>
                    </ul>
                </div>

                {/* CỘT 4: THÔNG TIN TRỤ SỞ */}
                <div id="contact">
                    <h3 className="text-lg font-bold mb-6 border-l-4 border-red-500 pl-3 uppercase tracking-wide">Trụ sở chính</h3>
                    <div className="text-sm text-gray-300 space-y-4">
                        <p className="flex items-start gap-2">
                            <span className="text-red-400">📍</span>
                            Số 166 Lê Duẩn, Phường Mỹ Trà, TP. Cao Lãnh, Đồng Tháp
                        </p>
                        <a href="tel:02773852252" className="flex items-center gap-2 hover:text-white transition">
                            <span className="text-red-400">📞</span>
                            02773.852.252
                        </a>
                        <p className="flex items-center gap-2">
                            <span className="text-red-400">📧</span>
                            mtcdongthap@gmail.com
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-red-400">🌐</span>
                            www.minhthanhelectric.com.vn
                        </p>
                    </div>
                </div>
            </div>

            {/* BẢN QUYỀN */}
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex justify-center text-xs text-gray-400">
                <p>© 2026 Minh Thanh Limited Company. All rights reserved.</p>
            </div>
        </footer>
        </body>
        </html>
    );
}