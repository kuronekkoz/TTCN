import ProfileCard from "../components/items/ProfileCard";
import items from "../components/data/employee.json";
const IntroducePage = () => {
  return (
    <div className="mb-32">
      <div className="mx-20">
        <div className="text-5xl font-semibold">Lịch sử phát triển</div>
        <div className="w-2/3 mt-10">
          Cho đến trước và trong năm 1996 cả nước chỉ tồn tại duy nhất hình thức
          dịch vụ thú y cung cấp bởi các Trạm và Chi Cục Thú Y thuộc các tỉnh
          thành, quận huyện thuộc nhà nước quản lý. Phòng mạch thú y tư nhân
          nhận giấy chứng nhận hành nghề số 001 tại 146 Xóm Đất, Quận 11 là tiền
          thân của Bệnh Viện Thú Y PetCare hiện giờ.
          <br /> <br />
          Tháng 6/2005, ThS. BS. Huỳnh Thị Thanh Ngọc thành lập công ty TNHH MTV
          Dịch vụ Thú Y An Việt, chính thức xây dựng nên Bệnh viện Thú Y
          PetCare. Đến nay, PetCare có 5 chi nhánh trong nội thành TP.HCM và TP.
          Bà Rịa – Vũng Tàu với tổng cộng 30 nhân viên, trong đó có 18 nhân viên
          phụ trách chuyên môn và 12 nhân viên văn phòng.
          <br /> <br />
          Tại PetCare, đội ngũ bác sĩ của chúng tôi được tham gia các khóa đào
          tạo của Chi Hội Thú Y Thú Nhỏ Thế Giới để nâng cao năng lực và làm
          việc tại bệnh viện với cơ sở vật chất hiện đại nhằm duy trì tiêu chuẩn
          cao trong công tác chăm sóc sức khỏe vật nuôi.
        </div>
        <div>
          <div className="text-5xl font-semibold mt-32">Đội ngũ nhân viên</div>
          <div className="w-2/3 mt-10">
            <p>
              Gắn liền với quá trình phát triển của PetCare là đội ngũ nhân viên
              yêu nghề và không ngừng học hỏi với mong muốn đạt được những bước
              tiến xa hơn trong lĩnh vực thú y. Tại PetCare, đội ngũ chuyên môn
              của chúng tôi được tham gia các khóa đào tạo của Chi Hội Thú Y Thú
              Nhỏ Thế Giới để nâng cao năng lực và làm việc tại bệnh viện với cơ
              sở vật chất hiện đại nhằm duy trì tiêu chuẩn cao trong công tác
              chăm sóc sức khỏe vật nuôi.
            </p>

            <p className="italic mt-12">
              &quot;Đến với Petcare từ những ngày còn là sinh viên, chưa xác
              định rõ con đường sẽ đi. Khi vào thực tập, được các anh chị bác sĩ
              tận tình chỉ dẫn, mình đã quyết định trở thành một bác sĩ thực
              hành thú nhỏ và Petcare chính là môi trường tốt nhất để mình có
              thể gắn bó. Đến hiện tại, mình vẫn nghĩ đó là quyết định đúng đắn
              và Petcare vẫn luôn là nơi gặp gỡ của những tình yêu thương to lớn
              dành cho các bạn thú cưng bé bỏng.&quot;
            </p>
            <br />
            <p>
              {" "}
              <b>BSTY Mai Ngọc Hướng Dương</b> - Làm việc tại Bệnh viện Petcare
              từ năm 2012.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 container grid grid-cols-2 space-x-5 space-y-10">
        {items.map((item, index) => (
          <ProfileCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default IntroducePage;
