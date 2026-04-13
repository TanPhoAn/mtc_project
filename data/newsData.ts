export interface NewsContent {
    type: 'text' | 'image';
    value: string;
    alt?: string;
}

export interface NewsItem {
    id: number;
    title: string;
    date: string;
    image: string; // Ảnh bìa lớn
    description: string;
    blocks: NewsContent[]; // Đổi từ content sang blocks
}

export const newsData: NewsItem[] = [
    {
        id: 1,
        title: "LỄ THỎA THUẬN HỢP TÁC GIỮA TRƯỜNG CAO ĐẲNG CƠ ĐIỆN NÔNG NGHIỆP VÀ MÔI TRƯỜNG VỚI CÔNG TY TNHH MINH THANH",
        date: "12/03/2026",
        image: "/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC - LE KY KET THUC TAP/4.jpg",
        description: "Ngày 12/3/2026, tại Cơ sở đào tạo nghề Đồng Tháp – Phường Cao Lãnh...",
        blocks: [
            { type: 'text', value: "Ngày 12/3/2026, tại Cơ sở đào tạo nghề Đồng Tháp – Phường Cao Lãnh, trực thuộc Trường Cao đẳng Nghề – Bộ Nông nghiệp và Môi trường, đã long trọng diễn ra Lễ ký kết thỏa thuận hợp tác giữa nhà trường và Công ty TNHH Minh Thanh." },
            { type: 'image', value: "/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC - LE KY KET THUC TAP/1.jpg", alt: "Ảnh ký kết 1" },
            { type: 'text', value: "Sự kiện này đánh dấu bước phát triển quan trọng trong mối quan hệ gắn kết giữa cơ sở đào tạo và doanh nghiệp, nhằm tạo điều kiện cho sinh viên, học viên được tiếp cận môi trường làm việc thực tế thông qua chương trình thực tập sản xuất, qua đó nâng cao tay nghề trong lĩnh vực điện công nghiệp và điện dân dụng." },
            { type: 'image', value: "/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC - LE KY KET THUC TAP/2.jpg", alt: "Ảnh ký kết 2" },
            { type: 'text', value: "Thông qua thỏa thuận hợp tác, Công ty TNHH Minh Thanh không chỉ hỗ trợ tiếp nhận sinh viên thực tập mà còn tham gia tích cực vào quá trình đào tạo, góp phần định hướng kỹ năng nghề nghiệp phù hợp với nhu cầu thực tiễn." },
            {type: "image", value: "/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC - LE KY KET THUC TAP/3.jpg", alt:"Ảnh ký kết 3"},
            {type:"text", value:" Đây là hoạt động thiết thực nhằm nâng cao chất lượng nguồn nhân lực, đáp ứng nhu cầu của địa phương, doanh nghiệp và thị trường lao động tại Đồng Tháp cũng như các tỉnh khu vực Đồng bằng sông Cửu Long."},
            {type:"image", value:"/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC - LE KY KET THUC TAP/5.jpg",alt:"Ảnh ký kết 4"},
            {type:"text", value:"Ban Giám đốc Công ty TNHH Minh Thanh cam kết đồng hành lâu dài, góp phần xây dựng nguồn lao động chất lượng cao, đáp ứng yêu cầu phát triển kinh tế – xã hội trong giai đoạn mới."},
            {type:"image", value:"/2026_MTC_WEB/2026_MTC_WEB_ANH/MTC - LE KY KET THUC TAP/6.jpg", alt:"Ảnh ký kết 5"},
        ]
    }
];