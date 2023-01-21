import React, {useEffect, useState} from 'react';
import CommonLayout from "../layout/CommonLayout";
import {Col, Row} from "antd";
import RmCard from "../common/RMCard";
import EarningTable from "./EarningTable";
import EarningService from "../../service/EarningService";

const Earnings = () => {
  const [thisMonthEarning, setThisMonthEarning] = useState()
  const [lastMonthEarning, setLastMonthEarning] = useState()
  const [totalEarning, setTotalEarning] = useState()

  const getEarning = async (values) => {
    try {
      const {data} = await EarningService.getEarnig();
      console.log({data})
      setLastMonthEarning(data.lastMonthEarning)
      setThisMonthEarning(data.thisMonthEarning)
      setTotalEarning(data.totalEarning)
    } catch (error) {
      console.log("Something went wrong")
    }
  };
  useEffect(() => {
    (async () => {
      await getEarning()
    })();
  }, []);


  return (
    <CommonLayout>
      <h1 style={{fontWeight: '600', fontSize: '20px'}}>Earnings</h1>
      <Row style={{marginTop: '30px'}} gutter={16}>
        <Col md={8}>
          <RmCard title='This Month Earning' sign={<i className="fa fa-dollar-sign"></i>} count={thisMonthEarning}
                  icon={<i className="fa fa-dollar-sign"></i>}></RmCard>
        </Col>

        <Col md={8}>
          <RmCard title='LastMonth Earning' sign={<i className="fa fa-dollar-sign"></i>} count={lastMonthEarning}
                  icon={<i className="fa fa-dollar-sign"></i>}></RmCard>
        </Col>

        <Col md={8}>
          <RmCard title='Total Earning' sign={<i className="fa fa-dollar-sign"></i>} count={totalEarning}
                  icon={<i className="fa fa-dollar-sign"></i>}></RmCard>
        </Col>
      </Row>
      <div style={{marginTop: '30px'}}>
        <EarningTable></EarningTable>
      </div>
    </CommonLayout>
  );
};

export default Earnings;