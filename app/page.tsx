"use client";

export default function LandingPage() {
    const projectsData = [
        { title: "CẢI TẠO, NÂNG CẤP TBA 2 x 3P -2 MVA,\n" +
                "220,4KV", description: "CỤM CÔNG NGHIỆP \n" +
                "\n" +
                "THANH BÌNH - ĐỒNG THÁP", img: "/2026_MTC_WEB/2026_MTC_WEB_ANH/CAI-TAO-NANG-CAP-TBA2X3P-2MVA-220,4KV-TAI-CUM-CONG-NGHIEP-THANH-BINH-DONG-THAP.JPG" },
        { title: "NHÁNH RẼ 3P-22KV VƯỢT NHÁNH SÔNG TIỀN TẠO MẠCH VÒNG CẤP ĐIỆN", description: "AN GIANG - ĐỒNG THÁP", img: "public/2026_MTC_WEB/2026_MTC_WEB_ANH/nhanh-re-3p-22kv-vuot-nhanh-song-tien-tao-mach-vong-cap-dien-tu-an-giang-dong-thap.jpg" },
        { title: "THI CÔNG HỆ THỐNG PIN NĂNG LƯỢNG\n" +
                "MẶT TRỜI 1MVA", description: "TỈNH ĐỒNG THÁP", img: "/2026_MTC_WEB/2026_MTC_WEB_ANH/THI CÔNG HỆ THỐNG PIN NĂNG LƯỢNG MẶT TRỜI 1MVA - TỈNH ĐỒNG THÁP.png" },
        { title: "CÔNG TRÌNH CẤP ĐIỆN NHÀ MÁY BIA \n" +
                "\n" +
                "KHU CÔNG NGHIỆP TRẦN QUỐC TOẢN", description: "TỈNH ĐỒNG THÁP", img: "/2026_MTC_WEB/2026_MTC_WEB_ANH/CONG_TRINH_CAP_DIEN_NHA_MAY_BIA.png" },
    ];

    return (
        <main className={"bg-white"}>
            {/* HERO SECTION - Tối ưu lại tỷ lệ 80/20 hoặc 75/25 */}
            <section className="relative h-auto md:h-[40vh] flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-16 py-8 gap-8">

                {/* Banner bên trái: MTC và khung chữ giữa */}
                <div className="flex-1 flex justify-center md:justify-start w-full">
                    <img
                        src="/2026_MTC_WEB/2026_MTC_WEB_ANH/2026%20WEB-BANG%20HIEU.png"
                        alt="Minh Thanh Banner"
                        className="max-h-[25vh] md:max-h-[30vh] w-auto object-contain"
                    />
                </div>

                {/* Icon TTP: Scale to lên gần bằng chiều cao cụm chữ */}
                <div className="flex justify-center items-center w-32 md:w-48 lg:w-56">
                    <img
                        src="/2026_MTC_WEB/2026_MTC_WEB_ANH/LOGO%20TTP.jpg"
                        alt="TTP Certification"
                        className="w-full h-auto object-contain border border-gray-100 shadow-sm rounded-sm"
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
            <section className={"bg-white"}>

                <div className="flex flex-col md:flex-row items-stretch bg-white overflow-hidden px-10 pb-5">
                    <div className="flex-[1] ">
                        <img
                            src="/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC%20MAT%20DUNG%20-%20se%20thay%20anh%20khac.jpg"
                            alt="Văn phòng Minh Thanh"
                            className=" object-cover"
                        />
                    </div>

                    {/* 2. Phần Chữ: Chiếm 40% (flex-[2]) và cao bằng ảnh */}
                    <div className="flex-[1] bg-white md:p-12 flex flex-col text-justify justify-center">
                        <div className="text-3xl font-normal not-italic text-[#292c8f] leading-16">
                            <p>
                                Thành lập từ năm 2000, <span className="font-bold">Công ty TNHH Minh Thanh</span> là nhà thầu uy tín với hơn 25 năm kinh nghiệm chuyên tư vấn, lắp đặt hệ thống điện đến 35kV, chiếu sáng đô thị và năng lượng mặt trời.
                            </p>
                            <br/>
                            <p>
                                Với đội ngũ kỹ sư lành nghề và hệ thống sản xuất bài bản, chúng tôi cam kết mang đến những giải pháp năng lượng an toàn và bền vững. Lấy phương châm <span className="font-bold">&quot;Niềm tin của bạn!&quot;</span> làm kim chỉ nam, <span className="font-bold uppercase">công ty TNHH Minh Thanh</span> không ngừng nỗ lực đồng hành cùng sự thịnh vượng của quý khách hàng.
                            </p>
                        </div>
                    </div>
                </div>

               <div className={"xem-them-btn text-[#292c8f] bg-white text-end pr-12 pb-2 -mt-20 text-3xl font-normal not-italic"}>
                   <a href="#" >Xem thêm    ...</a>
               </div>

            </section>
            {/* PROJECTS SECTION - Giữ nguyên */}
            {/* PROJECTS SECTION */}
            <section id="projects" className="py-20 max-w-7xl mx-auto px-6 bg-white">
                <h2 className="text-4xl font-bold text-center mb-12 text-blue-900 uppercase">Công trình tiêu biểu</h2>

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
                                <h3 className="text-2xl font-bold text-blue-900 mb-3 line-clamp-2 min-h-[4rem] uppercase">
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
            </section>

            {/* CONTACT SECTION - Giữ nguyên */}
            <section id="contact" className="bg-gray-100 py-20 px-6">
                {/* ... code cũ của ông ... */}
            </section>
        </main>
    );
}