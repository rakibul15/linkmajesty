import React, {useEffect, useState} from 'react';
import {Pagination, Table} from "react-bootstrap";
import {Col, Empty, notification, Row} from "antd";
import AllApiService from "../../service/AllApiService";

const PaymentTable = () => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);

  const earningListGet = () => {
    AllApiService.paymentList(currentPage)
      .then((response) => {
        console.log("Response", response)
        if (response.data.status === false) {
          notification["error"]({
            message: response.data.message,
          });
          return
        }
        setData(response.data.payment_list)
      })
      .catch((error) => {
        notification["error"]({
          message: error,
        });
        console.log("something went wrong", error);
      });
  }
  useEffect(() => {
    (async () => {
      await earningListGet()
    })();
  }, [currentPage])

  const onNext = () => {
    if (data.length > 24) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div style={{backgroundColor: 'white', padding: '20px 30px'}}>
      <p style={{color: 'skyblue'}}>Earning History</p>
      {
        data.length > 0 ? <Table responsive>
          <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Transaction ID</th>
            <th>Transaction Text</th>
            <th>Info</th>
            <th>Amount</th>
            <th>Unpaid Balance</th>
          </tr>
          </thead>
          <tbody>
          {
            data && data.map((Tdata) => (
              <tr>
                <td>{Tdata.ID}</td>
                <td>https://linkmajesty.com/{Tdata.affiliate_url}</td>
                <td>{Tdata.email}</td>
                <td>{Tdata.transaction_id}</td>
                <td>{Tdata.transaction_text}</td>
                <td>{Tdata.info}</td>
                <td>{Tdata.amount}</td>
                <td>{Tdata.unpaid_balance}</td>
              </tr>
            ))
          }
          </tbody>
        </Table> : <Row>
          <Col style={{margin: '30px auto'}}>
            <Empty/>
          </Col>
        </Row>
      }

      <div className="d-flex justify-content-end">
        <Pagination className='text-right'>
          <Pagination.Prev onClick={onPrevious}/>
          <Pagination.Item>{currentPage}</Pagination.Item>
          <Pagination.Next onClick={onNext}/>
        </Pagination>
      </div>
    </div>
  );
};

export default PaymentTable;