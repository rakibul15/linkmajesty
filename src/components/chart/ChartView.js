import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'ChartView.js Bar ChartView',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1,3,4,5,6,6,7,7],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [2,4,6,7,8,8,9,9,,3],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};



const ChartView = () => {
  return (
    <div style={{height:'350px'}}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default ChartView;