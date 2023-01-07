import React, {useEffect, useState} from 'react';
import {notification, Table} from "antd";
import EarningService from "../../service/EarningService";

const EarningTable = () => {
  const [data, setData] = useState('')

  const earningListGet = () => {
    EarningService.earningList()
      .then((response) => {
        console.log({response})
        if (response.data.status === false) {
          notification["error"]({
            message: response.data.message,
          });
          return
        }

        setData(response.data.earningList)

      })
      .catch((error) => {
        notification["error"]({
          message: error,
        });
        console.log("something went wrong", error);
      });
  }
  useEffect(() => {
    earningListGet()
  }, [])


  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',

    },
    {
      title: 'Details',
      dataIndex: 'details',

    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
    },
  ];

  // const data = [
  //   {
  //     date: '10/29/2022',
  //     details: "fsfdgfdgdfgdf",
  //     amount: 200,
  //     balance: 300
  //   },
  //   {
  //     date: '10/29/2022',
  //     details: "fsfdgfdgdfgdf",
  //     amount: 200,
  //     balance: 300
  //   }
  // ];

  return (
    <div style={{backgroundColor: 'white', padding: '20px 30px'}}>
      <p style={{color: 'skyblue'}}>Earning History</p>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 50,
        }}
        scroll={{
          y: 240,
        }}
      />
    </div>
  );
};

export default EarningTable;