"use client"; // need interact between Menu Mobile & Map dữ liệu

export default function LandingPage() {
    // 1. Dữ liệu này ông có thể để ở file riêng rồi import vào
    const projectsData = [
        { title: "Trạm Biến Áp 2.5 MVA", description: "KCN Sa Đéc, Đồng Tháp.", img: "https://via.placeholder.com/600x400" },
        { title: "Hệ Thống Điện Mặt Trời 1MW", description: "Dự án tại Hồng Ngự.", img: "https://via.placeholder.com/600x400" },
        { title: "Chiếu Sáng Đô Thị", description: "Lắp đặt đèn LED đường phố.", img: "https://via.placeholder.com/600x400" },
        { title: "Đường Dây Trung Thế 35kV", description: "Thi công băng qua sông Tiền.", img: "https://via.placeholder.com/600x400" },
    ];


    return (
        <main>
            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex items-center">
                <div className="absolute inset-0 bg-blue-900/60 z-10"></div>
                <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000" className="absolute inset-0 w-full h-full object-cover" alt="Banner" />
                <div className="relative z-20 px-10 text-white max-w-2xl">
                    <h2 className="text-4xl font-bold mb-4 uppercase">Niềm tin của bạn là trách nhiệm của chúng tôi</h2>
                    <button className="bg-red-600 px-6 py-2 rounded font-bold hover:bg-red-700 transition">Xem chi tiết</button>
                </div>
            </section>

            {/* PROJECTS SECTION - VÒNG LẶP Ở ĐÂY */}
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

            {/* CONTACT SECTION */}
            <section id="contact" className="bg-gray-100 py-20 px-6">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-900 mb-6">Liên hệ</h2>
                            <div className="space-y-4 text-gray-700">
                                <p><strong>Trụ sở chính:</strong> Số 137A/8, Lê Duẩn, Phường Mỹ Phú, TP. Cao Lãnh, Đồng
                                    Tháp</p>
                                <p><strong>Hotline:</strong> 02773.852.553</p>
                                <p><strong>Email:</strong> minhthanhelectric@gmail.com</p>
                            </div>
                            <div className="mt-8 h-64 w-full rounded-xl overflow-hidden shadow-md">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.321684348639!2d105.63248331474511!3d10.457199992538686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI3JzI1LjkiTiAxMDXCsDM4JzA0LjkiRQ!5e0!3m2!1svi!2s!4v1650000000000!5m2!1svi!2s"
                                    width="100%" height="100%"  allowFullScreen={true}
                                    loading="lazy"></iframe>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <form className="space-y-4">
                                <input type="text" placeholder="Họ và tên"
                                       className="w-full p-3 border rounded-lg outline-blue-900"/>
                                <input type="text" placeholder="Số điện thoại"
                                       className="w-full p-3 border rounded-lg outline-blue-900"/>
                                <textarea placeholder="Yêu cầu của bạn" rows={4}
                                          className="w-full p-3 border rounded-lg outline-blue-900"></textarea>
                                <button
                                    className="w-full bg-[#1e3a8a] text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition">Gửi
                                    thông tin
                                </button>
                            </form>
                        </div>
                    </div>

            </section>
        </main>
    );
}