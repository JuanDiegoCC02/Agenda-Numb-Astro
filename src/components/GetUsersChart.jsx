
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getUsers } from "../services/llamadosUsers";

const GetUsersChart = ({ title }) => {
  const [chartState, setChartState] = useState({
    series: [{ name: "Users Log", data: [] }],
    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: { enabled: false },
        animations: { enabled: true },
        background: "rgba(7, 7, 7, 0.84)",
        foreColor: "#faffaeff",
        toolbar: { show: true },
      },

      colors: ["#fafc7ade"],
      dataLabels: { enabled: false },
      stroke: { curve: "straight" },
      markers: { size: 6, hover: { size: 10 } },

      grid: {
        borderColor: "rgba(19, 121, 180, 0.76)",
        row: { colors: ["#02022bff", "transparent"], opacity: 0.2 },
      },

      fill: {
        opacity: 0.8,
        type: "pattern",
        pattern: {
          style: ["verticalLines", "horizontalLines"],
          width: 5,
          height: 6,
        },
      },

      title: {
        text: title || "Users Log Chart",
        style: { color: "#fcf2c9ff", fontSize: "14px" },
      },

      tooltip: { intersect: true, shared: false, theme: "dark" },

      xaxis: {
        type: "datetime",
        labels: { colors: "#f1e75a", fontSize: "13px" },
      },

      yaxis: {
        title: {
          text: "Number of user record",
          align: "center",
          fontSize: "20px",
          fontWeight: "bold",
        },
      },
    },
  });

  const [usersByDate, setUsersByDate] = useState({});
  const [selectedDateUsers, setSelectedDateUsers] = useState([]);



  useEffect(() => {
    async function loadUsers() {
      const datos = await getUsers();
      if (!Array.isArray(datos)) return;

      const countByDate = {};
      const usersMap = {};

      datos.forEach((user) => {
        const day = new Date(user.creationDate || user.date);
        if (isNaN(day)) return;
        const dayStr = day.toISOString().split("T")[0];

        countByDate[dayStr] = (countByDate[dayStr] || 0) + 1;

        if (!usersMap[dayStr]) usersMap[dayStr] = [];
        usersMap[dayStr].push(user.userName || user.firstName || "error");
      });

      const orderedDates = Object.keys(countByDate).sort();
      const data = orderedDates.map((day) => ({
        x: new Date(day).getTime(),
        y: countByDate[day],
      }));
      
      setUsersByDate(usersMap);
      setChartState((prev) => ({
        ...prev,
        series: [{ name: "Users Log", data }],

      }));
    }

    loadUsers();
  }, []);
    const showUsersForDate = (dateStr) => {
    const users = usersByDate[dateStr] || [];
    console.log("👥 User registrations", users);
    setSelectedDateUsers(users);
  };

  
  const handleDataPointClick = (event, chartContext, config) => {
    const selectedPoint =
      config.w.config.series[0].data[config.dataPointIndex];
    if (!selectedPoint) return;
    const clickedDate = new Date(selectedPoint.x).toISOString().split("T")[0];
    showUsersForDate(clickedDate);
  };

  
  const optionsWithEvent = {
    ...chartState.options,
    chart: {
      ...chartState.options.chart,
      events: {
        dataPointSelection: handleDataPointClick,
      },
    },
  };

  return (
    <div style={{ position: "relative" }}>
      <ReactApexChart
        options={optionsWithEvent}
        series={chartState.series}
        type="area"
        height={350}
      />

      {/* card user by days */}
      {selectedDateUsers.length > 0 && (
        <div
          style={{
            position: "absolute",
            top:77,
            background: "rgba(10, 10, 25, 0.9)",
            border: "1px solid #e4f1fcff",
            padding: "10px 15px",
            borderRadius: "12px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
            maxHeight: "200px",
            overflowY: "auto",
            color: "#fff",
            width: "220px",
            zIndex: 20,
            marginLeft: "41%"
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h4 style={{ color: "#fcf2c9", fontSize: "14px" }}>
              👥 Users registered:
            </h4>
            <button
              onClick={() => setSelectedDateUsers([])}
              style={{
                background: "transparent",
                border: "none",
                color: "#ff7171",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </div>
          <ul style={{ listStyle: "none", paddingLeft: "10px" }}>
            {selectedDateUsers.map((name, i) => (
              <li key={i} style={{ color: "#baf0ff", fontSize: "13px" }}>
                • {name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        .apexcharts-toolbar svg {
          fill: #037cc2ff !important;
        }
        .apexcharts-menu {
          background-color: rgba(0, 0, 0, 0.9) !important;
        }
        .apexcharts-menu-item {
          color: #ecee72ff !important;
        }
      `}</style>
    </div>
  );
};

export default GetUsersChart;
