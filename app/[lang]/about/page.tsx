import React from 'react';
import { getDictionary } from '../../dictionaries';
import Link from 'next/link';

export default async function AboutPage({ params }: { params: Promise<{ lang: 'vi' | 'en' }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main className="bg-white min-h-screen">
            {/* 1. HERO SECTION */}
            <section className="relative bg-[#1e3a8a] py-20 md:py-32 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <h1 className="text-3xl md:text-6xl font-extrabold uppercase mb-6 tracking-tighter">
                        {lang === 'vi' ? 'Về Minh Thanh (MTC)' : 'About Minh Thanh (MTC)'}
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-5xl leading-relaxed italic">
                        {lang === 'vi' 
                            ? '"Hơn hai thập kỷ khẳng định vị thế trên thị trường và kiến tạo niềm tin qua từng công trình điện."' 
                            : '"Over two decades of asserting market position and building trust through every electrical project."'}
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-[-20deg] translate-x-1/2"></div>
            </section>

            {/* 2. GIỚI THIỆU CHUNG & NHÂN SỰ */}
            <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-4xl font-bold text-[#292c8f] uppercase">
                            {lang === 'vi' ? 'Hành trình từ năm 2000' : 'Journey since 2000'}
                        </h2>
                        <div className="text-gray-700 text-lg leading-relaxed text-justify space-y-4">
                            <p>
                                <span className="font-bold text-[#292c8f]">{dict.home.company_name}</span> {lang === 'vi' 
                                    ? 'được thành lập từ năm 2000, là một trong những doanh nghiệp uy tín hàng đầu trong lĩnh vực thi công và lắp đặt hệ thống điện tại Đồng Tháp và các khu vực lân cận.' 
                                    : 'was established in 2000, standing as one of the leading prestigious enterprises in the field of construction and installation of electrical systems in Dong Thap and surrounding areas.'}
                            </p>
                            <p>
                                {lang === 'vi' 
                                    ? 'Với đội ngũ hơn 70 nhân sự bao gồm các kỹ sư chuyên môn cao, công nhân lành nghề và các nhân viên văn phòng chuyên nghiệp, chúng tôi luôn đảm bảo tiến độ, chất lượng cũng như hiệu quả tuyệt đối cho mọi dự án.' 
                                    : 'With a team of over 70 personnel including highly specialized engineers, skilled workers, and professional office staff, we always ensure progress, quality, and absolute efficiency for every project.'}
                            </p>
                            <p>
                                {lang === 'vi' 
                                    ? 'Đặc biệt, Minh Thanh tự hào là Đại lý ủy quyền của THIBIDI, mang đến cho khách hàng những sản phẩm chất lượng cao, đáng tin cậy.' 
                                    : 'Notably, Minh Thanh is proud to be an Authorized Agent of THIBIDI, providing customers with high-quality and reliable products.'}
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="border-8 border-gray-100 rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:ml-auto">
                            <img
                                src="/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC%20MAT%20DUNG%20-%20se%20thay%20anh%20khac.jpg"
                                alt="Minh Thanh Office"
                                className="w-full aspect-[4/5] md:max-h-[500px] object-cover object-top"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-4 bg-red-600 text-white p-4 rounded-xl lg:-left-8  md:left-10 md:p-3 md:block shadow-xl z-20">
                            <p className="text-4xl font-bold">25+</p>
                            <p className="text-sm uppercase tracking-widest font-semibold">{lang === 'vi' ? 'Năm kinh nghiệm' : 'Years of Experience'}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Meaning Section */}
            <section className="py-16 bg-white mt-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-10 bg-gray-50 rounded-3xl p-8 md:p-16 shadow-inner">
                        <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                            <div className="text-center">
                                <img src="/2026_MTC_WEB/2026_MTC_WEB_ANH/2024_MTC_LOGO_TIENG_VIET.jpg" alt="MTC Logo"/>
                            </div>
                        </div>
                        <div className="flex-1 space-y-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#292c8f] uppercase leading-tight">
                                {lang === 'vi' ? 'Ý nghĩa thương hiệu' : 'Brand Meaning'}
                            </h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                                        MTC
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-800">{lang === 'vi' ? 'Sự Năng Động & Nhiệt Huyết' : 'Dynamism & Enthusiasm'}</h4>
                                        <p className="text-gray-600 text-justify">
                                            {lang === 'vi' 
                                                ? 'Viết tắt của Minh Thanh Company. Màu đỏ chủ đạo thể hiện tinh thần làm việc hăng say, khát khao chinh phục những công trình điện khó nhất.' 
                                                : 'Stands for Minh Thanh Company. The dominant red color represents a passionate work spirit and the desire to conquer the most challenging electrical projects.'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#292c8f] text-2xl">
                                        ⚓
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-800">{lang === 'vi' ? 'Uy Tín & Bền Vững' : 'Prestige & Sustainability'}</h4>
                                        <p className="text-gray-600 text-justify">
                                            {lang === 'vi' 
                                                ? 'Slogan "Niềm tin của bạn!" màu xanh dương tượng trưng cho sự uy tín và bền vững mà công ty cam kết mang lại cho khách hàng.' 
                                                : 'The slogan "Your Trust!" in blue symbolizes the prestige and sustainability that the company commits to providing to customers.'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TẦM NHÌN & SỨ MỆNH */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-3xl shadow-sm border-b-8 border-blue-900">
                            <div className="text-4xl mb-4">👁️</div>
                            <h3 className="text-2xl font-bold text-[#292c8f] mb-4 uppercase">{lang === 'vi' ? 'Tầm nhìn' : 'Vision'}</h3>
                            <p className="text-gray-600 md:leading-[2.2] text-justify italic sm:leading-relaxed">
                                {lang === 'vi' 
                                    ? 'Hướng đến trở thành doanh nghiệp hàng đầu trong lĩnh vực điện công nghiệp và năng lượng tại Việt Nam. Công ty không ngừng đổi mới công nghệ, nâng cao năng lực quản lý và mở rộng quy mô hoạt động nhằm đáp ứng nhu cầu ngày càng cao của thị trường.' 
                                    : 'Aiming to become a leading enterprise in the field of industrial electricity and energy in Vietnam. The company constantly innovates technology, improves management capacity, and expands operations to meet the increasing demands of the market.'}
                            </p>
                        </div>
                        <div className="bg-[#292c8f] p-10 rounded-3xl shadow-sm border-b-8 border-red-600 text-white">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-2xl font-bold mb-4 uppercase">{lang === 'vi' ? 'Sứ mệnh' : 'Mission'}</h3>
                            <p className="text-blue-100 leading-relaxed text-justify">
                                {lang === 'vi' 
                                    ? 'Mang đến cho khách hàng những giải pháp điện an toàn, hiệu quả và tối ưu chi phí. Lấy chất lượng công trình và sự hài lòng của khách hàng làm kim chỉ nam cho mọi hoạt động của công ty.' 
                                    : 'Bringing customers safe, effective, and cost-optimized electrical solutions. Taking project quality and customer satisfaction as the compass for all company activities.'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. GIÁ TRỊ CỐT LÕI */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <h2 className="text-2xl md:text-4xl font-bold text-[#292c8f] uppercase text-center mb-16">
                    {lang === 'vi' ? 'Giá trị cốt lõi' : 'Core Values'}
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                    {[
                        {
                            title: lang === 'vi' ? "Uy tín" : "Prestige",
                            desc: lang === 'vi' ? "Nền tảng mọi hoạt động kinh doanh" : "The foundation of all business activities",
                            icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#292c8f]">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
                                </svg>
                            )
                        },
                        { title: lang === 'vi' ? "Chất lượng" : "Quality", desc: lang === 'vi' ? "Yếu tố quyết định thành công" : "The decisive factor for success", icon: "🏆" },
                        { title: lang === 'vi' ? "Trách nhiệm" : "Responsibility", desc: lang === 'vi' ? "Với khách hàng, đối tác & cộng đồng" : "To customers, partners & community", icon: "🤝" },
                        { title: lang === 'vi' ? "Đổi mới" : "Innovation", desc: lang === 'vi' ? "Cập nhật công nghệ, giải pháp tiên tiến" : "Updating technology, advanced solutions", icon: "🚀" }
                    ].map((item, idx) => (
                        <div key={idx} className="text-center p-2 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors group">
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">{dict.home.slogan.replace(/<[^>]*>/g, '')}</h2>
                    <p className="text-lg text-blue-200 mb-10">
                        {lang === 'vi' 
                            ? 'Công Ty Minh Thanh luôn nỗ lực không ngừng để trở thành đối tác tin cậy, đồng hành cùng sự phát triển của quý khách hàng.' 
                            : 'Minh Thanh Company constantly strives to become a reliable partner, accompanying the development of our customers.'}
                    </p>
                    <Link href={`/#contact`} className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all uppercase tracking-widest shadow-lg active:scale-95">
                        {dict.home.contact_title_us}
                    </Link>
                </div>
            </section>
        </main>
    );
}