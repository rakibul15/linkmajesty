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
      offsetX: 50
    },
    title: {
      display: true,
      text: 'Clicks & Signup Chart',
    },
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
            steps: 10,
            stepValue: 5,
            max: 100
          }
        }
      ]
    }
  },
};
const monthName = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

function getLast30Days() {
  let output = [];
  let d = new Date();
  for (let i = 0; i < 30; i++) {
    output.push(d.getDate() + " " + monthName[d.getMonth()]);
    d.setDate(d.getDate() - 1);
  }
  return output
}


function getLast12MonthsName() {
  let output = [];
  let d = new Date();
  d.setDate(1);
  for (let i = 0; i < 12; i++) {
    output.push(d.getFullYear() + ' ' + monthName[d.getMonth()]);
    d.setMonth(d.getMonth() - 1);
  }
  return output;
}

function getLast6MonthsName() {
  let output = [];
  // let monthName = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
  let d = new Date();
  d.setDate(1);
  for (let i = 0; i < 6; i++) {
    output.push(d.getFullYear() + ' ' + monthName[d.getMonth()]);
    d.setMonth(d.getMonth() - 1);
  }
  return output;
}


const ChartView = ({range, setRange}) => {
  const [graphData, setGraphData] = useState([])
  const [graphDataSignup, setGraphDataSignup] = useState([])
  let labels = []
  let datasetVal = []
  let datasetValSignup = []

  if (range === 'last_month') {
    labels = getLast30Days()
    datasetVal = Array(30).fill(0)
    //For Clicks
    Object.entries(graphData).forEach(([key, value]) => {
      let month = key.split(" ")[0].trim()
      month = monthName[month - 1]
      let day = key.split(" ")[1].trim()
      let finalDate = day + " " + month
      let index = labels.indexOf(finalDate)
      datasetVal[index] = value
    });
    //For Signup
    Object.entries(graphDataSignup).forEach(([key, value]) => {
      let month = key.split(" ")[0].trim()
      month = monthName[month - 1]
      let day = key.split(" ")[1].trim()
      let finalDate = day + " " + month
      let index = labels.indexOf(finalDate)
      datasetValSignup[index] = value
    });


  }
  if (range === 'last_6_month') {
    labels = getLast6MonthsName()
    datasetVal = Array(6).fill(0)
    //For Clicks
    Object.entries(graphData).forEach(([key, value]) => {
      let year = key.split(" ")[0].trim()
      let month = key.split(" ")[1].trim()
      month = monthName[month - 1]
      let finalDate = year + " " + month
      let index = labels.indexOf(finalDate)
      datasetVal[index] = value
    });
    //  For Signup
    Object.entries(graphDataSignup).forEach(([key, value]) => {
      let year = key.split(" ")[0].trim()
      let month = key.split(" ")[1].trim()
      month = monthName[month - 1]
      let finalDate = year + " " + month
      let index = labels.indexOf(finalDate)
      datasetValSignup[index] = value
    });
  }
  if (range === 'last_year') {
    labels = getLast12MonthsName()
    datasetVal = Array(12).fill(0)
    //For Clicks
    Object.entries(graphData).forEach(([key, value]) => {
      let year = key.split(" ")[0].trim()
      let month = key.split(" ")[1].trim()
      month = monthName[month - 1]
      let finalDate = year + " " + month
      let index = labels.indexOf(finalDate)
      datasetVal[index] = value
    });
    //  For Signup
    Object.entries(graphDataSignup).forEach(([key, value]) => {
      let year = key.split(" ")[0].trim()
      let month = key.split(" ")[1].trim()
      month = monthName[month - 1]
      let finalDate = year + " " + month
      let index = labels.indexOf(finalDate)
      datasetValSignup[index] = value
    });
  }


  let data = {
    labels,
    datasets: [
      {
        label: 'Clicks',
        data: datasetVal,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Signup',
        data: datasetValSignup,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


  const clicksAndSignUpTable = async (range) => {
    try {
      const {data} = await EarningService.numberOfFilterClick(range);
      setGraphData(data.filtered_date)
    } catch (error) {
      console.log("Something went wrong")
    }
  };
  const numberOfFilterData = async (range) => {
    try {
      const {data} = await EarningService.numberOfFilterSignup(range);
      setGraphDataSignup(data.filtered_date)
    } catch (error) {
      console.log("Something went wrong")
    }
  };


  //API CALL
  useEffect(() => {
    (async () => {
      await clicksAndSignUpTable(range)
      await numberOfFilterData(range)
    })();
  }, [range]);


  return (
    <div style={{minHeight: '350px'}}>
      <Bar options={options} data={data}/>
    </div>
  );
};

export default ChartView;