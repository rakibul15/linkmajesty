import React from 'react';
import CommonLayout from "../layout/CommonLayout";
import {Avatar, Col, Form, Image, Input, Row, Space} from "antd";
import RMForm from "../common/RMForm";
import RmCard from "../common/RMCard";
import RMButton from "../common/button/RMButton";
import {useParams} from "react-router-dom";

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
              <p style={{marginBottom: '0px'}}>SHhfdgd</p>
              <small>frghftg</small>
            </div>
          </Space>
          {/* -----------Basic Details---------*/}
          <h1 style={{marginTop: '30px'}}>Basic Details</h1>
          <RMForm form={form}
                  name="store"
                  initialValues={{}}
                  autoComplete="off"
                  style={{
                    backgroundColor: "#ffffff",
                  }}
                  onFinish={""}

          >
            <Form.Item {...layout}
                       label="Full Name"
                       name="fullName"
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
            <h1 style={{marginTop: '30px'}}>Billing Address</h1>
            <Form.Item {...layout}
                       name="streetAddress"
                       rules={[{
                         required: false, message: "",
                       }, {
                         whitespace: true,
                         message: "Only space is not allowed",
                       },]}
                       style={{marginTop: '15px'}}
            >
              <Input placeholder={'Street Address'}/>
            </Form.Item>

            <Form.Item {...layout}
                       name="streetAddress"
                       rules={[{
                         required: false, message: "",
                       }, {
                         whitespace: true,
                         message: "Only space is not allowed",
                       },]}
                       style={{marginTop: '15px'}}
            >
              <Input placeholder={'Street Address Line 2'}/>
            </Form.Item>

            <Row gutter={16}>
              <Col md={12}>
                <Form.Item {...layout}
                           name="city"
                           rules={[{
                             required: false, message: "",
                           }, {
                             whitespace: true,
                             message: "Only space is not allowed",
                           },]}
                           style={{marginTop: '15px'}}
                >
                  <Input placeholder={'City'}/>
                </Form.Item>
              </Col>
              <Col md={12}>
                <Form.Item {...layout}
                           name="state"
                           rules={[{
                             required: false, message: "",
                           }, {
                             whitespace: true,
                             message: "Only space is not allowed",
                           },]}
                           style={{marginTop: '15px'}}
                >
                  <Input placeholder={'State'}/>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col md={12}>
                <Form.Item {...layout}
                           name="zip"
                           rules={[{
                             required: false, message: "",
                           }, {
                             whitespace: true,
                             message: "Only space is not allowed",
                           },]}
                           style={{marginTop: '15px'}}
                >
                  <Input placeholder={'Zip'}/>
                </Form.Item>
              </Col>
              <Col md={12}>
                <Form.Item {...layout}
                           name="country"
                           rules={[{
                             required: false, message: "",
                           }, {
                             whitespace: true,
                             message: "Only space is not allowed",
                           },]}
                           style={{marginTop: '15px'}}
                >
                  <Input placeholder={'Country'}/>
                </Form.Item>
              </Col>
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
          <div style={{
            paddingLeft: "40px",
            paddingRight: '80px',
            paddingTop: '30px',
            paddingBottom: '40px',
            backgroundColor: "#ffffff",
            marginTop: "27px"
          }}>
            <h1 style={{marginBottom: '20px'}}>Change Password</h1>
            <Form.Item {...layout}
                       name="oldPassword"
                       rules={[{
                         required: false, message: "",
                       }, {
                         whitespace: true,
                         message: "Only space is not allowed",
                       },]}
                       style={{marginTop: '15px'}}
            >
              <Input placeholder={'Old Password'}/>
            </Form.Item>

            <Form.Item {...layout}
                       name="newPassword"
                       rules={[{
                         required: false, message: "",
                       }, {
                         whitespace: true,
                         message: "Only space is not allowed",
                       },]}
                       style={{marginTop: '15px'}}
            >
              <Input placeholder={'New Password'}/>
            </Form.Item>

            <Form.Item {...layout}
                       name="confirmPassword"
                       rules={[{
                         required: false, message: "",
                       }, {
                         whitespace: true,
                         message: "Only space is not allowed",
                       },]}
                       style={{marginTop: '15px'}}
            >
              <Input placeholder={'Confirm Password'}/>
            </Form.Item>

            <RMButton type="primary" htmlType="submit">
              {id ? "Update" : "Change Password"}
            </RMButton>
          </div>

        </Col>
      </Row>
    </CommonLayout>
  );
};

export default Profile;