// ApexChart.jsx
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getUsers } from '../services/llamadosUsers';


const GetUsersChart = ({ title }) => {
  const [chartData, setChartData] = useState({
    series: [],
    categories: [],
  });

  useEffect(() => {
    async function list() {
      const datos = await getUsers();
        console.log(datos)
      // const de usuarios por fecha 
      const conteoPorFecha = {};

      datos.forEach((user) => {
        
        const fecha = new Date(user.creationDate).toISOString().split('T')[0];
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
  colors: ['#eeff00f3'], 
  dataLabels: { enabled: false },
  stroke: {
    curve: 'smooth',
    width: 3
  },

  //Titulo del Grafico
  title: { text: title || 'Users Log', align: 'center',
    style: {
      fontSize: '20px',
      color: '#ffe56fff',
      
    }
  },
  grid: { borderColor: '#e1ff35ff',
    row: {
      colors: ['#b1a0078c', 'transparent'],
      opacity: 0.4,
    },
  },

  //Indica las categorias del grafico
  xaxis: { categories: chartData.categories,
    title: { text: 'Day the User was created', style: { color: '#f1e75aff' } },
    labels: { style: { colors: '#fffd8bff' } }
  },
  yaxis: {
    title: { text: 'Number Of Users', style: { color: '#e6e343ff', fontSize: "16px" } },
    labels: { style: { colors: '#ffffffff' } }
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

export default GetUsersChart;