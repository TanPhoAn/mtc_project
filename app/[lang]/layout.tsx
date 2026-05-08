import '../globals.css';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { getDictionary } from '../dictionaries';
import Navbar from '@/components/Navbar';

const montserrat = Montserrat({
    subsets: ['latin', 'vietnamese'],
    weight: ['400', '700'],
    variable: '--font-montserrat',
});

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: 'vi' | 'en' }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <html lang={lang} className="scroll-smooth" suppressHydrationWarning>
            <body className={`${montserrat.className} bg-white`}>
                <Navbar lang={lang} dict={dict} />

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
                                {dict.footer.description}
                            </p>
                        </div>

                        {/* CỘT 2: DỊCH VỤ CHÍNH */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 border-l-4 border-red-500 pl-3 uppercase tracking-wide">{dict.footer.sectors}</h3>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li className="hover:text-white transition cursor-pointer">⚡ {dict.home.sector_2_title}</li>
                                <li className="hover:text-white transition cursor-pointer">🏭 {dict.home.sector_1_title}</li>
                                <li className="hover:text-white transition cursor-pointer">💡 {dict.home.sector_3_title}</li>
                                <li className="hover:text-white transition cursor-pointer">☀️ {dict.home.sector_4_title}</li>
                                <li className="hover:text-white transition cursor-pointer">🛠 {lang === 'vi' ? 'Bảo trì & Sửa chữa hệ thống điện' : 'Maintenance & Electrical Repair'}</li>
                            </ul>
                        </div>

                        {/* CỘT 3: LIÊN KẾT NHANH */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 border-l-4 border-red-500 pl-3 uppercase tracking-wide">{dict.footer.links}</h3>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li><Link href={`/`} className="hover:text-white transition">{dict.nav.home}</Link></li>
                                <li><Link href={`/about`} className="hover:text-white transition">{dict.nav.about}</Link></li>
                                <li><a href="#projects" className="hover:text-white transition">{dict.nav.projects}</a></li>
                                <li><Link href={`/news`} className="hover:text-white transition">{dict.nav.news}</Link></li>
                                <li><a href="#contact" className="hover:text-white transition">{dict.home.contact_title_us}</a></li>
                            </ul>
                        </div>

                        {/* CỘT 4: THÔNG TIN TRỤ SỞ */}
                        <div id="contact">
                            <h3 className="text-lg font-bold mb-6 border-l-4 border-red-500 pl-3 uppercase tracking-wide">{dict.footer.headquarters}</h3>
                            <div className="text-sm text-gray-300 space-y-4">
                                <p className="flex items-start gap-2">
                                    <span className="text-red-400">📍</span>
                                    {lang === 'vi' ? 'Số 166 Lê Duẩn, Phường Mỹ Trà, TP. Cao Lãnh, Đồng Tháp' : '166 Le Duan St, My Tra, Cao Lanh City, Dong Thap'}
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
                        <p>© 2026 Minh Thanh Limited Company. {dict.footer.all_rights_reserved}</p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
