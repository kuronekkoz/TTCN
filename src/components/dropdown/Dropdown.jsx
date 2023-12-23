import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-xl text-xl rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Dịch vụ
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="z-10 absolute origin-top-right mt-2  rounded-lg shadow-lg bg-white divide-y divide-gray-100 dark:bg-gray-700 w-96"
        >
          <ul
            className="py-2 text-lg text-gray-700 dark:text-gray-200 space-y-3 text-center cursor-pointer "
            aria-labelledby="dropdownDefaultButton"
          >
            <li className="hover:bg-blue-800">Khám và điều trị</li>
            <li className="hover:bg-blue-800">
              Xét nghiệm - Chẩn đoán hình ảnh
            </li>
            <li className="hover:bg-blue-800">Phẫu thuật</li>
            <li className="hover:bg-blue-800">
              Phòng chống kí sinh trùng - tiêm phòng
            </li>
            <li className="hover:bg-blue-800">Chăm sóc răng miệng</li>
            <li className="hover:bg-blue-800">Thẩm mỹ</li>
            <li className="hover:bg-blue-800">Dịch vụ xuất cảnh chó mèo</li>
            <li className="hover:bg-blue-800">Dịch vụ lưu chuồng</li>
            <li className="hover:bg-blue-800">
              Vận chuyển - Khám bệnh tại nhà
            </li>
            <li className="hover:bg-blue-800">Dịch vụ cấp cứu 24/7</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
