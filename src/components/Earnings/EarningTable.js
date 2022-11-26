import React from 'react';
import {Table} from "antd";

const EarningTable = () => {
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
  const data = [
    {
      date: '10/29/2022',
      details: "fsfdgfdgdfgdf",
      amount: 200,
      balance: 300
    },
    {
      date: '10/29/2022',
      details: "fsfdgfdgdfgdf",
      amount: 200,
      balance: 300
    }
  ];

  return (
    <div style={{backgroundColor: 'white', padding: '20px 30px'}}>
      <p style={{color: 'skyblue'}}>Payment History</p>
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