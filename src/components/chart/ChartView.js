import React, {useEffect, useState} from 'react';
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import EarningService from "../../service/EarningService";

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
      text: 'Clicks & Signup Chart',
    },
  },
};

function getLast30Days() {
  let output = [];
  let monthName = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
  let d = new Date();
  for (let i = 0; i < 30; i++) {
    output.push(d.getDate() + " " + monthName[d.getMonth()] + " " + d.getFullYear());
    d.setDate(d.getDate() - 1);
  }
  return output
}


const ChartView = ({range, setRange}) => {
  const [signup, setSignup] = useState()
  const [labels, setLabels] = useState(getLast30Days())
  console.log({range})


  let data = {
    labels,
    datasets: [
      {
        label: 'Clicks',
        data: [1, 3, 4, 5, 6, 6, 7, 7],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Signup',
        data: [2, 4, 6, 7, 8, 8, 9, 9, , 3],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


  const clicksAndSignUpTable = async (range) => {
    try {
      const {data} = await EarningService.numberOfFilterClick(range);
      // setSignup(data.count)
    } catch (error) {
      console.log("Something went wrong")
    }
  };
  //API CALL
  useEffect(() => {
    (async () => {
      await clicksAndSignUpTable(range)
    })();
  }, [range]);


  return (
    <div style={{height: '350px'}}>
      <Bar options={options} data={data}/>
    </div>
  );
};

export default ChartView;