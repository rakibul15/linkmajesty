import React, {useEffect, useState} from 'react';
import CommonLayout from "./layout/CommonLayout";
import {Col, Row} from "antd";
import RmCard from "./common/RMCard";
import {Column} from "@ant-design/charts";
import {useSelector} from "react-redux";
import EarningService from "../service/EarningService";
import {notifySuccess} from "./common/notifications";
import {Form} from "react-bootstrap";

const Dashboard = () => {

  // const [data, setData] = useState({})


  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const user = useSelector((state) => state.user);
  console.log({user})
  const text = "https://linkmajesty.com/" + user.affiliate_url;
  const [count, setCount] = useState()
  const [signup, setSignup] = useState()

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

  const clicksAndSignUpTable = async (values) => {
    try {
      const {data} = await EarningService.numberOfSignupData();
      // console.log("============>", data)
      // setSignup(data.count)
    } catch (error) {
      console.log("Something went wrong")
    }
  };


  const data = [
    {
      type: 'January',
      sales: 38,
    },
    {
      type: 'February',
      sales: 52,
    },
    {
      type: 'March',
      sales: 61,
    },
    {
      type: 'April',
      sales: 90,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'June',
      sales: 38,
    },
    {
      type: 'July',
      sales: 38,
    },
    {
      type: 'August',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Month',
      },
      sales: {
        alias: 'Clicks',
      },
    },
  };

  //API CALL
  useEffect(() => {
    (async () => {
      await numberOfClick()
      await numberOfSignup()
      await clicksAndSignUpTable()
    })();
  }, []);


  return (
    <CommonLayout>
      <h1 style={{fontWeight: '600', fontSize: '20px'}}>Dashboard</h1>
      <div style={{backgroundColor: '#ffffff', padding: '17px', borderRadius: '2px'}}>
        <h6 style={{color: '#4385F4', fontSize: '17px', marginBottom: '10px'}}>Share & Earn
          Commission</h6>
        <div className="row earning-link m-1 justify-content-between d-flex align-items-center">
          <div className="col-sm-11">
            <div className="affiliate-url">
              <p>{"https://linkmajesty.com/" + user.affiliate_url}</p>
            </div>
          </div>
          <div className="col-sm-1 affiliate-url text-right" onClick={() => {
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
      <Row style={{marginTop: '30px'}} gutter={16}>
        <Col md={6}>
          <RmCard title='Clicks' count={count} icon={<i className="fa fa-paper-plane"></i>}></RmCard>
        </Col>
        <Col md={6}>
          <RmCard title='Sign up' count={160} icon={<i className="fa fa-user-plus"></i>}></RmCard>
        </Col>
        <Col md={6}>
          <RmCard title='Earnings' sign={<i className="fa fa-dollar-sign"></i>} count={signup}
                  icon={<i className="fa fa-dollar-sign"></i>}></RmCard>
        </Col>
        <Col md={6}>
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
          <Col> <Form.Select aria-label="Default select example">
            {/*<option></option>*/}
            <option value="1">Last 30 Days</option>
            <option value="2">Last 6 Months</option>
            <option value="3">All Time</option>
          </Form.Select></Col>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Col md={12}>
            <Column  {...config} />;
          </Col>
        </Row>
      </div>


    </CommonLayout>
  );
};

export default Dashboard;