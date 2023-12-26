import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ChartEg = () => {
  const [series, setSeries] = useState([
    { name: "Series 1", data: [30, 40, 45, 50] },
  ]);

  const [options, setOptions] = useState({
    chart: {
      id: "area-datetime",
      type: "line",
      height: 350,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr"],
    },
    // Other chart configuration options...
  });
  console.log("series", series);
  console.log("options", options);
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default ChartEg;
