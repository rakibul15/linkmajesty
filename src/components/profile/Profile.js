import React, {useEffect} from 'react';
import CommonLayout from "../layout/CommonLayout";
import {Avatar, Col, Form, Image, Input, Row, Space} from "antd";
import RMForm from "../common/RMForm";
import RmCard from "../common/RMCard";
import RMButton from "../common/button/RMButton";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import ChangePassword from "./ChangePassword";

const Profile = () => {
  const [form] = Form.useForm();
  const {id} = useParams();
  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };

  const user = useSelector((state) => state.user);
  console.log({user})
  console.log("name", user.name)

  useEffect(() => {
    form.setFieldsValue({
      ...user
    })
  }, []);
  const onFinish = (values) => {
    console.log({values})
  }


  return (
    <CommonLayout>
      <h1 style={{fontWeight: '600', fontSize: '20px', marginLeft: '20px', marginBottom: '30px'}}>Profile</h1>

      {/* --------Profile section---------*/}
      <Row style={{justifyContent: 'space-around'}}>
        <Col md={12}
             style={{
               paddingLeft: "40px",
               paddingRight: '80px',
               paddingTop: '30px',
               paddingBottom: '40px',
               backgroundColor: "#ffffff"
             }}>
          {/*--------Profile Image and Name----------*/}
          <Space style={{display: "flex", alignItems: 'flex-end'}}>
            <Avatar size={50} style={{marginTop: '30px'}}
                    src={
                      <Image
                        src="https://joeschmoe.io/api/v1/random"
                        style={{
                          width: 50,
                          height: 50
                        }}
                      />
                    }
            />
            <div>
              <p style={{marginBottom: '0px'}}>{user.name}</p>
              <small>frghftg</small>
            </div>
          </Space>
          {/* -----------Basic Details---------*/}
          <h4 style={{marginTop: '30px'}}>Basic Details</h4>
          <RMForm form={form}
                  autoComplete="off"
                  style={{
                    backgroundColor: "#ffffff",
                  }}
                  onFinish={onFinish}

          >
            <Form.Item {...layout}
                       label="Full Name"
                       name="name"
                       rules={[{
                         required: false, message: "",
                       }, {
                         whitespace: true,
                         message: "Only space is not allowed",
                       },]}
            >
              <Input/>
            </Form.Item>

            <Form.Item {...layout}
                       label="Email"
                       name="email"
                       rules={[{
                         required: false, message: "",
                       }, {
                         whitespace: true,
                         message: "Only space is not allowed",
                       },]}
            >
              <Input type={'email'}/>
            </Form.Item>
            {/*------------Billing Address-----------*/}
            <Row gutter={16}>
              <RMButton style={{marginTop: '15px', marginLeft: '6px'}} type="primary" htmlType="submit">
                {id ? "Update" : "Submit"}
              </RMButton>
            </Row>

          </RMForm>
        </Col>
        {/*------------Card and Password Section-----------*/}
        <Col md={11}>
          {/*----------Cards----------*/}
          <Row gutter={30} style={{justifyContent: 'space-between'}}>
            <Col md={12}>
              <RmCard title='Clicks' count={500} icon={<i className="fa fa-paper-plane"></i>}></RmCard>
            </Col>
            <Col md={12}>
              <RmCard title='Sign up' count={160} icon={<i className="fa fa-user-plus"></i>}></RmCard>
            </Col>

          </Row>
          {/*------------Password Section------------*/}
          <ChangePassword></ChangePassword>

        </Col>
      </Row>
    </CommonLayout>
  );
};

export default Profile;