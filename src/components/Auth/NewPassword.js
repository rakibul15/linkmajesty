import React from 'react';
import {Col, Form, Input, notification, Row} from "antd";
import logo from "../../logo.png";
import RMForm from "../common/RMForm";
import RMButton from "../common/button/RMButton";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import axios from "axios";

const NewPassword = () => {
  let navigate = useNavigate();
  const [form] = Form.useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const user_email = searchParams.get("email")
  const token = searchParams.get("token");


  const resetPassword = async (newValue) => {
    try {
      const {data} = await axios.post('http://34.27.11.233/v1/affiliate/verify-reset-password', newValue);
      console.log("===========>", data)
      if (data.status === true) {
        notification["success"]({
          message: data.message,
        });
        navigate('/signin')
      }
      if (data.status === false) {
        notification["error"]({
          message: data.message,
        });
      }
    } catch (error) {
      // notifyError(error.message)
    }
  };


  const onFinish = (values) => {
    const newValue = {
      new_password: values.new_password,
      user_email,
      token

    }
    console.log({newValue})
    resetPassword(newValue)
    // resetPassword(values)
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
                <h6 style={{marginTop: '0px', marginBottom: '15px'}}>Enter your email to reset password
                </h6>
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
                  name="new_password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                  hasFeedback
                  style={{marginTop: '15px', textAlign: 'left'}}
                >
                  <Input.Password
                    size={"large"}
                    placeholder="Password"
                    iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                  />
                </Form.Item>

                <Form.Item
                  name="ConfirmPassword"
                  hasFeedback
                  dependencies={['new_password']}
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({getFieldValue}) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('new_password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                      },
                    }),
                  ]}
                  style={{marginTop: '15px', textAlign: 'left'}}
                >
                  <Input.Password
                    size={"large"}
                    placeholder="Confirm Password"
                    iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                  />
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

export default NewPassword;