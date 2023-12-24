const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 text-white text-center flex flex-row ">
      <div className="float flex-col w-2/3 ml-2">
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
      <div className="flex flex-col w-1/3 justify-center">
        <h2 className="text-2xl">THÔNG TIN LIÊN HỆ</h2>
        <ul className="text-left pl-16 space-y-1 text-lg">
          <li>
            Các ca làm việc:
            <li className="ml-3">
              <div>
                <span>Thứ 2 - thứ 7</span>
                <br />
                <span className="ml-3">08:00 - 12:00</span>
                <br />
                <span className="ml-3">14:00 - 19:00</span>
              </div>
              <div>
                <span>Chủ nhật & ngày lễ</span>
                <br />
                <span className="ml-3">08:00 - 12:00</span>
              </div>
            </li>
          </li>

          <li>Số điện thoại: 0918 271 246 </li>
          <li>Email: petcarecentre@gmail.com</li>
          <li>Hotline: 0918 271 246</li>
          <li>Cấp cứu 24/24: 0918 271 246</li>
          <li>Địa chỉ:</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
