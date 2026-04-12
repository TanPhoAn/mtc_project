import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Minh Thanh MTC - Thi công điện chuyên nghiệp',
    description: 'Công ty TNHH Minh Thanh Limited Company',
    icons: {
        icon: '/favicon_mtc.png',
    },
};
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi" className="scroll-smooth">

        <body className={`${inter.className} bg-white text-gray-900`}>
        <link rel="icon"  href="/favicon.ico"/>
        {/* TOP BAR */}
        <div className="bg-[#1e3a8a] text-white py-2 px-6 text-xs md:text-sm flex justify-between items-center">
            <div className="flex space-x-4">
                <span>📞 02773.852.252</span>
                <span className="hidden md:inline">📧 mtcdongthap@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
                <button className="font-bold underline text-red-400">VN</button>
                <span>|</span>
                <button className="hover:text-red-400">EN</button>
            </div>
        </div>


        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="leading-tight">
                        <Link href="/" className="block hover:no-underline">
                            <h1 className="text-xl font-bold text-red-600 uppercase">Minh Thanh</h1>
                            <span className="text-[10px] font-semibold text-blue-900 tracking-tighter uppercase block">
                            Minh Thanh Limited Company
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="hidden md:flex space-x-8 font-semibold text-gray-700">
                    <Link href="/" className="hover:text-red-600 transition">Trang chủ</Link>
                    <Link href="/about" className="hover:text-red-600 transition">Giới thiệu</Link>
                    <a href="#projects" className="hover:text-red-600 transition">Dự án</a>
                    <a href="#contact" className="hover:text-red-600 transition">Liên hệ</a>
                </div>
            </div>
        </nav>

        {children}

        {/*footer*/}
        <footer className="bg-[#1e3a8a] text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* CỘT 1: GIỚI THIỆU CHUNG */}
                <div className="space-y-4">
                    <div className="bg-white p-2 inline-block rounded-md">
                        <h2 className="text-xl font-bold text-red-600 uppercase leading-tight">Minh Thanh</h2>
                        <p className="text-[10px] font-bold text-blue-900 uppercase tracking-tighter">Minh Thanh Limited Company</p>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed text-justify">
                        Với hơn 25 năm kinh nghiệm, chúng tôi cam kết mang đến giải pháp năng lượng an toàn, bền vững và hiệu quả nhất cho khách hàng.
                    </p>
                    <div className="flex space-x-4 pt-2 hidden">
                        <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">FB</a>
                        <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">YT</a>
                        <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all">Zalo</a>
                    </div>
                </div>

                {/* CỘT 2: DỊCH VỤ CHÍNH */}
                <div>
                    <h3 className="text-lg font-bold mb-6 border-l-4 border-red-500 pl-3 uppercase">Lĩnh vực</h3>
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
                    <h3 className="text-lg font-bold mb-6 border-l-4 border-red-500 pl-3 uppercase">Liên kết</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li><Link href="/" className="hover:text-white transition">Trang chủ</Link></li>
                        <li><Link href="/about" className="hover:text-white transition">Giới thiệu công ty</Link></li>
                        <li><a href="#projects" className="hover:text-white transition">Dự án tiêu biểu</a></li>
                        <li><a href="#news" className="hover:text-white transition">Tin tức & Sự kiện</a></li>
                        <li><a href="#contact" className="hover:text-white transition">Liên hệ báo giá</a></li>
                    </ul>
                </div>

                {/* CỘT 4: THÔNG TIN TRỤ SỞ */}
                <div>
                    <h3 className="text-lg font-bold mb-6 border-l-4 border-red-500 pl-3 uppercase">Trụ sở chính</h3>
                    <div className="text-sm text-gray-300 space-y-4">
                        <p className="flex items-start gap-2">
                            <span className="text-red-400">📍</span>
                            Số 166 Lê Duẩn, Phường Mỹ Trà, Đồng Tháp
                        </p>
                        <a href={"tel:02773852252"} className="flex items-center gap-2">
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
            <div className=" max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center gap-4 text-xs text-gray-400">
                <p>© 2026 Minh Thanh Limited Company. All rights reserved.</p>

            </div>
        </footer>
        </body>
        </html>
    );
}