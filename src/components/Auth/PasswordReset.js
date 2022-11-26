import React from "react";
import {Link} from "react-router-dom";
import "./Authentication.css";
import {Col, Form, Input, Row} from "antd";
import RMButton from "../common/button/RMButton";
import logo from '../../logo.png'

const passwordReset = () => {

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
          <Col md={7}>
            <div style={{marginBottom: '35px'}}><img style={{height: '54px', width: '300px'}} src={logo} alt=""/></div>
            <div style={{
              backgroundColor: '#ffffff',
              padding: '30px 50px',
              borderRadius: '10px',
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            }}>

              <div style={{marginBottom: '30px'}}>
                <h1>Reset Password</h1>
                <h4 style={{marginTop: '0px', marginBottom: '15px'}}>Enter your email to reset password

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
              <RMButton size={'large'} style={{width: '100%', fontSize: '19px', padding: '0px', marginTop: '5px'}}
                        type="primary"
                        htmlType="submit">
                Send
              </RMButton>
              <Form.Item style={{marginTop: '35px'}}>
                <h4>Remember Password? <Link to={"/signin"}>Sign In</Link></h4>
              </Form.Item>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default passwordReset;
