// AdminTasksChartSimple.jsx
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getTasks } from '../services/llamadosTasks';
import GetTasksCompletedAdmin from './GetTasksCompletedAdmin' 

const AdminTasksChartSimple = () => {
  const [chartState, setChartState] = useState({
    series: [{ name: 'Tasks Created', data: [] }],
    options: {
      chart: {
        type: 'area',
        height: 350,
        zoom: { enabled: false },
        animations: { enabled: true },
        background: "rgba(0, 0, 0, 1)",
        foreColor: "#98e7ffff", 
        toolbar: { show: true },
      },

      dataLabels: { enabled: false },
      stroke: { curve: 'straight' },
      
      grid: {
        borderColor: "rgba(144, 172, 173, 0.9)",
        row: { colors: [  "#2e3236ff", "transparent"], opacity: 0.2 },
      },
      colors:["hsla(216, 100%, 76%, 0.99)"],

      
      title: {
        text: 'Tasks Creation Chart',
        align: 'center',
        style: { color: "#b5e5ffff", fontSize: "22px" },
        
      },
      subtitle: {
        text: 'User task creation log chart',
        align: 'left',
      },
      labels: [],
      xaxis: { type: 'datetime' },
      yaxis: { opposite: true },
      legend: { horizontalAlign: 'left' },
    },
  });

  useEffect(() => {
    async function loadTasks() {
      const datos = await getTasks();
      if (!Array.isArray(datos)) return;

      
      const countByDate = {};
      datos.forEach((task) => {
        const day = new Date(task.taskDay || task.date); 
        if (isNaN(day)) return;
        const fechaStr = day.toISOString().split('T')[0];
        countByDate[fechaStr] = (countByDate[fechaStr] || 0) + 1;
      });

    
      const sortedByDate = Object.keys(countByDate).sort();

    
      const data = sortedByDate.map((day) => countByDate[day]);
      const labels = sortedByDate.map((day) => new Date(day).toISOString());

      setChartState({
        series: [{ name: 'Tasks Created', data }],
        options: { ...chartState.options, labels },
      });
    }

    loadTasks();
  }, []);

  return (
  <div>
      <div className='containerTitleUsers'>
        <h4 className='titleUsers'>Tasks</h4>
      </div>
    <div>
      <ReactApexChart
        options={chartState.options}
        series={chartState.series}
        type="area"
        height={350}
      />
    </div><br /><br />

    {/*Tasks graph comparation*/}
    <div><br /><br />
      <GetTasksCompletedAdmin/>
    </div>
 </div>
  );
};

export default AdminTasksChartSimple;
