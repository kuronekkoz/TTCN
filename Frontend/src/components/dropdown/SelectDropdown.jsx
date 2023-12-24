import { useEffect, useState } from "react";
import serviceApi from "../../api/serviceApi";

const SelectDropdown = ({ register }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await serviceApi.getAllService(true);
        setServices(res.data.data);
      } catch (error) {}
    };
    fecthData();
  }, []);
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
        <option>Hãy chọn dịch vụ</option>
        {services.map((item, index) => (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;
