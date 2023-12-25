import { useState } from "react";
import BarChart from "./Barchart";
import { UserData } from "./dataChart";

const DashboardAdmin = () => {
 
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div style={{ width: 700 }}>
      <BarChart chartData={userData} />
    </div>
  );
};

export default DashboardAdmin;
