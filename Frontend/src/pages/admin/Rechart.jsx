import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { date: "2023-01-01", value: 10 },
  { date: "2023-01-02", value: 15 },
  // Add more data with date and value pairs
];

const ChartComponent = () => {
  return (
    <LineChart width={800} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="date"
        type="number"
        scale="time"
        domain={["auto", "auto"]}
        tick={{ fontSize: 12 }}
      />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default ChartComponent;
