import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

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
        <link rel="icon" type="image/png" href="/favicon_mtc.png"/>
        {/* TOP BAR */}
        <div className="bg-[#1e3a8a] text-white py-2 px-6 text-xs md:text-sm flex justify-between items-center">
            <div className="flex space-x-4">
                <span>📞 02773.852.553</span>
                <span className="hidden md:inline">📧 minhthanhelectric@gmail.com</span>
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
                        <h1 className="text-xl font-bold text-red-600 uppercase">Minh Thanh</h1>
                        <p className="text-[10px] font-semibold text-blue-900 tracking-tighter uppercase">Minh Thanh
                            Limited Company</p>
                    </div>
                </div>
                <div className="hidden md:flex space-x-8 font-semibold text-gray-700">
                    <a href="#" className="hover:text-red-600 transition">Trang chủ</a>
                    <a href="#about" className="hover:text-red-600 transition">Giới thiệu</a>
                    <a href="#projects" className="hover:text-red-600 transition">Dự án</a>
                    <a href="#contact" className="hover:text-red-600 transition">Liên hệ</a>
                </div>
            </div>
        </nav>

        {children}

        {/*footer*/}
        </body>
        </html>
    );
}