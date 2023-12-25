import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import appointmentApi from "../../api/appoimentApi";
import { useNavigate } from "react-router-dom";

const ChartComponent = () => {
  const [userData, setUserData] = useState({});
  const [dataApm, setDataApm] = useState([]);
  const [result, setResult] = useState([]);
  const [series, setSeries] = useState([]);
  const [selection, setSelection] = useState("one_year");

  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem("loginInfo");

    const fetchData = async (accessToken) => {
      try {
        const res = await appointmentApi.getAllAppointment(accessToken);
        setDataApm(res.data.data);
      } catch (error) {
        // Handle error
        console.error("Error fetching data: ", error);
      }
    };

    if (storedUserData) {
      const accessToken = JSON.parse(storedUserData).accessToken;
      setUserData(JSON.parse(storedUserData));
      fetchData(accessToken);
    } else {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (dataApm.length > 0) {
      const countByDate = new Map();

      dataApm.forEach((item) => {
        const createDate = item.createdAt.split("T")[0];
        if (countByDate.has(createDate)) {
          countByDate.set(createDate, countByDate.get(createDate) + 1);
        } else {
          countByDate.set(createDate, 1);
        }
      });

      setResult(
        Array.from(countByDate).map(([date, value]) => ({
          date: new Date(date).getTime(),
          value,
        }))
      );
    }
  }, [dataApm]);

  useEffect(() => {
    setSeries([{ name: "Series 1", data: [...result] }]);
  }, [result]);

  const updateData = (timeline) => {
    setSelection(timeline);

    // Update options state to implement zoom
    let newMinDate, newMaxDate;

    switch (timeline) {
      case "one_month":
        newMinDate = new Date("30 Nov 2023").getTime();
        newMaxDate = new Date("30 Sep 2023").getTime();
        break;
      case "six_months":
        newMinDate = new Date("1 Jun 2023").getTime();
        newMaxDate = new Date("1 Jan 2024").getTime();
        break;
      case "one_year":
        newMinDate = new Date("1 Sep 2023").getTime();
        newMaxDate = new Date("1 Sep 2024").getTime();
        break;
      case "ytd":
        newMinDate = new Date("01 Nov 2023").getTime();
        newMaxDate = new Date("27 Sep 2023").getTime();
        break;
      case "all":
        newMinDate = new Date("23 Jan 2023").getTime();
        newMaxDate = new Date("27 Feb 2024").getTime();
        break;
      default:
        return;
    }

    setOptions((prevState) => ({
      ...prevState,
      xaxis: {
        ...prevState.xaxis,
        min: newMinDate,
        max: newMaxDate,
      },
    }));
  };

  const [options, setOptions] = useState({
    chart: {
      id: "area-datetime",
      type: "line",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    // Rest of your options

    annotations: {
      yaxis: [
        {
          y: 20,
          borderColor: "#999",
          label: {
            show: true,
            text: "Support",
            style: {
              color: "#fff",
              background: "#00E396",
            },
          },
        },
      ],
      xaxis: [
        {
          x: new Date("14 Sep  2023").getTime(),
          borderColor: "#999",
          yAxisIndex: 0,
          label: {
            show: true,
            text: "Rally",
            style: {
              color: "#fff",
              background: "#775DD0",
            },
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: "hollow",
    },
    xaxis: {
      type: "datetime",
      min: new Date("01 Mar 2023").getTime(),
      max: new Date("01 May 2024").getTime(),
      tickAmount: 6,
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
  });

  console.log("series", series);
  console.log("option:", options);

  return (
    <div id="chart">
      {/* Your toolbar buttons */}
      <div id="chart-timeline">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default ChartComponent;
