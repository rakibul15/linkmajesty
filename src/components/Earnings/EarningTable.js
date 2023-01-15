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


  return (
    <div style={{backgroundColor: 'white', padding: '20px 30px'}}>
      <p style={{color: 'skyblue'}}>Earning History</p>
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