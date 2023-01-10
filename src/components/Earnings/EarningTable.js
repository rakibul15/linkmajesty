import React, {useEffect, useState} from 'react';
import {notification} from "antd";
import EarningService from "../../service/EarningService";
import {Table} from "react-bootstrap";

const EarningTable = () => {
  const [data, setData] = useState([])

  const earningListGet = () => {
    EarningService.earningList()
      .then((response) => {
        console.log("Response", response)
        if (response.data.status === false) {
          notification["error"]({
            message: response.data.message,
          });
          return
        }

        setData(response.data.earning_list)

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
      dataIndex: 'amount',
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

  console.log({data})

  return (
    <div style={{backgroundColor: 'white', padding: '20px 30px'}}>
      <p style={{color: 'skyblue'}}>Earning History</p>
      {/*<Table*/}
      {/*  columns={columns}*/}
      {/*  dataSource={data}*/}
      {/*  pagination={{*/}
      {/*    pageSize: 50,*/}
      {/*  }}*/}
      {/*  scroll={{*/}
      {/*    y: 240,*/}
      {/*  }}*/}
      {/*/>*/}


      <Table responsive>
        <thead>
        <tr>
          <th>ID</th>
          <th>Affiliate URL</th>
          <th>Affiliate Email</th>
          <th>User Email</th>
          <th>Order Id</th>
          <th>Amount</th>
        </tr>
        </thead>
        <tbody>
        {
          data && data.map((Tdata) => (
            <tr>
              <td>{Tdata.ID}</td>
              <td>https://linkmajesty.com/{Tdata.affiliate_url}</td>
              <td>{Tdata.affiliator_email}</td>
              <td>{Tdata.user_email}</td>
              <td>{Tdata.order_id}</td>
              <td>{Tdata.amount}</td>
            </tr>
          ))
        }
        </tbody>
      </Table>
    </div>
  );
};

export default EarningTable;