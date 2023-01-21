import React from "react";
import {Link} from "react-router-dom";
import "./Authentication.css";
import {Col, Form, Input, Row} from "antd";
import RMButton from "../common/button/RMButton";
import logo from '../../logo.png'
import RMForm from "../common/RMForm";
import authService from "../../service/AuthService";
import {notifySuccess} from "../common/notifications";

const PasswordReset = () => {

  const [form] = Form.useForm();
  const handleReset = async (values) => {
    try {
      const {data} = await authService.resetPassword(values);
      if (data.status == true) {
        notifySuccess("A password reset link has been sent to your email")
      }
      console.log({data})

    } catch (error) {
      console.log("Something went wrong")
    }
  };


  const onFinish = (values) => {
    handleReset(values)
    form.resetFields();
  }


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
                <h3>Reset Password</h3>
              </div>

              <RMForm
                form={form}
                name="store"
                autoComplete="off"
                style={{
                  backgroundColor: "#ffffff",
                }}
                onFinish={onFinish}
              >

                <Form.Item
                  name="email"
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
              </RMForm>


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

export default PasswordReset;
