import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
const CustomDatePicker = ({ selectedDate, onChange }) => {
  return (
    <div className="relative max-w-lg ">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </div>
      <DateTimePicker
        selected={selectedDate}
        onChange={onChange}
        className="block w-full pl-10 pr-2.5 py-2.5 dark:bg-gray-700 dark:border-gray-600 cursor-pointer "
      />
    </div>
  );
};

export default CustomDatePicker;
