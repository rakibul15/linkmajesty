import React, {useEffect, useState} from 'react';
import CommonLayout from "./layout/CommonLayout";
import {Col, Row} from "antd";
import RmCard from "./common/RMCard";
import {useSelector} from "react-redux";
import EarningService from "../service/EarningService";
import {notifySuccess} from "./common/notifications";
import {Form} from "react-bootstrap";
import ChartView from "./chart/ChartView";

const Dashboard = () => {
  const [range, setRange] = useState('last_month');
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const user = useSelector((state) => state.user);
  const text = "https://linkmajesty.com/" + user.affiliate_url;
  const [count, setCount] = useState()
  const [signup, setSignup] = useState()
  const [earning, setEarning] = useState()


  const numberOfClick = async (values) => {
    try {
      const {data} = await EarningService.numberOfClicks();
      console.log({data})
      setCount(data.count)
    } catch (error) {
      console.log("Something went wrong")
    }
  };

  const numberOfSignup = async (values) => {
    try {
      const {data} = await EarningService.numberOfSignup();
      setSignup(data.count)
    } catch (error) {
      console.log("Something went wrong")
    }
  };
  const getEarning = async (values) => {
    try {
      const {data} = await EarningService.getEarnig();
      console.log({data})
      setEarning(data.thisMonthEarning)
    } catch (error) {
      console.log("Something went wrong")
    }
  };

  // const handleChangerange = (e) => {
  //   console.log(e.target.value)
  //   setRange(e.target.value)
  // }

  //API CALL
  useEffect(() => {
    (async () => {
      await numberOfClick()
      await numberOfSignup()
      await getEarning()
    })();
  }, []);


  return (
    <CommonLayout>
      <h1 style={{fontWeight: '600', fontSize: '20px'}}>Dashboard</h1>
      <div style={{backgroundColor: '#ffffff', padding: '17px', borderRadius: '2px'}}>
        <h6 style={{color: '#4385F4', fontSize: '17px', marginBottom: '10px'}}>Share & Earn
          Commission</h6>
        <div className="row earning-link m-1 justify-content-between d-flex align-items-center">
          <div className=" col-xs-6 col-sm-9 col-lg-10 col-xl-11">
            <div className="affiliate-url">
              <p>{"https://linkmajesty.com/" + user.affiliate_url}</p>
            </div>
          </div>
          <div className="col-xs-6 col-sm-3 col-lg-2 col-xl-1 affiliate-url text-right" onClick={() => {
            navigator.clipboard.writeText(text);
            notifySuccess("copied successfully")
          }

          }
          >
            <button className="btn btn-copy">Copy</button>
          </div>
        </div>
      </div>


      {/*-----------------Cards Row------------------*/}
      <Row style={{marginTop: '30px'}} gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
          <RmCard title='Clicks' count={count} icon={<i className="fa fa-paper-plane"></i>}></RmCard>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
          <RmCard title='Sign up' count={signup} icon={<i className="fa fa-user-plus"></i>}></RmCard>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
          <RmCard title='This Month Earnings' sign={<i className="fa fa-dollar-sign"></i>} count={earning}
                  icon={<i className="fa fa-dollar-sign"></i>}></RmCard>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
          <RmCard title='Balance' sign={<i className="fa fa-dollar-sign"></i>} count={user.balance}
                  icon={<i className="fa fa-dollar-sign"></i>}></RmCard>
        </Col>
      </Row>

      {/*  ------------------Graphs--------------------*/}
      <div style={{
        padding: '20px 30px',
        backgroundColor: '#fff',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
        marginTop: '30px'
      }}>
        <Row style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Col><a href>Clicks & Signup</a></Col>
          <Col> <Form.Select onChange={(e) => setRange(e.target.value)} aria-label="Default select example">
            <option value="last_month">Last 30 Days</option>
            {/*<option value="last_week">Last Week</option>*/}
            <option value="last_6_month">Last 6 Months</option>
            <option value="last_year">Last Year</option>
          </Form.Select></Col>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Col md={12}>
            <ChartView range={range} setRange={setRange}/>
          </Col>
        </Row>
      </div>


    </CommonLayout>
  );
};

export default Dashboard;