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
      },
      dataLabels: { enabled: false },
      stroke: { curve: 'straight' },
      title: {
        text: 'Tasks Analysis',
        align: 'left',
      },
      subtitle: {
        text: 'Tasks Created Over Time',
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

      // Agrupar tareas por fecha
      const conteoPorFecha = {};
      datos.forEach((task) => {
        const fecha = new Date(task.taskDay || task.date); // Ajusta según tu db.json
        if (isNaN(fecha)) return;
        const fechaStr = fecha.toISOString().split('T')[0];
        conteoPorFecha[fechaStr] = (conteoPorFecha[fechaStr] || 0) + 1;
      });

      // Ordenar fechas
      const fechasOrdenadas = Object.keys(conteoPorFecha).sort();

      // Generar arrays para ApexChart
      const data = fechasOrdenadas.map((fecha) => conteoPorFecha[fecha]);
      const labels = fechasOrdenadas.map((fecha) => new Date(fecha).toISOString());

      setChartState({
        series: [{ name: 'Tasks Created', data }],
        options: { ...chartState.options, labels },
      });
    }

    loadTasks();
  }, []);

  return (
  <div>
    <div>
      <ReactApexChart
        options={chartState.options}
        series={chartState.series}
        type="area"
        height={350}
      />
    </div><br /><br />
    <div><br /><br />
      <GetTasksCompletedAdmin/>
    </div>
 </div>
  );
};

export default AdminTasksChartSimple;
