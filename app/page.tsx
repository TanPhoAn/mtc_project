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
            <section className="relative h-auto flex flex-row items-center justify-between bg-white px-2 md:px-16 py-6 md:py-8 gap-2 md:gap-8">

                {/* Banner: Chiếm phần lớn diện tích ngang */}
                <div className="flex-[3] flex justify-start items-center">
                    <img
                        src="/2026_MTC_WEB/2026_MTC_WEB_ANH/2026%20WEB-BANG%20HIEU.png"
                        alt="Minh Thanh Banner"
                        /* w-full để nó bung theo diện tích flex-[3], max-h để không quá cao trên Desktop */
                        className="w-full h-auto max-h-[20vh] md:max-h-[40vh] object-contain"
                    />
                </div>

                {/* Icon TTP: Chiếm phần nhỏ, cố định kích thước tối đa trên mobile để không lấn sân */}
                <div className="flex-1 flex justify-end items-center min-w-[60px] max-w-[80px] md:max-w-[180px]">
                    <img
                        src="/2026_MTC_WEB/2026_MTC_WEB_ANH/LOGO%20TTP.jpg"
                        alt="TTP Certification"
                        className="w-full h-auto object-contain border border-gray-100 shadow-sm rounded-sm"
                    />
                </div>

            </section>

            <section className="anh-bia-container bg-white py-4 md:py-10">
                <div className="anh-bia max-w-7xl mx-auto px-4 md:px-10">
                    <div className="flex justify-center">
                        <img
                            src="/2026_MTC_WEB/2026_MTC_WEB_ANH/ANH%20BIA.png"
                            alt="anh bia"
                            /* Mobile: w-full để nhìn rõ. Desktop: chỉ chiếm 80-90% để tạo khoảng thở */
                            className="w-full md:w-[90%] lg:w-[85%] h-auto object-contain rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-white py-4 md:py-8">
                <div className="flex flex-col md:flex-row items-stretch bg-white overflow-hidden px-4 md:px-10 pb-5 max-w-7xl mx-auto">

                    {/* 1. Phần Ảnh */}
                    <div className="flex-1 max-h-[490px] md:max-h-[500px] lg:max-h-[750px] overflow-hidden  rounded-lg shadow-md">
                        <img
                            src="/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC%20MAT%20DUNG%20-%20se%20thay%20anh%20khac.jpg"
                            alt="Văn phòng Minh Thanh"
                            className="  object-cover "
                        />
                    </div>

                    {/* 2. Phần Chữ */}
                    <div className="flex-1 bg-white px-4 md:p-5 lg:p-8 flex flex-col text-justify justify-center sm:py-3 sm:px-0 ">
                        {/* Giảm nhẹ line-height từ [3rem] xuống [2.5rem] để khớp với chiều cao 80% */}
                        <div className="text-base md:text-xl lg:text-2xl font-normal not-italic text-[#292c8f] leading-relaxed md:leading-[2.5rem] lg:leading-[3.2rem]">
                            <p>
                                Thành lập từ năm 2000, <span className="font-bold">Công ty TNHH Minh Thanh</span> là nhà thầu uy tín với hơn 25 năm kinh nghiệm chuyên tư vấn, lắp đặt hệ thống điện đến 35kV, chiếu sáng đô thị và năng lượng mặt trời.
                            </p>

                            <p className="hidden lg:block"> {/* Trên màn hình vừa, ẩn bớt đoạn này để không bị tràn chiều cao */}
                                Với đội ngũ kỹ sư lành nghề và hệ thống sản xuất bài bản, chúng tôi cam kết mang đến những giải pháp năng lượng an toàn và bền vững.
                            </p>
                            <p className="lg:mt-2">
                                Lấy phương châm <span className="font-bold">&quot;Niềm tin của bạn!&quot;</span> làm kim chỉ nam, <span className="font-bold uppercase">Minh Thanh</span> luôn đồng hành cùng quý khách.
                            </p>
                        </div>

                        <div className="text-[#292c8f] text-right mt-1 md:mt-2 text-lg md:text-xl font-normal italic">
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
                            src="/2026_MTC_WEB/2026_MTC_WEB_ANH/thibidi.png"
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

            {/* CONTACT SECTION  */}
            <section className="py-16 bg-white max-w-7xl mx-auto px-4 md:px-10">
                {/* 1. Title Tin tức ở giữa */}
                <h2 className="text-2xl md:text-4xl font-bold text-[#292c8f] uppercase text-center mb-12 tracking-tight">
                    Tin tức & Sự kiện
                </h2>

                {/* 2. Flex Row Container */}
                <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-10 border-b pb-10">

                    {/* BÊN TRÁI: Ảnh tin tức */}
                    <div className="flex-1 md:w-2/5 lg:max-w-[40%]">
                        <div className="h-full border-4 border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <img
                                src="/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC - LE KY KET THUC TAP/4.jpg"
                                alt="Tin tức Minh Thanh"
                                /* - md:h-full + object-cover: Giúp ảnh cao bằng cột text bên cạnh ở màn hình >768px
                                   - aspect-video trên mobile để ảnh không bị quá cao choán màn hình
                                */
                                className="w-full h-full object-cover aspect-video md:aspect-auto"
                            />
                        </div>
                    </div>

                    {/* BÊN PHẢI: Flex Col cho Title và Content */}
                    <div className="flex-1 flex flex-col justify-between py-2">
                        <div>
                            {/* Title Tin tức: Fix căn lề trên mobile */}
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-snug  md:text-left text-justify ">
                                LỄ THỎA THUẬN HỢP TÁC GIỮA TRƯỜNG CAO ĐẢNG CƠ ĐIỆN NÔNG NGHIỆP VÀ MÔI TRƯỜNG VỚI CÔNG TY TNHH MINH THANH
                            </h3>

                            {/* Content: text-justify giúp căn đều hai bên cực đẹp */}
                            <div className="text-gray-600 text-base md:text-lg text-justify leading-relaxed md:line-clamp-6 lg:line-clamp-none">
                                <p>
                                    Ngày 12/3/2026 tại CƠ SỞ ĐÀO TẠO NGHỀ ĐỒNG THÁP - P. CAO LÃNH trực thuộc Trường CAO ĐẲNG NGHỀ - BỘ NÔNG NGHIỆP VÀ MÔI TRƯỜNG đã diễn ra LỄ KÝ KẾT THOẢ THUẬN HỢP TÁC với CTY TNHH MINH THANH tiếp nhận học sinh - sinh viên đi thực tập sản xuất nâng cao tay nghề điện công nghiệp, dân dụng...
                                </p>
                            </div>
                        </div>

                        {/* Nút xem chi tiết - Luôn nằm dưới cùng của cột */}
                        <div className="mt-6 text-center md:text-right">
                            <a href="#" className="text-[#292c8f] font-bold italic hover:text-red-600 transition-all">
                                Xem thêm...
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}