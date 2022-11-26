import React from 'react';
import CommonLayout from "./layout/CommonLayout";
import {Button, Col, Input, Row, Select, Tooltip} from "antd";
import {notifySuccess} from "./common/notifications";
import {Option} from "antd/es/mentions";
import RmCard from "./common/RMCard";
import {Column} from "@ant-design/charts";

const Dashboard = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const text = "git@github.com:ant-design/ant-design.git"

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


  return (
    <CommonLayout>
      <h1 style={{fontWeight: '600', fontSize: '20px'}}>Dashboard</h1>
      <div style={{backgroundColor: '#ffffff', padding: '17px', borderRadius: '2px'}}>
        <h4 style={{marginTop: '5px', color: '#4385F4'}}>Share & Earn Commission</h4>
        <Input.Group compact>
          <Input disabled
                 style={{
                   width: 'calc(100% - 120px)',
                   backgroundColor: '#ffffff',
                   color: 'black'
                 }}
                 defaultValue={text}
          />
          <Tooltip title="copy the url">
            <Button style={{padding: '0px 35px'}} type={"primary"} onClick={() => {
              navigator.clipboard.writeText(text);
              notifySuccess("copied successfully")
            }}>Copy</Button>
          </Tooltip>
        </Input.Group>
      </div>

      {/*-------------Select Box------------------*/}
      <Select
        defaultValue="thisMonth"
        size={"large"}
        style={{
          width: 200,
          marginTop: '35px'
        }}
        onChange={handleChange}
      >
        <Option value="thisMonth">This Month</Option>
        <Option value="thisWeek">This Week</Option>
        <Option value="thisYear">This Year</Option>
      </Select>


      {/*-----------------Cards Row------------------*/}
      <Row style={{marginTop: '30px'}} gutter={16}>
        <Col md={6}>
          <RmCard title='Clicks' count={500} icon={<i className="fa fa-paper-plane"></i>}></RmCard>
        </Col>
        <Col md={6}>
          <RmCard title='Sign up' count={160} icon={<i className="fa fa-user-plus"></i>}></RmCard>
        </Col>
        <Col md={6}>
          <RmCard title='Earnings' sign={<i className="fa fa-dollar-sign"></i>} count={500}
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
          <Col><Button>Last 30 Days</Button></Col>
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