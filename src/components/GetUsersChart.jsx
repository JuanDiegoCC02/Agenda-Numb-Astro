// UsersMonitoringChart.jsx
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getUsers } from '../services/llamadosUsers';

const UsersMonitoringChart = ({ title }) => {
  const [chartState, setChartState] = useState({
    series: [{ name: 'Users Log', data: [] }],
    options: {
      chart: {
        type: 'area',
        height: 350,
        zoom: { enabled: false },
        animations: { enabled: true },
        background: 'rgba(24, 22, 22, 0.84)',
        foreColor: '#faffaeff', 
        
      },
  
      colors: ['#fafc7ade'], 
      dataLabels: { enabled: false },
      stroke: { curve: 'straight' },
       width: 2,

      grid: {
        borderColor: 'rgba(100, 51, 192, 1)',
        row: { colors: ['#020599ff', 'transparent'], opacity: 0.2 },
      },

      fill: {
        opacity: 0.8,
        type: 'pattern',
        pattern: { style: ['verticalLines', 'horizontalLines'], width: 5, height: 6 },
      },

      markers: { size: 5, hover: { size: 9 } },

      title: { text: title || 'Users Log Chart',
        style: { color: '#fcf2c9ff', fontSize: '14px' } },

      tooltip: { intersect: true, shared: false },

      theme: { palette: 'palette1' },

      xaxis: { type: 'datetime', 
        labels: {colors: '#f1e75a', fontSize: '13px'} },

      yaxis: { title: { text: 'User Graph',align: 'center',
      fontSize: '20px',
      fontWeight: 'bold',
       }, },
      

      
    },
  });

  useEffect(() => {
    async function loadUsers() {
      const datos = await getUsers();
      if (!Array.isArray(datos)) return;

      // group users by date
      const countByDate = {};
      datos.forEach((user) => {
        const day = new Date(user.creationDate || user.date); 
        if (isNaN(day)) return;
        const dayStr = day.toISOString().split('T')[0];
        countByDate[dayStr] = (countByDate[dayStr] || 0) + 1;
      });

      // data conversion [{x, y}]
      const orderedDates = Object.keys(countByDate).sort();
      const data = orderedDates.map((day) => ({
        x: new Date(day).getTime(),
        y: countByDate[day],
      }));

      setChartState((prev) => ({
        ...prev,
        series: [{ name: 'Users Log', data }],
      }));
    }

    loadUsers();
  }, []);

  return (
    <div>
      <ReactApexChart
        options={chartState.options}
        series={chartState.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default UsersMonitoringChart;
