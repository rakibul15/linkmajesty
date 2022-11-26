import React from 'react';
import CommonLayout from "../layout/CommonLayout";
import {Col, Row} from "antd";
import RmCard from "../common/RMCard";
import FormCard from "../common/FormCard";
import EarningTable from "./EarningTable";

const Earnings = () => {
  return (
    <CommonLayout>
      <h1 style={{fontWeight: '600', fontSize: '20px'}}>Earnings</h1>
      <Row style={{marginTop: '30px'}} gutter={16}>
        <Col md={6}>
          <RmCard title='Payment In Progress' sign={<i className="fa fa-dollar-sign"></i>} count={188880}
                  icon={<i className="fa fa-dollar-sign"></i>}></RmCard>
        </Col>

        <Col md={6}>
          <RmCard title='Total Earnings' sign={<i className="fa fa-dollar-sign"></i>} count={200000}
                  icon={<i className="fa fa-dollar-sign"></i>}></RmCard>
        </Col>

        <Col md={6}>
          <RmCard title='Earning(This Month)' sign={<i className="fa fa-dollar-sign"></i>} count={1600}
                  icon={<i className="fa fa-dollar-sign"></i>}></RmCard>
        </Col>

        <Col md={6}>
          <FormCard></FormCard>
        </Col>
      </Row>
      <div style={{marginTop: '30px'}}>
        <EarningTable></EarningTable>
      </div>
    </CommonLayout>
  );
};

export default Earnings;