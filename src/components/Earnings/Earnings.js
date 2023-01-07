import React from 'react';
import CommonLayout from "../layout/CommonLayout";
import {Col, Row} from "antd";
import RmCard from "../common/RMCard";
import EarningTable from "./EarningTable";

const Earnings = () => {
  return (
    <CommonLayout>
      <h1 style={{fontWeight: '600', fontSize: '20px'}}>Earnings</h1>
      <Row style={{marginTop: '30px'}} gutter={16}>
        <Col md={8}>
          <RmCard title='This Month Earning' sign={<i className="fa fa-dollar-sign"></i>} count={188880}
                  icon={<i className="fa fa-dollar-sign"></i>}></RmCard>
        </Col>

        <Col md={8}>
          <RmCard title='LastMonth Earning' sign={<i className="fa fa-dollar-sign"></i>} count={200000}
                  icon={<i className="fa fa-dollar-sign"></i>}></RmCard>
        </Col>

        <Col md={8}>
          <RmCard title='Total Earning' sign={<i className="fa fa-dollar-sign"></i>} count={1600}
                  icon={<i className="fa fa-dollar-sign"></i>}></RmCard>
        </Col>

        {/*<Col md={6}>*/}
        {/*  <FormCard></FormCard>*/}
        {/*</Col>*/}
      </Row>
      <div style={{marginTop: '30px'}}>
        <EarningTable></EarningTable>
      </div>
    </CommonLayout>
  );
};

export default Earnings;