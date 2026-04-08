"use client";

export default function LandingPage() {
    const projectsData = [
        { title: "Trạm Biến Áp 2.5 MVA", description: "KCN Sa Đéc, Đồng Tháp.", img: "https://via.placeholder.com/600x400" },
        { title: "Hệ Thống Điện Mặt Trời 1MW", description: "Dự án tại Hồng Ngự.", img: "https://via.placeholder.com/600x400" },
        { title: "Chiếu Sáng Đô Thị", description: "Lắp đặt đèn LED đường phố.", img: "https://via.placeholder.com/600x400" },
        { title: "Đường Dây Trung Thế 35kV", description: "Thi công băng qua sông Tiền.", img: "https://via.placeholder.com/600x400" },
    ];

    return (
        <main>
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
            <section className={"anh-bia-container"}>
                <div className={"anh-bia bg-white"}>
                    <div className={"p-10"}>
                        <img src="/2026_MTC_WEB/2026_MTC_WEB_ANH/ANH%20BIA.png" alt="anh bia"/>
                    </div>
                </div>
            </section>
            <section className={"about-container bg-white"}>
                <div className={"flex flex-row px-15 pb-5"}>
                    <div className={"about-img"}>
                        <img src="/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC%20MAT%20DUNG%20-%20se%20thay%20anh%20khac.jpg" alt="mtc_front_view"/>
                    </div>
                    <div>
                        <p className={"text-4xl font-normal not-italic text-[#292c8f] "}>Thành lập từ năm 2000, Công ty TNHH Minh Thanh là nhà thầu uy tín với hơn 25 năm kinh nghiệm chuyên tư vấn, lắp đặt hệ thống điện đến 35kV, chiếu sáng đô thị và năng lượng mặt trời.

                            Với đội ngũ kỹ sư lành nghề và hệ thống sản xuất bài bản, chúng tôi cam kết mang đến những giải pháp năng lượng an toàn và bền vững. Lấy phương châm "Niềm tin của bạn!" làm kim chỉ nam, công ty TNHH Minh Thanh không ngừng nỗ lực đồng hành cùng sự thịnh vượng của quý khách hàng.</p>
                    </div>
                </div>
            </section>
            {/* PROJECTS SECTION - Giữ nguyên */}
            <section id="projects" className="py-20 max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-blue-900 uppercase">Công trình tiêu biểu</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group border border-gray-100">
                            <img src={project.img} className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" alt={project.title} />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-blue-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 text-sm">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT SECTION - Giữ nguyên */}
            <section id="contact" className="bg-gray-100 py-20 px-6">
                {/* ... code cũ của ông ... */}
            </section>
        </main>
    );
}