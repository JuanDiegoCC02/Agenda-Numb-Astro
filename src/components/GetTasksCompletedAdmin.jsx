import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getTasks } from '../services/llamadosTasks';

const GetTasksCompletedAdmin = () => {
  const [state, setState] = useState({
    series: [],
    options: {
      chart: {
        type: 'bar',
        toolbar: { show: false },
        background: 'transparent',
      },

      plotOptions: {
        bar: {
          borderRadius: 8,
          columnWidth: '45%',
        }
      },

      dataLabels: {
        enabled: false
      },
      
      grid: {
        borderColor: '#03020fff',
        row: {
          colors: ['#000000ff', '#242121c7']
        }
      },

      xaxis: {
        labels: {
          rotate: -45,
          style: { colors: '#a4a1c2fa' }
        },
        categories: [
          'Tasks Completed', 'Tasks Pending'],
      },

      yaxis: {
        title: {
          text: 'Tasks Comparison Chart',
          style: { color: '#24eeeeff', fontSize: "19px"}
        },
        labels: { style: { colors: '#ccc' } }
      },
       colors: ['#5eabf8f8', '#ffffffff'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: ['#0c0430ff'],
          inverseColors: true,
          opacityFrom: 0.9,
          opacityTo: 0.9,
          stops: [0, 100]
        },
      }
    },
  });

  useEffect (()=> {
    const loadTasks = async () => {
      try {
        const data = await getTasks();
        const completed = data.filter(task=> task.completed === true).length;
        const pending = data.filter (task=> task.completed !== true).length;
      
        setState(prev=> ({
          ...prev,
          series:[{
            name: 'Number of Tasks',
            data: [completed, pending],
          }]
         
        }))
         console.log(completed)
         console.log(pending)
      } catch (error) {
        console.log("Falied loanding tasks")
      }
    }
    loadTasks();
  }, [])

  return (
    <div className="bg-[#0e0e1a] p-6 rounded-2xl shadow-lg">
   
      
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default GetTasksCompletedAdmin;



