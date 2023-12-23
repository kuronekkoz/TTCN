import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <div className="mb-6 mt-20">
        <div className="w-full h-full rounded-lg relative">
          <img
            src={
              "https://file.hstatic.net/200000391405/file/benh-vien-thu-y-tphcm-5_31cbf772b6dd47c5aa88302700ca7913.jpg"
            }
            alt=""
            className="w-full h-[700px] object-cover rounded-lg object-bottom"
          />
        </div>
        <h2 className="font-bold text-6xl mb-5 text-teal-500 text-center mt-10 ">
          Bệnh viện thú y Pet Care Center
        </h2>
        <div className="mt-10 text-center text-3xl font-bold">
          Nơi tin cậy để thăm khám, chẩn đoán, điều trị nội trú và ngoại trú cho
          thú cưng
        </div>

        <div className="flex relative w-full rounded-lg h-[450px] mt-20">
          <div className="overlay absolute inset-0 rounded-lg"></div>
          <img
            src={`https://petcare.vn/wp-content/uploads/2016/06/khambenh-1.jpg`}
            alt=""
            className="w-full h-full object-cover rounded-lg object-mid opacity-60"
          />
          <div className="absolute  bottom-1/3 w-1/2 text-black font-bold  text-center">
            <h2 className="pb-6 text-4xl text-green-200">Khám và điều trị</h2>
            <p className="">
              Chẩn đoán đúng bệnh và đưa ra phương pháp điều trị hiệu quả
              <br /> giúp thú cưng mau bình phục
            </p>
          </div>
          <img
            src="https://petcare.vn/wp-content/uploads/2016/06/khamcho.jpg"
            alt=""
            className=" w-1/3 absolute right-0 h-full rounded-[50%] mr-10"
          />
        </div>

        <div className="flex relative w-full h-[450px] rounded-lg mt-10 ">
          {/* <img
            src={`https://petcare.vn/wp-content/uploads/2023/06/DSC1858-Edit-100x50.jpg`}
            alt=""
            className="w-full h-full object-cover rounded-lg object-mid"
          /> */}
          <div className="absolute  bottom-1/3 w-1/2 text-black font-bold  right-0 text-center">
            <h2 className="pb-6 text-4xl text-green-500">
              XÉT NGHIỆM - CHẨN ĐOÁN HÌNH ẢNH
            </h2>
            <p className="text-white">
              Chụp X-Quang, siêu âm, làm các xét nghiệm (vi rút, sinh hóa máu,
              kháng sinh đồ,...)
            </p>
          </div>
          <img
            src="https://petcare.vn/wp-content/uploads/2023/06/untitled-46-1024x534.jpg"
            alt=""
            className=" w-1/3 absolute left-0 h-full rounded-[50%] ml-10"
          />
        </div>

        <div className="flex relative w-full rounded-lg h-[450px] mt-10">
          <div className="overlay absolute inset-0 rounded-lg"></div>
          <img
            src={`https://petcare.vn/wp-content/uploads/2016/06/phauthuat.jpg`}
            alt=""
            className="w-full h-full object-cover rounded-lg object-bottom opacity-60"
          />
          <div className="absolute  bottom-1/3 w-1/2 text-black font-bold text-center">
            <h2 className="pb-6 text-4xl text-green-200">Phẫu thuật</h2>
            <p className="">
              Phẫu thuật điều trị: Nối xương,nội soi,sỏi niệu,...
              <br /> Phẫu thuật theo yêu cầu: triệt sản, cắt đuôi, cắt tai
            </p>
          </div>
          <img
            src="https://petcare.vn/wp-content/uploads/2016/06/khambenh-1.jpg"
            alt=""
            className=" w-1/3 absolute right-0 h-full rounded-[50%] mr-10 "
          />
        </div>

        <div className="justify-center flex flex-row mt-40 space-x-14">
          <div className="grid-flow-row text-right w-[16%] space-y-2">
            <div className="tieude">LƯU CHUỒNG</div>
            <div>
              PetCare áp dụng quy trình lưu giữ đảm bảo cho thú cưng nhà bạn
              sống trong môi trường an toàn và sạch sẽ.
            </div>

            <div className="tieude">CHĂM SÓC RĂNG MIỆNG</div>
            <div>
              PetCare áp dụng quy trình lưu giữ đảm bảo cho thú cưng nhà bạn
              sống trong môi trường an toàn và sạch sẽ.
            </div>

            <div className="tieude">THẨM MỸ</div>
            <div>
              PetCare áp dụng quy trình lưu giữ đảm bảo cho thú cưng nhà bạn
              sống trong môi trường an toàn và sạch sẽ.
            </div>

            <div className="tieude">THỦ TỤC XUẤT CẢNH</div>
            <div>
              PetCare áp dụng quy trình lưu giữ đảm bảo cho thú cưng nhà bạn
              sống trong môi trường an toàn và sạch sẽ.
            </div>
          </div>
          <div className="grid-flow-row w-1/3">
            <img
              src="https://petcare.vn/wp-content/uploads/2023/06/DSC2331-Edit-2.jpg"
              alt=""
            />
            <img
              src="https://petcare.vn/wp-content/uploads/2023/06/untitled-46.jpg"
              alt=""
            />
          </div>
          <div className="grid-flow-row text-left w-[16%] space-y-2 ">
            <div className="tieude">PHÒNG CHỐNG KÍ SINH TRÙNG - TIÊM PHÒNG</div>
            <div>
              PetCare áp dụng quy trình lưu giữ đảm bảo cho thú cưng nhà bạn
              sống trong môi trường an toàn và sạch sẽ.
            </div>

            <div className="tieude">VẬN CHUYỂN KHÁM CHỮA BỆNH TẠI NHÀ</div>
            <div>
              PetCare áp dụng quy trình lưu giữ đảm bảo cho thú cưng nhà bạn
              sống trong môi trường an toàn và sạch sẽ.
            </div>

            <div className="tieude">CẤP CỨU 24/7</div>
            <div>
              PetCare áp dụng quy trình lưu giữ đảm bảo cho thú cưng nhà bạn
              sống trong môi trường an toàn và sạch sẽ.
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
