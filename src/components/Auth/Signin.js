import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Authentication.css';
import {Col, Form, Input, notification, Row} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import RMButton from "../common/button/RMButton";
import logo from "../../logo.png";
import authService from "../../service/AuthService";
import {notifySuccess} from "../common/notifications";
import RMForm from "../common/RMForm";
import {useDispatch} from "react-redux";
import {setUser} from "../../reducers/user.reducer";

const Signin = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [form] = Form.useForm();


  const handleLogin = async (values) => {
    authService.login(values)
      .then((response) => {
        localStorage.setItem("userId", `${response.data.id}`);
        localStorage.setItem("token", `${response.data.token}`);
        localStorage.setItem("refreshToken", `${response.data.refreshToken}`);
        if (response.data.status === false) {
          notification["error"]({
            message: response.data.message,
          });
          return
        }
        dispatch(setUser(response.data?.account));
        // dispatch(setMenu({ key: '' }));
        notifySuccess("Successfully login")
        navigate("/");


      })
      .catch((error) => {
        notification["error"]({
          message: "Username or password invalid",
        });
        console.log("something went wrong", error);
      });


  };

  const onFinish = (values) => {
    handleLogin(values)
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
                <h3>Sign In</h3>
                <p style={{marginTop: '0px', marginBottom: '15px'}}>Affiliate Management System

                </p>
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
                  name="Email"
                  rules={[{
                    required: true, message: "Please input email",
                  }, {
                    whitespace: true,
                    message: "Only space is not allowed",
                  },]}
                  style={{marginTop: '15px', textAlign: 'left'}}
                >
                  <Input size={"large"} type={'email'} placeholder={'Email'}/>
                </Form.Item>

                <Form.Item
                  name="Password"
                  rules={[{
                    required: true, message: "Please input password",
                  }, {
                    whitespace: true,
                    message: "Only space is not allowed",
                  },]}
                  style={{marginTop: '15px', marginBottom: '0px', textAlign: 'left'}}
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
                  Sign in
                </RMButton>
                <Form.Item style={{marginTop: '35px'}}>
                  <h4>Don't have an account? <Link to={"/signup"}>Sign Up</Link></h4>
                </Form.Item>
              </RMForm>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Signin;