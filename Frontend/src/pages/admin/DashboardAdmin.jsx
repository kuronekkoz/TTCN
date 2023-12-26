import { BarChart } from "@mui/x-charts/BarChart";
import React, { useEffect, useState } from "react";
import appointmentApi from "../../api/appoimentApi";
import { useNavigate } from "react-router-dom";
const DashboardAdmin = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const compareDates = (a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateA - dateB;
  };
  useEffect(() => {
    const storedUserData = localStorage.getItem("loginInfo");
    const fetchData = async (accessToken) => {
      try {
        const res = await appointmentApi.getAllAppointment(accessToken);
        setData(res.data.data.sort(compareDates));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    if (storedUserData) {
      const accessToken = JSON.parse(storedUserData).accessToken;
      fetchData(accessToken);
    } else {
      navigate("/login");
    }
  }, []);
  const dates = [];
  const counts = [];
  const currentDate = new Date().toLocaleDateString();
  // Tạo một đối tượng Map để thống kê số lần xuất hiện của mỗi ngày
  const dateCountMap = new Map();
  if (data.length > 0) {
    data.forEach((item) => {
      const createdAt = new Date(item.createdAt).toLocaleDateString(); // Chuyển đổi ngày về định dạng ngày/tháng/năm
      const count = dateCountMap.get(createdAt) || 0;
      dateCountMap.set(createdAt, count + 1);
    });

    // Lặp qua đối tượng Map để đổ dữ liệu vào mảng dates và counts
    dateCountMap.forEach((count, date) => {
      dates.push(date);
      counts.push(count);
    });
  }
  console.log(Map);
  return (
    <>
      {dates.length > 0 && counts.length > 0 ? (
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: [currentDate],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [dateCountMap.get(currentDate)],
            },
          ]}
          width={700}
          height={300}
        />
      ) : (
        <p>Chưa có dữ liệu</p>
      )}
      {dates.length > 0 && counts.length > 0 ? (
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: dates,
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: counts,
            },
          ]}
          width={700}
          height={300}
        />
      ) : (
        <p>Chưa có dữ liệu</p>
      )}
    </>
  );
};

export default DashboardAdmin;
