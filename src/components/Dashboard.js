import React from 'react';
import CommonLayout from "./layout/CommonLayout";
import {Button, Input, Select, Tooltip} from "antd";
import {notifySuccess} from "./common/notifications";
import {Option} from "antd/es/mentions";

const Dashboard = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const text = "git@github.com:ant-design/ant-design.git"
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

      <Select
        defaultValue="thisMonth"
        style={{
          width: 200,
          marginTop: '20px'
        }}
        onChange={handleChange}
      >
        <Option value="thisMonth">This Month</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>

    </CommonLayout>
  );
};

export default Dashboard;