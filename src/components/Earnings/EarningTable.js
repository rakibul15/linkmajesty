import React, {useEffect, useState} from 'react';
import {Col, Empty, notification, Row} from "antd";
import EarningService from "../../service/EarningService";
import {Pagination, Table} from "react-bootstrap";

const EarningTable = () => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);


  const earningListGet = () => {
    EarningService.earningList(currentPage)
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
  }, [currentPage])

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

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

export default EarningTable;