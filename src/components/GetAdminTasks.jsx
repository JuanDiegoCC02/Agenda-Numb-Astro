// ApexChart.jsx
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getTasks } from '../services/llamadosTasks';

const GetAdminTasks = ({ title }) => {
  const [chartData, setChartData] = useState({
    series: [],
    categories: [],
  });

  useEffect(() => {
    async function list() {
      const datos = await getTasks();
        console.log(datos)
      // const de usuarios por fecha 
      const conteoPorFecha = {};

      datos.forEach((task) => {
        
        const fecha = new Date(task.taskDay).toISOString().split('T')[0];
        conteoPorFecha[fecha] = (conteoPorFecha[fecha] || 0) + 1;
      });

      // Orden y estructuracion de las fechas
      const fechasOrdenadas = Object.keys(conteoPorFecha).sort();
      const conteos = fechasOrdenadas.map((fecha) => conteoPorFecha[fecha]);

      setChartData({
        series: [{ name: 'Usuarios registrados', data: conteos }],
        categories: fechasOrdenadas,
      });
    }
    
    list();
  }, []);

const options = { chart: {
    height: 350,
    type: 'line', 
    zoom: { enabled: false },
    toolbar: { show: false }
  },
  colors: ['#fbff00cb'], 
  dataLabels: { enabled: false },
  stroke: {
    curve: 'smooth',
    width: 3
  },

  //Titulo del Grafico
  title: { text: title || 'Register of the Tasks', align: 'center',
    style: {
      fontSize: '16px',
      color: '#e1dcffff',
      
    }
  },
  grid: { borderColor: '#25d1c9ff',
    row: {
      colors: ['#000000ff', 'transparent'],
      opacity: 0.4,
    },
  },

  //Indica las categorias del grafico
  xaxis: { categories: chartData.categories,
    title: { text: 'Day the Task was created', style: { color: '#f1e75aff' } },
    labels: { style: { colors: '#fffd8bff' } }
  },
  yaxis: {
    title: { text: 'Number Of Tasks', style: { color: '#b4b3ffff' } },
    labels: { style: { colors: '#7eecffff' } }
  },
  tooltip: {
    theme: 'light',
    x: { format: 'dd-MM-yyyy' }
  }
};


  return (
    <div className='grafico-usuarios-container'>
      <ReactApexChart options={options} series={chartData.series} type="line" height={450}  />
    </div>
  );
};

export default GetAdminTasks;
