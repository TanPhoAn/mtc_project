import React from 'react';

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* 1. HERO SECTION */}
            <section className="relative bg-[#1e3a8a] py-20 md:py-32 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <h1 className="text-3xl md:text-6xl font-extrabold uppercase mb-6 tracking-tighter">
                        Về Minh Thanh (MTC)
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-5xl leading-relaxed italic">
                        &quot;Hơn hai thập kỷ khẳng định vị thế trên thị trường và kiến tạo niềm tin qua từng công trình điện.&quot;
                    </p>
                </div>
                {/* Trang trí nền */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-[-20deg] translate-x-1/2"></div>
            </section>

            {/* 2. GIỚI THIỆU CHUNG & NHÂN SỰ */}
            <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-4xl font-bold text-[#292c8f] uppercase">
                            Hành trình từ năm 2000
                        </h2>
                        <div className="text-gray-700 text-lg leading-relaxed text-justify space-y-4">
                            <p>
                                <span className="font-bold text-[#292c8f]">Công ty TNHH Minh Thanh (MTC)</span> được thành lập từ năm 2000, là một trong những doanh nghiệp uy tín hàng đầu trong lĩnh vực thi công và lắp đặt hệ thống điện tại Đồng Tháp và các khu vực lân cận.
                            </p>
                            <p>
                                Với đội ngũ hơn <span className="font-bold text-red-600">70 nhân sự</span> bao gồm các kỹ sư chuyên môn cao, công nhân lành nghề và các nhân viên văn phòng chuyên nghiệp, chúng tôi luôn đảm bảo tiến độ, chất lượng cũng như hiệu quả tuyệt đối cho mọi dự án.
                            </p>
                            <p>
                                Đặc biệt, Minh Thanh tự hào là <span className="font-bold">Đại lý ủy quyền của THIBIDI</span>, mang đến cho khách hàng những sản phẩm chất lượng cao, đáng tin cậy.
                            </p>
                        </div>
                    </div>

                    {/* Cột chứa ảnh đã khống chế lại độ cao */}
                    <div className="relative">
                        <div className="border-8 border-gray-100 rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:ml-auto">
                            {/* - aspect-[4/5]: Khống chế tỉ lệ ảnh (không quá dài như 641x959)
                   - md:max-h-[500px]: Giới hạn chiều cao tuyệt đối để cân với text bên trái
                */}
                            <img
                                src="/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC%20MAT%20DUNG%20-%20se%20thay%20anh%20khac.jpg"
                                alt="Văn phòng Minh Thanh"
                                className="w-full aspect-[4/5] md:max-h-[500px] object-cover object-top"
                            />
                        </div>

                        {/* Box chỉ số nổi bật - Chỉnh lại bottom để không bị trôi quá xa */}
                        <div className="absolute -bottom-6 -left-4 bg-red-600 text-white p-4 rounded-xl lg:-left-8  md:left-10 md:p-3 md:block shadow-xl z-20">
                            <p className="text-4xl font-bold">25+</p>
                            <p className="text-sm uppercase tracking-widest font-semibold">Năm kinh nghiệm</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white mt-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-10 bg-gray-50 rounded-3xl p-8 md:p-16 shadow-inner">

                        {/* PHẦN LOGO MINH HỌA */}
                        <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                            <div className="text-center">
                                <h2 className="text-6xl md:text-8xl font-black text-red-600 tracking-tighter">MTC</h2>
                                <p className="text-[#292c8f] text-xl md:text-2xl font-bold italic mt-2">
                                    Niềm tin của bạn!
                                </p>
                            </div>
                            <div className="h-1 w-24 bg-gray-300 rounded-full mt-4"></div>
                        </div>

                        {/* PHẦN Ý NGHĨA */}
                        <div className="flex-1 space-y-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#292c8f] uppercase leading-tight">
                                Ý nghĩa thương hiệu
                            </h3>

                            <div className="space-y-6">
                                {/* Chữ MTC */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                                        MTC
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-800">Sự Năng Động & Nhiệt Huyết</h4>
                                        <p className="text-gray-600 text-justify">
                                            Viết tắt của <span className="font-semibold italic">Minh Thanh Company</span>. Màu đỏ chủ đạo thể hiện tinh thần làm việc hăng say, khát khao chinh phục những công trình điện khó nhất.
                                        </p>
                                    </div>
                                </div>

                                {/* Slogan */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#292c8f] text-2xl">
                                        ⚓
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-800">Uy Tín & Bền Vững</h4>
                                        <p className="text-gray-600 text-justify">
                                            Slogan <span className="font-semibold italic">&quot;Niềm tin của bạn!&quot; </span> màu xanh dương tượng trưng cho sự uy tín và bền vững mà công ty cam kết mang lại cho khách hàng.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. TẦM NHÌN & SỨ MỆNH (Layout xen kẽ) */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Tầm nhìn */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border-b-8 border-blue-900">
                            <div className="text-4xl mb-4">👁️</div>
                            <h3 className="text-2xl font-bold text-[#292c8f] mb-4 uppercase">Tầm nhìn</h3>
                            <p className="text-gray-600 md:leading-[2.2] text-justify italic sm:leading-relaxed">
                                Hướng đến trở thành doanh nghiệp hàng đầu trong lĩnh vực điện công nghiệp và năng lượng tại Việt Nam.
                                Công ty không ngừng đổi mới công nghệ, nâng cao năng lực quản lý và mở rộng quy mô hoạt động nhằm đáp ứng nhu cầu ngày càng cao của thị trường.
                                Bên cạnh đó, Công ty TNHH Minh Thanh đặt mục tiêu phát triển bền vững, gắn liền với xu hướng năng lượng sạch, thân thiện với môi trường, đặc biệt là điện năng lượng mặt trời – một trong những lĩnh vực chiến lược trong tương lai.
                            </p>
                        </div>
                        {/* Sứ mệnh */}
                        <div className="bg-[#292c8f] p-10 rounded-3xl shadow-sm border-b-8 border-red-600 text-white">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-2xl font-bold mb-4 uppercase">Sứ mệnh</h3>
                            <p className="text-blue-100 leading-relaxed text-justify">
                                Mang đến cho khách hàng những giải pháp điện an toàn, hiệu quả và tối ưu chi phí.
                                Lấy chất lượng công trình và sự hài lòng của khách hàng làm kim chỉ nam cho mọi hoạt động của công ty.
                            </p>
                            <div className="mt-8 space-y-6">
                                <h3 className="text-lg md:text-xl font-bold uppercase text-red-400 flex items-center gap-2">

                                    Cam kết của chúng tôi
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Cung cấp sản phẩm và dịch vụ đạt tiêu chuẩn kỹ thuật cao",
                                        "Đảm bảo tiến độ thi công và an toàn lao động",
                                        "Không ngừng cải tiến để nâng cao chất lượng dịch vụ",
                                        "Xây dựng mối quan hệ lâu dài, bền vững với đối tác"
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 bg-white/50 p-4 rounded-lg border-l-4 border-red-600 shadow-sm hover:shadow-md transition-all"
                                        >
                                            <span className="text-red-600 font-bold text-lg">✓</span>
                                            <p className="text-gray-700 text-sm md:text-base leading-snug font-medium">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. GIÁ TRỊ CỐT LÕI */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <h2 className="text-2xl md:text-4xl font-bold text-[#292c8f] uppercase text-center mb-16">
                    Giá trị cốt lõi
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                    {[
                        {
                            title: "Uy tín",
                            desc: "Nền tảng mọi hoạt động kinh doanh",
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#292c8f]">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
                                </svg>
                            )
                        },
                        { title: "Chất lượng", desc: "Yếu tố quyết định thành công", icon: "🏆" },
                        { title: "Trách nhiệm", desc: "Với khách hàng, đối tác & cộng đồng", icon: "🤝" },
                        { title: "Đổi mới", desc: "Cập nhật công nghệ, giải pháp tiên tiến", icon: "🚀" }
                    ].map((item, idx) => (
                        <div key={idx} className="text-center p-2 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors group">
                            {/* Bọc icon vào div này để căn giữa tuyệt đối */}
                            <div className="h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <div className="text-5xl flex items-center justify-center">
                                    {item.icon}
                                </div>
                            </div>

                            <h4 className="text-xl font-bold text-[#292c8f] mb-2">{item.title}</h4>
                            <p className="text-sm  text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. SLOGAN CUỐI TRANG */}
            <section className="py-20 bg-[#1e3a8a] text-center text-white px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">&quot;Niềm tin của bạn!&quot;</h2>
                    <p className="text-lg text-blue-200 mb-10">
                        Công Ty Minh Thanh luôn nỗ lực không ngừng để trở thành đối tác tin cậy, đồng hành cùng sự phát triển của quý khách hàng.
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all uppercase tracking-widest shadow-lg active:scale-95">
                        Liên hệ với chúng tôi
                    </button>
                </div>
            </section>
        </main>
    );
}