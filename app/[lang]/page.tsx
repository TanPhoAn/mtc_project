
import { newsData } from "@/data/newsData";
import Link from "next/link";
import { getDictionary } from '@/app/dictionaries';
import {projectData} from "@/data/projectsData";



export default async function LandingPage({ params }: { params: Promise<{ lang: 'vi' | 'en' }> }) {    // Lấy tin tức mới nhất từ mảng dữ liệu (bài có index cuối cùng)
    const latestNews = newsData[newsData.length - 1];
    const latestProjects = 1;
    const {lang} = await params;
    const dict = await getDictionary(lang);
    // const projectsData = [
    //     {
    //         title: "CẢI TẠO, NÂNG CẤP TBA 2 x 3P -2 MVA, 220,4KV",
    //         description: "CỤM CÔNG NGHIỆP THANH BÌNH - ĐỒNG THÁP",
    //         img: "/2026_MTC_WEB/2026_MTC_WEB_ANH/CAI-TAO-NANG-CAP-TBA2X3P-2MVA-220,4KV-TAI-CUM-CONG-NGHIEP-THANH-BINH-DONG-THAP.JPG"
    //     },
    //     {
    //         title: "NHÁNH RẼ 3P-22KV VƯỢT NHÁNH SÔNG TIỀN TẠO MẠCH VÒNG CẤP ĐIỆN",
    //         description: "AN GIANG - ĐỒNG THÁP",
    //         img: "/2026_MTC_WEB/2026_MTC_WEB_ANH/nhanh-re-3p-22kv-vuot-nhanh-song-tien-tao-mach-vong-cap-dien-tu-an-giang-dong-thap.jpg"
    //     },
    //     {
    //         title: "THI CÔNG HỆ THỐNG PIN NĂNG LƯỢNG MẶT TRỜI 1MVA",
    //         description: "TỈNH ĐỒNG THÁP",
    //         img: "/2026_MTC_WEB/2026_MTC_WEB_ANH/thi-cong-he-thong-pin-nang-luong-mat-troi-1mva-tinh-dong-thap.jpg"
    //     },
    //     {
    //         title: "CÔNG TRÌNH CẤP ĐIỆN NHÀ MÁY BIA KHU CÔNG NGHIỆP TRẦN QUỐC TOẢN",
    //         description: "TỈNH ĐỒNG THÁP",
    //         img: "/2026_MTC_WEB/2026_MTC_WEB_ANH/CONG_TRINH_CAP_DIEN_NHA_MAY_BIA.png"
    //     },
    // ];

    return (
        <main className={"bg-white"}>
            {/* HERO SECTION */}
            <section className="relative flex flex-row items-center justify-between bg-white px-2 md:px-16 py-6 md:py-8 gap-2 md:gap-8">
                <div className="flex-[3] flex items-center h-26 md:h-40 lg:h-50">
                    <img
                        src="/2026_MTC_WEB/2026_MTC_WEB_ANH/2026%20WEB-BANG%20HIEU.png"
                        alt="Minh Thanh Banner"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="flex-1 flex justify-end items-center min-w-[60px] max-w-[70px] md:max-w-[170px]">
                    <img
                        src="/2026_MTC_WEB/2026_MTC_WEB_ANH/LOGO%20TTP.jpg"
                        alt="TTP Certification"
                        className="w-full h-auto object-contain border border-gray-100 shadow-sm rounded-sm"
                    />
                </div>
            </section>

            {/* ANH BIA SECTION */}
            <section className="anh-bia-container bg-white py-4 md:py-10">
                <div className="anh-bia max-w-7xl mx-auto px-4 md:px-10">
                    <div className="flex justify-center">
                        <img
                            src="/2026_MTC_WEB/2026_MTC_WEB_ANH/ANH%20BIA.png"
                            alt="anh bia"
                            className="w-full md:w-[90%] lg:w-[85%] h-auto object-contain rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="bg-white py-4 md:py-8">
                <div className="flex flex-col md:flex-row items-stretch bg-white overflow-hidden px-4 md:px-10 pb-5 max-w-7xl mx-auto">
                    <div className="flex-1 max-h-[490px] md:max-h-[500px] lg:max-h-[750px] overflow-hidden rounded-lg shadow-md">
                        <img
                            src="/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC%20MAT%20DUNG%20-%20se%20thay%20anh%20khac.jpg"
                            alt="Văn phòng Minh Thanh"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 bg-white px-4 md:p-5 lg:p-8 flex flex-col text-justify justify-center">
                        <div className="text-base md:text-xl lg:text-2xl font-normal not-italic text-[#292c8f] leading-relaxed md:leading-[2.5rem] lg:leading-[3.2rem]">
                            <p dangerouslySetInnerHTML={{ __html: dict.home.about_title }}>

                            </p>
                            <p className="hidden lg:block" >
                                {dict.home.about_desc_long}
                            </p>
                            <p className="lg:mt-2 lg:pt-15 md:pt-10" dangerouslySetInnerHTML={{ __html: dict.home.slogan}}>
                            </p>
                        </div>
                        <div className="text-[#292c8f] text-right mt-1 md:mt-2 text-lg md:text-xl font-normal italic">
                            <Link href={`/${lang}/about`} className="hover:underline">{dict.home.view_more}</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* LINH VUC HOAT DONG SECTION */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-[22px] sm:text-2xl md:text-4xl font-extrabold text-[#292c8f] uppercase text-center mb-10 md:mb-16 tracking-tighter md:tracking-tight whitespace-nowrap">
                        {dict.home.sectors_title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#292c8f] group">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{dict.home.sector_1_title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{dict.home.sector_1_desc}</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-red-600 group">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{dict.home.sector_2_title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{dict.home.sector_2_desc}</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#292c8f] group">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💡</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{dict.home.sector_3_title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{dict.home.sector_3_desc}</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-red-600 group">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">☀️</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{dict.home.sector_4_title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{dict.home.sector_4_desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* THIBIDI SECTION */}
            <section className="thibidi-container">
                <div className="flex flex-col items-stretch bg-white overflow-hidden px-4 md:px-10 py-5">
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-blue-900 uppercase">{dict.home.thibidi_title}</h2>
                    <div className="w-full flex justify-center">
                        <img
                            src="/2026_MTC_WEB/2026_MTC_WEB_ANH/thibidi.png"
                            alt="thibidi"
                            className="w-4/5 h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-blue-900 uppercase">
                        {dict.home.projects_title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Đổi thành projectData (không có s) và dùng slice(0, 4) nếu chỉ muốn hiện 4 cái tiêu biểu ở trang chủ */}
                        {projectData.slice(0, 4).map((project) => (
                            <div key={project.id} className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100 h-full">
                                <div className="relative aspect-square overflow-hidden">
                                    <img
                                        src={project.thumbnail} // Dùng thumbnail thay cho img
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                        alt={lang === 'vi' ? project.title : project.title_en}
                                    />
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-3 line-clamp-3 min-h-[4rem] md:min-h-[5rem] uppercase leading-tight">
                                        {/* Check lang để hiện Title */}
                                        {lang === 'vi' ? project.title : project.title_en}
                                    </h3>
                                    <p className="text-gray-500 text-lg font-medium border-t pt-4 mt-auto">
                                        {/* Check lang để hiện Description */}
                                        {lang === 'vi' ? project.description : project.description_en}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link
                            href={`/${lang}/projects`}
                            className="inline-block px-8 py-4 bg-[#292c8f] text-white text-xl font-bold rounded-lg shadow-md hover:bg-blue-800 transition-all uppercase"
                        >
                            {dict.home.view_all_projects}
                        </Link>
                    </div>
                </div>
            </section>

            {/* NEWS SECTION (HOME) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-blue-900 uppercase">
                        {dict.home.news_title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Lấy 3 bài mới nhất để hiện ở trang chủ */}
                        {newsData.slice(0, 3).map((item) => (
                            <div key={item.id} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
                                {/* Ảnh tin tức */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={lang === 'vi' ? item.title : item.title_en}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {item.date}
                                    </div>
                                </div>

                                {/* Nội dung tin tức */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#292c8f] transition-colors leading-tight">
                                        {/* Hiển thị tiêu đề theo ngôn ngữ */}
                                        {lang === 'vi' ? item.title : item.title_en}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
                                        {/* Hiển thị mô tả theo ngôn ngữ */}
                                        {lang === 'vi' ? item.description : item.description_en}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-gray-200">
                                        <Link
                                            href={`/${lang}/news/${item.id}`}
                                            className="text-[#292c8f] font-bold flex items-center gap-2 hover:gap-4 transition-all"
                                        >
                                            {lang === 'vi' ? 'Xem chi tiết' : 'Read more'} <span>→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Nút xem tất cả tin tức */}
                    <div className="text-center mt-12">
                        <Link
                            href={`/${lang}/news`}
                            className="inline-block px-8 py-3 border-2 border-[#292c8f] text-[#292c8f] font-bold rounded-lg hover:bg-[#292c8f] hover:text-white transition-all uppercase"
                        >
                            {lang === 'vi' ? 'Tất cả tin tức' : 'All News'}
                        </Link>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="py-8 bg-white max-w-7xl mx-auto px-4 md:px-10">
                <h2 className="text-2xl md:text-4xl font-bold text-[#292c8f] uppercase text-center mb-6 tracking-tight">
                    {dict.home.contact_title}
                </h2>
                <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-10 pt-8">
                    <div className="flex-1 md:w-2/5 lg:max-w-[45%] flex flex-col-reverse gap-4">
                        <div className="flex-1 border-4 border-gray-100 rounded-xl overflow-hidden shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.580468305001!2d105.6324833153342!3d10.4571168925386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a6496924f0975%3A0x6b4a6946059b027d!2zMTY2IEzDqiBEdXnhuqluLCBN4bu5IFRyw6AsIENhbyBMw6puaCwgxJDhu5NuZyBUaMOhcCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1650000000000!5m2!1svi!2s"
                                className="w-full h-full min-h-[400px] md:min-h-[500px] border-0"
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                        <div className="bg-[#292c8f] text-white p-5 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div>
                                <p className="font-bold uppercase text-sm tracking-wider">{dict.home.working_hours}</p>
                                <p className="text-xs opacity-80">{dict.home.days_range}</p>
                            </div>
                            <div className="flex gap-6 text-sm">
                                <div className="text-center">
                                    <p className="font-semibold">{dict.home.morning}</p>
                                    <p className="bg-white/20 px-2 py-1 rounded mt-1">07:30 - 11:30</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-semibold">{dict.home.afternoon}</p>
                                    <p className="bg-white/20 px-2 py-1 rounded mt-1">13:00 - 17:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between py-2">
                        {/* TRỤ SỞ CHÍNH */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#292c8f] mb-6 uppercase">{dict.home.headquarters}</h3>
                            <div className="space-y-4 text-gray-700 text-base md:text-lg">
                                <p>
                                    <span className="text-[#292c8f] font-bold min-w-[100px] inline-block">{dict.home.address_label}:</span>
                                    {lang === 'vi' ? 'Số 166 Lê Duẩn, Mỹ Trà, Đồng Tháp' : '166 Le Duan St, My Tra, Dong Thap'}
                                </p>
                                <div className="border-t pt-4">
                                    <span className="text-[#292c8f] font-bold min-w-[100px] inline-block">{dict.home.phone_label}:</span>
                                    <a href="tel:02773852252" className="hover:text-red-600"> 02773 852 252</a> - <a href="tel:02773857494" className="hover:text-red-600">02773 857 494</a>
                                </div>
                                <p className="border-t pt-4"><span className="text-[#292c8f] font-bold min-w-[100px] inline-block">{dict.home.email_label}:</span> mtcdongthap@gmail.com</p>
                                <p className="border-t pt-4"><span className="text-[#292c8f] font-bold min-w-[100px] inline-block">{dict.home.website_label}:</span> minhthanhelectric.com.vn</p>
                            </div>
                        </div>

                        {/* PHÂN XƯỞNG */}
                        <div className="mt-8">
                            <h3 className="text-xl md:text-2xl font-bold text-[#292c8f] mb-6 uppercase">{dict.home.workshop}</h3>
                            <div className="space-y-4 text-gray-700 text-base md:text-lg">
                                <p>
                                    <span className="text-[#292c8f] font-bold min-w-[100px] inline-block">{dict.home.address_label}:</span>
                                    {lang === 'vi' ? 'Số 158-160 Lê Duẩn, Mỹ Trà, Đồng Tháp' : '158-160 Le Duan St, My Tra, Dong Thap'}
                                </p>
                                <div className="border-t pt-4">
                                    <span className="text-[#292c8f] font-bold min-w-[100px] inline-block">{dict.home.phone_label}:</span>
                                    <a href="tel:02773858169" className="hover:text-red-600"> 02773 858 169</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}