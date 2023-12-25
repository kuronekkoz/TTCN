import { useEffect, useState } from "react";
import appointmentApi from "../../api/appoimentApi";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import ApexCharts from "apexcharts";
import ChartComponent from "./ChartComponent";
import ChartEg from "./Eg";

const DashboardAdmin = () => {
  const [userData, setUserData] = useState({});
  const [dataChart, setDataChart] = useState([]);
  const [dataApm, setDataApm] = useState([]);
  let result = [];

  const navigate = useNavigate();
  useEffect(() => {
    const storedUserData = localStorage.getItem("loginInfo");
    const fecthApi = async (accessToken) => {
      const res = await appointmentApi.getAllAppointment(accessToken);
      setDataApm(res.data.data);
    };
    if (storedUserData) {
      const accessToken = JSON.parse(storedUserData).accessToken;
      setUserData(JSON.parse(storedUserData));
      fecthApi(accessToken);
    } else {
      navigate("/login");
    }
  }, []);

  if (dataApm.length > 0) {
    const countByDate = new Map();

    // Lặp qua mảng dữ liệu gốc để đếm số lượng theo ngày
    dataApm.forEach((item) => {
      const createDate = item.createdAt.split("T")[0]; // Lấy ngày từ createdAt (format: "YYYY-MM-DD")
      if (countByDate.has(createDate)) {
        countByDate.set(createDate, countByDate.get(createDate) + 1);
      } else {
        countByDate.set(createDate, 1);
      }
    });

    // Chuyển đổi Map thành mảng các đối tượng { date: 'YYYY-MM-DD', value: số_lượng }
    result = Array.from(countByDate).map(([date, value]) => ({
      date,
      value,
    }));
  }

  return <ChartComponent></ChartComponent>;
};

export default DashboardAdmin;
