"use client";

export default function LandingPage() {
    const projectsData = [
        { title: "CẢI TẠO, NÂNG CẤP TBA 2 x 3P -2 MVA, 220,4KV", description: "CỤM CÔNG NGHIỆP THANH BÌNH - ĐỒNG THÁP", img: "/2026_MTC_WEB/2026_MTC_WEB_ANH/CAI-TAO-NANG-CAP-TBA2X3P-2MVA-220,4KV-TAI-CUM-CONG-NGHIEP-THANH-BINH-DONG-THAP.JPG" },
        { title: "NHÁNH RẼ 3P-22KV VƯỢT NHÁNH SÔNG TIỀN TẠO MẠCH VÒNG CẤP ĐIỆN", description: "AN GIANG - ĐỒNG THÁP", img: "/2026_MTC_WEB/2026_MTC_WEB_ANH/nhanh-re-3p-22kv-vuot-nhanh-song-tien-tao-mach-vong-cap-dien-tu-an-giang-dong-thap.jpg" },
        { title: "THI CÔNG HỆ THỐNG PIN NĂNG LƯỢNG MẶT TRỜI 1MVA", description: "TỈNH ĐỒNG THÁP", img: "/2026_MTC_WEB/2026_MTC_WEB_ANH/thi-cong-he-thong-pin-nang-luong-mat-troi-1mva-tinh-dong-thap.jpg" },
        { title: "CÔNG TRÌNH CẤP ĐIỆN NHÀ MÁY BIA KHU CÔNG NGHIỆP TRẦN QUỐC TOẢN", description: "TỈNH ĐỒNG THÁP", img: "/2026_MTC_WEB/2026_MTC_WEB_ANH/CONG_TRINH_CAP_DIEN_NHA_MAY_BIA.png" },
    ];

    return (
        <main className={"bg-white"}>
            {/* HERO SECTION - Tối ưu lại tỷ lệ 80/20 hoặc 75/25 */}
            <section className="relative h-auto md:h-[40vh] flex flex-col md:flex-row items-center justify-center md:justify-between bg-white px-4 md:px-16 py-8 md:py-8 gap-6 md:gap-8">

                {/* Banner: Mobile chiếm full ngang, lên Desktop mới chia lại flex */}
                <div className="w-full md:flex-1 flex justify-center md:justify-start">
                    <img
                        src="/2026_MTC_WEB/2026_MTC_WEB_ANH/2026%20WEB-BANG%20HIEU.png"
                        alt="Minh Thanh Banner"
                        /* Mobile: h-auto và w-full để nó bung hết cỡ. Desktop: giới hạn max-h để không quá thô */
                        className="h-auto w-full max-w-[90%] md:max-w-full md:max-h-[35vh] object-contain"
                    />
                </div>

                {/* Icon TTP: Mobile thu nhỏ lại một chút để không chiếm chỗ Banner */}
                <div className="flex justify-center items-center w-24 sm:w-32 md:w-48 lg:w-56">
                    <img
                        src="/2026_MTC_WEB/2026_MTC_WEB_ANH/LOGO%20TTP.jpg"
                        alt="TTP Certification"
                        className="h-auto w-full object-contain border border-gray-100 shadow-sm rounded-sm"
                    />
                </div>
            </section>


            <section className={"anh-bia-container bg-white"}>
                <div className={"anh-bia "}>
                    <div className={"p-10"}>
                        <img src="/2026_MTC_WEB/2026_MTC_WEB_ANH/ANH%20BIA.png" alt="anh bia"/>
                    </div>
                </div>




            </section>
            <section className="bg-white py-8 md:py-0">
                <div className="flex flex-col md:flex-row items-stretch bg-white overflow-hidden px-4 md:px-10 pb-5">
                    {/* 1. Phần Ảnh */}
                    <div className="flex-1">
                        <img
                            src="/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC%20MAT%20DUNG%20-%20se%20thay%20anh%20khac.jpg"
                            alt="Văn phòng Minh Thanh"
                            className="w-full h-full object-cover rounded-lg md:rounded-none"
                        />
                    </div>

                    {/* 2. Phần Chữ */}
                    <div className="flex-1 bg-white p-4 md:p-12 flex flex-col text-justify justify-center">
                        {/* Fix leading: mobile dùng relaxed (vừa phải), desktop dùng leading-[3rem] (thoáng) */}
                        <div className="text-base md:text-2xl lg:text-3xl font-normal not-italic text-[#292c8f] leading-relaxed md:leading-[3rem] lg:leading-[4rem]">
                            <p>
                                Thành lập từ năm 2000, <span className="font-bold">Công ty TNHH Minh Thanh</span> là nhà thầu uy tín với hơn 25 năm kinh nghiệm chuyên tư vấn, lắp đặt hệ thống điện đến 35kV, chiếu sáng đô thị và năng lượng mặt trời.
                            </p>
                            <br className="hidden md:block" /> {/* Ẩn bớt khoảng trống trên mobile */}
                            <p>
                                Với đội ngũ kỹ sư lành nghề và hệ thống sản xuất bài bản, chúng tôi cam kết mang đến những giải pháp năng lượng an toàn và bền vững. Lấy phương châm <span className="font-bold">&quot;Niềm tin của bạn!&quot;</span> làm kim chỉ nam, <span className="font-bold uppercase">công ty TNHH Minh Thanh</span> không ngừng nỗ lực đồng hành cùng sự thịnh vượng của quý khách hàng.
                            </p>
                        </div>

                        {/* Chữ Xem thêm: Đưa vào trong flex container để nó luôn bám sát đoạn văn mà không cần margin âm quá đà */}
                        <div className="text-[#292c8f] text-right mt-4 md:mt-6 text-lg md:text-2xl lg:text-3xl font-normal italic">
                            <a href="#" className="hover:underline">Xem thêm...</a>
                        </div>
                    </div>
                </div>
            </section>
            {/*linh vuc hoat dong section*/}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Tiêu đề phần */}
                    <h2 className="text-[22px] sm:text-2xl md:text-4xl font-extrabold text-[#292c8f] uppercase text-center mb-10 md:mb-16 tracking-tighter md:tracking-tight whitespace-nowrap">
                        Lĩnh vực hoạt động
                    </h2>

                    {/* Lưới các dịch vụ */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Card 1: Điện công nghiệp */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#292c8f] group">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Điện công nghiệp & Dân dụng</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Thi công, lắp đặt hệ thống điện trọn gói cho nhà máy và hộ gia đình.</p>
                        </div>

                        {/* Card 2: Trạm biến áp */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-red-600 group">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Đường dây & Trạm biến áp</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Thi công hệ thống đường dây và trạm biến áp lên đến 35kV.</p>
                        </div>

                        {/* Card 3: Chiếu sáng đô thị */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#292c8f] group">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💡</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Chiếu sáng đô thị</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Giải pháp chiếu sáng đường phố, khu đô thị hiện đại và tiết kiệm điện.</p>
                        </div>

                        {/* Card 4: Năng lượng mặt trời */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-red-600 group">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">☀️</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Năng lượng mặt trời</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Thi công, lắp đặt hệ thống pin năng lượng mặt trời tối ưu hiệu suất cho doanh nghiệp, hộ gia đình.</p>
                        </div>

                    </div>

                    {/* Nút xem thêm phía dưới */}
                    <div className="text-center mt-16">
                        <button className="px-10 py-3 border-2 border-[#292c8f] text-[#292c8f] font-bold rounded-full hover:bg-[#292c8f] hover:text-white transition-all duration-300 uppercase tracking-wider">
                            Tìm hiểu chi tiết dịch vụ
                        </button>
                    </div>
                </div>
            </section>

            <section className={"thibidi-container"}>
                <div className="flex flex-col items-stretch bg-white overflow-hidden px-4 md:px-10 py-5">
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-blue-900 uppercase ">ĐẠI LÝ CHÍNH HÃNG MÁY BIẾN THẾ THIBIDI NĂM 2026</h2>
                    <div className={"w-full flex justify-center"}>
                        <img
                            src="/2026_MTC_WEB/2026_MTC_WEB_ANH/thibidi.webp"
                            alt="thibidi"
                            className="w-4/5 h-full object-cover rounded-lg md:rounded-none"
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

                                {/* Container ảnh với tỉ lệ cố định 16:9 hoặc 3:2 */}
                                <div className="relative aspect-[1/1] overflow-hidden">
                                    <img
                                        src={project.img}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                        alt={project.title}
                                    />
                                </div>

                                {/* Nội dung chữ */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-3 line-clamp-3 min-h-[4rem] md:min-h-[5rem] uppercase leading-tight md:leading-snug">
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
                        <button
                            type="button"
                            className="px-8 py-4 bg-[#292c8f] text-white text-xl font-bold rounded-lg shadow-md hover:bg-blue-800 hover:shadow-lg active:scale-95 transition-all duration-200 uppercase"
                        >
                            Xem thêm các dự án khác
                        </button>
                    </div>
                </div>

            </section>

            {/* CONTACT SECTION - Giữ nguyên */}
            <section id="contact" className="bg-gray-100 py-20 px-6">
                {/* ... code cũ của ông ... */}
            </section>
        </main>
    );
}