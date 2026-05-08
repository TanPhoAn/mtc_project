export interface NewsContent {
    type: 'text' | 'image';
    value: string;
    value_en?: string; // Thêm nội dung tiếng Anh cho text
    alt?: string;
    alt_en?: string;   // Thêm alt tiếng Anh cho ảnh
}

export interface NewsItem {
    id: number;
    title: string;
    title_en: string;   // Thêm title tiếng Anh
    date: string;
    image: string;
    description: string;
    description_en: string; // Thêm mô tả tiếng Anh
    blocks: NewsContent[];
}

export const newsData: NewsItem[] = [
    {
        id: 1,
        title: "LỄ THỎA THUẬN HỢP TÁC GIỮA TRƯỜNG CAO ĐẲNG CƠ ĐIỆN NÔNG NGHIỆP VÀ MÔI TRƯỜNG VỚI CÔNG TY TNHH MINH THANH",
        title_en: "COOPERATION AGREEMENT CEREMONY BETWEEN THE COLLEGE OF AGRICULTURAL ELECTROMECHANICS AND ENVIRONMENT AND MINH THANH CO., LTD",
        date: "12/03/2026",
        image: "/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC - LE KY KET THUC TAP/4.jpg",
        description: "Ngày 12/3/2026, tại Cơ sở đào tạo nghề Đồng Tháp – Phường Cao Lãnh...",
        description_en: "On March 12, 2026, at the Dong Thap Vocational Training Facility - Cao Lanh Ward...",
        blocks: [
            {
                type: 'text',
                value: "Ngày 12/3/2026, tại Cơ sở đào tạo nghề Đồng Tháp – Phường Cao Lãnh, trực thuộc Trường Cao đẳng Nghề – Bộ Nông nghiệp và Môi trường, đã long trọng diễn ra Lễ ký kết thỏa thuận hợp tác giữa nhà trường và Công ty TNHH Minh Thanh.",
                value_en: "On March 12, 2026, at the Dong Thap Vocational Training Facility - Cao Lanh Ward, under the Vocational College - Ministry of Agriculture and Environment, a ceremony was solemnly held to sign a cooperation agreement between the school and Minh Thanh Co., Ltd."
            },
            {
                type: 'image',
                value: "/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC - LE KY KET THUC TAP/1.jpg",
                alt: "Ảnh ký kết 1",
                alt_en: "Signing ceremony image 1"
            },
            {
                type: 'text',
                value: "Sự kiện này đánh dấu bước phát triển quan trọng trong mối quan hệ gắn kết giữa cơ sở đào tạo và doanh nghiệp, nhằm tạo điều kiện cho sinh viên, học viên được tiếp cận môi trường làm việc thực tế thông qua chương trình thực tập sản xuất, qua đó nâng cao tay nghề trong lĩnh vực điện công nghiệp và điện dân dụng.",
                value_en: "This event marks an important development in the close relationship between the training institution and the enterprise, creating conditions for students to access a real working environment through production internship programs, thereby improving skills in the field of industrial and civil electricity."
            },
            {
                type: 'image',
                value: "/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC - LE KY KET THUC TAP/2.jpg",
                alt: "Ảnh ký kết 2",
                alt_en: "Signing ceremony image 2"
            },
            {
                type: 'text',
                value: "Thông qua thỏa thuận hợp tác, Công ty TNHH Minh Thanh không chỉ hỗ trợ tiếp nhận sinh viên thực tập mà còn tham gia tích cực vào quá trình đào tạo, góp phần định hướng kỹ năng nghề nghiệp phù hợp với nhu cầu thực tiễn.",
                value_en: "Through the cooperation agreement, Minh Thanh Co., Ltd. not only supports receiving interns but also actively participates in the training process, contributing to orienting professional skills in line with practical needs."
            },
            {
                type: "image",
                value: "/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC - LE KY KET THUC TAP/3.jpg",
                alt:"Ảnh ký kết 3",
                alt_en: "Signing ceremony image 3"
            },
            {
                type:"text",
                value:" Đây là hoạt động thiết thực nhằm nâng cao chất lượng nguồn nhân lực, đáp ứng nhu cầu của địa phương, doanh nghiệp và thị trường lao động tại Đồng Tháp cũng như các tỉnh khu vực Đồng bằng sông Cửu Long.",
                value_en: "This is a practical activity to improve the quality of human resources, meeting the needs of local authorities, businesses, and the labor market in Dong Thap as well as other provinces in the Mekong Delta region."
            },
            {
                type:"image",
                value:"/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC - LE KY KET THUC TAP/5.jpg",
                alt:"Ảnh ký kết 4",
                alt_en: "Signing ceremony image 4"
            },
            {
                type:"text",
                value:"Ban Giám đốc Công ty TNHH Minh Thanh cam kết đồng hành lâu dài, góp phần xây dựng nguồn lao động chất lượng cao, đáp ứng yêu cầu phát triển kinh tế – xã hội trong giai đoạn mới.",
                value_en: "The Board of Directors of Minh Thanh Co., Ltd. is committed to long-term companionship, contributing to building a high-quality workforce to meet the requirements of socio-economic development in the new period."
            },
            {
                type:"image",
                value:"/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC - LE KY KET THUC TAP/6.jpg",
                alt:"Ảnh ký kết 5",
                alt_en: "Signing ceremony image 5"
            },
        ]
    }
];