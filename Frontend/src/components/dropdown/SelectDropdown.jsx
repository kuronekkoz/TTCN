const SelectDropdown = ({ register }) => {
  return (
    <div>
      <label
        htmlFor="dichVu"
        className="block mb-3  text-gray-900 dark:text-white"
      >
        Dịch vụ:
      </label>
      <select
        id="dichVu"
        className="bg-gray-50 border border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 space-y-5 boder cursor-pointer "
        {...register}
      >
        <option selected>Chọn dịch vụ</option>
        <option value="kham">Khám và điều trị</option>
        <option value="xetNghiem"> Xét nghiệm - Chẩn đoán hình ảnh</option>
        <option value="phauThuat">Phẫu thuật</option>
        <option value="tiemPhong">
          Phòng chống kí sinh trùng - tiêm phòng
        </option>
        <option value="rangmieng">Chăm sóc răng miệng</option>
        <option value="thamMy">Thẩm mỹ</option>
        <option value="xuatCanh">Dịch vụ xuất cảnh chó mèo</option>
        <option value="luuChuong">Dịch vụ lưu chuồng</option>
        <option value="vanChuyen">Vận chuyển - Khám bệnh tại nhà</option>

        <option value="capCuu">Dịch vụ cấp cứu 24/7</option>
      </select>
    </div>
  );
};

export default SelectDropdown;
