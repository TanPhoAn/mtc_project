'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface NavbarProps {
    lang: 'vi' | 'en';
    dict: any;
}

export default function Navbar({ lang, dict }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const closeMenu = () => setIsOpen(false);

    const switchLanguage = (newLang: 'vi' | 'en') => {
        if (lang === newLang) return;
        
        // Thiết lập Cookie và tải lại trang
        document.cookie = `NEXT_LOCALE=${newLang};path=/;max-age=31536000`;
        window.location.reload();
    };

    const navLinks = [
        { href: `/`, label: dict.nav.home },
        { href: `/about`, label: dict.nav.about },
        { href: `/news`, label: dict.nav.news },
        { href: `/projects`, label: dict.nav.projects },
    ];

    return (
        <>
            {/* TOP BAR */}
            <div className="bg-[#1e3a8a] text-white py-2 px-6 text-xs md:text-sm flex justify-between items-center">
                <div className="flex space-x-4">
                    <span>📞 <a href="tel:02773852252" className="hover:text-red-400">02773.852.252</a> </span>
                    <span className="hidden md:inline">📧 mtcdongthap@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                    <button 
                        onClick={() => switchLanguage('vi')}
                        className={`font-bold transition hover:text-red-400 ${lang === 'vi' ? 'underline text-red-400' : ''}`}
                    >
                        VN
                    </button>
                    <span>|</span>
                    <button 
                        onClick={() => switchLanguage('en')}
                        className={`font-bold transition hover:text-red-400 ${lang === 'en' ? 'underline text-red-400' : ''}`}
                    >
                        EN
                    </button>
                </div>
            </div>

            {/* NAVIGATION */}
            <nav className="sticky top-0 z-50 bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
                    {/* LOGO */}
                    <div className="flex items-center shrink-0">
                        <Link href={`/${lang}`} onClick={closeMenu} className="block">
                            <img
                                src="/2026_MTC_WEB/2026_MTC_WEB_ANH/2026%20WEB-BANG%20HIEU.png"
                                alt="Minh Thanh Logo"
                                className="h-10 md:h-12 w-auto object-contain transition-transform hover:scale-110"
                            />
                        </Link>
                    </div>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex space-x-8 font-semibold text-gray-700">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href} 
                                className="hover:text-red-600 transition"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* HAMBURGER BUTTON */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-blue-900 p-2 focus:outline-none hover:bg-gray-100 rounded-lg transition"
                            aria-label={dict.nav.toggle_menu}
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

                {/* MOBILE MENU */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t 
                    ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="flex flex-col space-y-4 p-6 font-semibold text-gray-700">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href} 
                                onClick={closeMenu} 
                                className="hover:text-red-600 transition border-b border-gray-50 pb-2"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}
