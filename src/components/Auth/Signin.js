import React from 'react';
import {Link} from 'react-router-dom';
import './Authentication.css';
import {Col, Form, Input, Row} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import RMButton from "../common/button/RMButton";
import logo from "../../logo.png";

const Signin = () => {

  return (
    <>
      <div style={{backgroundColor: '#FAFBFE'}}>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            alignItems: 'center',
            textAlign: 'center'
          }}>
          <Col md={7}
          >
            <div style={{marginBottom: '35px'}}><img style={{height: '54px', width: '300px'}} src={logo} alt=""/></div>
            <div style={{
              backgroundColor: '#ffffff',
              padding: '30px 50px',
              borderRadius: '10px',
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            }}>
              <div style={{marginBottom: '30px'}}>
                <h1>Sing In</h1>
                <h4 style={{marginTop: '0px', marginBottom: '15px'}}>Backlink Management System

                </h4>
              </div>


              <Form.Item
                name="Email"
                rules={[{
                  required: false, message: "",
                }, {
                  whitespace: true,
                  message: "Only space is not allowed",
                },]}
                style={{marginTop: '15px'}}
              >
                <Input size={"large"} type={'email'} placeholder={'Email'}/>
              </Form.Item>

              <Form.Item
                name="Password"
                rules={[{
                  required: false, message: "",
                }, {
                  whitespace: true,
                  message: "Only space is not allowed",
                },]}
                style={{marginTop: '15px', marginBottom: '0px'}}
              >
                <Input.Password
                  size={"large"}
                  placeholder="Password"
                  iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                />
              </Form.Item>
              <p style={{padding: '0px', margin: '0px', textAlign: 'right'}}><Link to={"/reset-password"}
                                                                                   style={{
                                                                                     padding: '0px',
                                                                                     margin: '0px'
                                                                                   }}>Forget Password!</Link></p>

              <RMButton size={'large'} style={{width: '100%', fontSize: '19px', padding: '0px', marginTop: '15px'}}
                        type="primary"
                        htmlType="submit">
                Sign Up
              </RMButton>
              <Form.Item style={{marginTop: '35px'}}>
                <h4>Don't have an account? <Link to={"/signup"}>Sign Up</Link></h4>
              </Form.Item>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Signin;