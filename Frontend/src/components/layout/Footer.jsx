const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 text-white text-center flex flex-row ">
      <div className="float flex-col w-1/3 ml-2">
        <h2 className="text-left text-2xl text-green-400">
          BỆNH VIỆN THÚ Y Pet Care Center
        </h2>
        <div className="text-left mt-5">
          Bệnh viện Thú y (BVTY), Học viện Nông nghiệp Việt Nam là Bệnh viện Thú
          y lớn nhất hiện nay ở Việt Nam. Đây là BVTY hiện đại và ngang tầm với
          BVTY của các nước trong khu vực. Tổng vốn đầu tư của Nhà Nước là gần
          100 tỷ, với đầy đủ trang thiết bị hiện đại như hệ thống trang thiết bị
          chẩn đoán hình ảnh (X- quang; Siêu âm màu 4D; Dụng cụ phẫu thuật nội
          soi; Phòng mổ, phòng Cấp cứu hiện đại theo tiêu chuẩn quốc tế …). Đặc
          biệt để phục vụ công tác xét nghiệm, BVTY đã có phòng thí nghiệm đạt
          chứng chỉ ISO 17025.
        </div>
      </div>
      <div className="flex flex-col w-1/3  ">
        <h2>THÔNG TIN LIÊN HỆ</h2>
        <ul className="text-left pl-16 space-y-1 text-lg">
          <li>các ca làm việc:</li>
          <li className="ml-3">
            <p>
              Thứ 2 - thứ 7
              <br />
              &emsp;08:00 - 12:00
              <br />
              &emsp;14:00 - 19:00
            </p>
            <p>
              Chủ nhật & ngày lễ
              <br />
              &emsp;08:00-12:00
            </p>
          </li>
          <li>sđt: 0918 271 246 </li>
          <li>email: petcarecentre@gmail.com</li>
          <li>hotline: 0918 271 246</li>
          <li>cấp cứu 24/24: 0918 271 246</li>
          <li>Địa chỉ:</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
