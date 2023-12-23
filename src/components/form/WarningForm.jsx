const WarningForm = () => {
  return (
    <div className="flex flex-col space-y-10 ">
      <h1 className="text-4xl text-center">LƯU Ý QUAN TRỌNG</h1>
      <p className="p-3 text-xl ">
        {" "}
        Để đảm bảo tốt nhất và thuận tiện cho bệnh viên lẫn khách hàng chúng tôi
        sẽ liên hệ sớm nhất cho bạn để có thể trao đổi và thống nhất lịch khám{" "}
      </p>
      <p className="p-3 text-xl text-red-600">
        {" "}
        Trường hợp khẩn cấp vui lòng liên hệ số điện thoại cấp cứu: 1900 2244
      </p>
      <p className="p-3 text-xl ">
        Cảm ơn quý khách đã tin tưởng và ủng hộ chúng tôi {"<3"}
      </p>
    </div>
  );
};

export default WarningForm;
