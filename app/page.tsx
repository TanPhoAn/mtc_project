"use client";
import { newsData } from "@/data/newsData";
import Link from "next/link";

export default function LandingPage() {
    // Lấy tin tức mới nhất từ mảng dữ liệu (bài có index cuối cùng)
    const latestNews = newsData[newsData.length - 1];

    const projectsData = [
        {
            title: "CẢI TẠO, NÂNG CẤP TBA 2 x 3P -2 MVA, 220,4KV",
            description: "CỤM CÔNG NGHIỆP THANH BÌNH - ĐỒNG THÁP",
            img: "/2026_MTC_WEB/2026_MTC_WEB_ANH/CAI-TAO-NANG-CAP-TBA2X3P-2MVA-220,4KV-TAI-CUM-CONG-NGHIEP-THANH-BINH-DONG-THAP.JPG"
        },
        {
            title: "NHÁNH RẼ 3P-22KV VƯỢT NHÁNH SÔNG TIỀN TẠO MẠCH VÒNG CẤP ĐIỆN",
            description: "AN GIANG - ĐỒNG THÁP",
            img: "/2026_MTC_WEB/2026_MTC_WEB_ANH/nhanh-re-3p-22kv-vuot-nhanh-song-tien-tao-mach-vong-cap-dien-tu-an-giang-dong-thap.jpg"
        },
        {
            title: "THI CÔNG HỆ THỐNG PIN NĂNG LƯỢNG MẶT TRỜI 1MVA",
            description: "TỈNH ĐỒNG THÁP",
            img: "/2026_MTC_WEB/2026_MTC_WEB_ANH/thi-cong-he-thong-pin-nang-luong-mat-troi-1mva-tinh-dong-thap.jpg"
        },
        {
            title: "CÔNG TRÌNH CẤP ĐIỆN NHÀ MÁY BIA KHU CÔNG NGHIỆP TRẦN QUỐC TOẢN",
            description: "TỈNH ĐỒNG THÁP",
            img: "/2026_MTC_WEB/2026_MTC_WEB_ANH/CONG_TRINH_CAP_DIEN_NHA_MAY_BIA.png"
        },
    ];

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
                            <p>
                                Thành lập từ năm 2000, <span className="font-bold">Công ty TNHH Minh Thanh</span> là nhà thầu uy tín với hơn 25 năm kinh nghiệm chuyên tư vấn, lắp đặt hệ thống điện đến 35kV, chiếu sáng đô thị và năng lượng mặt trời.
                            </p>
                            <p className="hidden lg:block">
                                Với đội ngũ kỹ sư lành nghề và hệ thống sản xuất bài bản, chúng tôi cam kết mang đến những giải pháp năng lượng an toàn và bền vững.
                            </p>
                            <p className="lg:mt-2 lg:pt-15 md:pt-10">
                                Lấy phương châm <span className="font-bold">&quot;Niềm tin của bạn!&quot;</span> làm kim chỉ nam, <span className="font-bold uppercase">Minh Thanh</span> luôn đồng hành cùng quý khách.
                            </p>
                        </div>
                        <div className="text-[#292c8f] text-right mt-1 md:mt-2 text-lg md:text-xl font-normal italic">
                            <Link href={"/about"} className="hover:underline">Xem thêm...</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* LINH VUC HOAT DONG SECTION */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-[22px] sm:text-2xl md:text-4xl font-extrabold text-[#292c8f] uppercase text-center mb-10 md:mb-16 tracking-tighter md:tracking-tight whitespace-nowrap">
                        Lĩnh vực hoạt động
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#292c8f] group">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Điện công nghiệp & Dân dụng</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Thi công, lắp đặt hệ thống điện trọn gói cho nhà máy và hộ gia đình.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-red-600 group">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Đường dây & Trạm biến áp</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Thi công hệ thống đường dây và trạm biến áp lên đến 35kV.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#292c8f] group">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💡</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Chiếu sáng đô thị</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Giải pháp chiếu sáng đường phố, khu đô thị hiện đại và tiết kiệm điện.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-red-600 group">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">☀️</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Năng lượng mặt trời</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Thi công, lắp đặt hệ thống pin năng lượng mặt trời tối ưu hiệu suất cho doanh nghiệp.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* THIBIDI SECTION */}
            <section className="thibidi-container">
                <div className="flex flex-col items-stretch bg-white overflow-hidden px-4 md:px-10 py-5">
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-blue-900 uppercase">ĐẠI LÝ CHÍNH HÃNG MÁY BIẾN THẾ THIBIDI NĂM 2026</h2>
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
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-blue-900 uppercase">Công trình tiêu biểu</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {projectsData.map((project, index) => (
                            <div key={index} className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100 h-full">
                                <div className="relative aspect-[1/1] overflow-hidden">
                                    <img
                                        src={project.img}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                        alt={project.title}
                                    />
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-3 line-clamp-3 min-h-[4rem] md:min-h-[5rem] uppercase leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 text-lg font-medium border-t pt-4 mt-auto">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button className="px-8 py-4 bg-[#292c8f] text-white text-xl font-bold rounded-lg shadow-md hover:bg-blue-800 transition-all uppercase">
                            Xem thêm các dự án khác
                        </button>
                    </div>
                </div>
            </section>

            {/* NEWS SECTION - DÙNG NEWSDATA TỪ FILE TS */}
            <section id="news" className="py-16 bg-white max-w-7xl mx-auto px-4 md:px-10">
                <h2 className="text-2xl md:text-4xl font-bold text-[#292c8f] uppercase text-center mb-12 tracking-tight">
                    Tin tức & Sự kiện
                </h2>
                {latestNews ? (
                    <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-10 border-b pb-10">
                        <div className="flex-1 md:w-2/5 lg:max-w-[40%]">
                            <div className="h-full border-4 border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                                <Link href={`/news/${latestNews.id}`}>
                                    <img
                                        src={latestNews.image}
                                        alt={latestNews.title}
                                        className="w-full h-full object-cover aspect-video md:aspect-auto group-hover:scale-105 transition-transform duration-500"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-between py-2">
                            <div>
                                <div className="text-red-600 font-bold text-sm mb-2">📅 {latestNews.date}</div>
                                <Link href={`/news/${latestNews.id}`}>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-snug hover:text-[#292c8f] transition-colors text-justify">
                                        {latestNews.title}
                                    </h3>
                                </Link>
                                <div className="text-gray-600 text-base md:text-lg text-justify leading-relaxed line-clamp-5">
                                    <p>{latestNews.description}</p>
                                </div>
                            </div>
                            <div className="mt-6 text-center md:text-right">
                                <Link href={`/news/${latestNews.id}`} className="text-[#292c8f] font-bold italic hover:text-red-600 transition-all flex items-center justify-center md:justify-end gap-2">
                                    Đọc bài viết chi tiết <span>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">Đang cập nhật tin tức...</p>
                )}
                <div className="mt-8 text-center">
                    <Link href="/news" className="inline-block px-6 py-2 border-2 border-[#292c8f] text-[#292c8f] font-bold rounded-full hover:bg-[#292c8f] hover:text-white transition-all">
                        Xem tất cả tin tức
                    </Link>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="py-8 bg-white max-w-7xl mx-auto px-4 md:px-10">
                <h2 className="text-2xl md:text-4xl font-bold text-[#292c8f] uppercase text-center mb-6 tracking-tight">
                    Thông tin Liên hệ
                </h2>
                <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-10 pt-8">
                    <div className="flex-1 md:w-2/5 lg:max-w-[45%] flex flex-col-reverse gap-4">
                        <div className="flex-1 border-4 border-gray-100 rounded-xl overflow-hidden shadow-sm">
                            <iframe
                                className="w-full h-full min-h-[300px] md:min-h-[400px] border-0"
                                allowFullScreen={true}
                                loading="lazy"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.4059318600075!2d105.63601627529634!3d10.46863086479509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a65b3794f62c1%3A0xf4e14ef995cab253!2zMTY2IEzDqiBEdeG6qW4sIFBoxrDhu51uZyBN4bu5IFBow7osIE3hu7kgVHLDoCwgxJDhu5NuZyBUaMOhcCA4NzAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1775847530346!5m2!1svi!2s"
                            ></iframe>
                        </div>
                        <div className="bg-[#292c8f] text-white p-5 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div>
                                <p className="font-bold uppercase text-sm tracking-wider">Thời gian làm việc</p>
                                <p className="text-xs opacity-80">Thứ 2 — Thứ 7</p>
                            </div>
                            <div className="flex gap-6 text-sm">
                                <div className="text-center">
                                    <p className="font-semibold">Sáng</p>
                                    <p className="bg-white/20 px-2 py-1 rounded mt-1">07:30 - 11:30</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-semibold">Chiều</p>
                                    <p className="bg-white/20 px-2 py-1 rounded mt-1">13:00 - 17:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between py-2">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#292c8f] mb-6 uppercase">Trụ Sở Chính</h3>
                            <div className="space-y-4 text-gray-700 text-base md:text-lg">
                                <p><span className="text-[#292c8f] font-bold min-w-[100px] inline-block">Địa chỉ:</span> Số 166 Lê Duẩn, Mỹ Trà, Đồng Tháp</p>
                                <div className="border-t pt-4">
                                    <span className="text-[#292c8f] font-bold min-w-[100px] inline-block">Điện thoại:</span>
                                    <a href="tel:02773852252" className="hover:text-red-600">02773 852 252</a> - <a href="tel:02773857494" className="hover:text-red-600">02773 857 494</a>
                                </div>
                                <p className="border-t pt-4"><span className="text-[#292c8f] font-bold min-w-[100px] inline-block">Email:</span> mtcdongthap@gmail.com</p>
                                <p className="border-t pt-4"><span className="text-[#292c8f] font-bold min-w-[100px] inline-block">Website:</span> minhthanhelectric.com.vn</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl md:text-2xl font-bold text-[#292c8f] mb-6 uppercase">Phân xưởng cơ điện lạnh</h3>
                            <div className="space-y-4 text-gray-700 text-base md:text-lg">
                                <p><span className="text-[#292c8f] font-bold min-w-[100px] inline-block">Địa chỉ:</span> Số 158-160 Lê Duẩn, Mỹ Trà, Đồng Tháp</p>
                                <p className="border-t pt-4"><span className="text-[#292c8f] font-bold min-w-[100px] inline-block">Điện thoại:</span> 02773 858 169</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}