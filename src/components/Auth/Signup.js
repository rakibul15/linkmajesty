import React, {useState} from 'react';
import {Checkbox, Col, Form, Input, Row} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import RMButton from "../common/button/RMButton";
import {Link} from "react-router-dom";
import logo from "../../logo.png";
import RMForm from "../common/RMForm";
import {notifySuccess} from "../common/notifications";
import authService from "../../service/AuthService";

const Signup = () => {
  const [check, setCheck] = useState(false)
  const [form] = Form.useForm();
  const onChange = (e) => {
    setCheck(e.target.checked)
  };
  const handleCountrySubmit = async (updateValues) => {
    try {
      const {data} = await authService.register(updateValues);
      notifySuccess("Store successfully created")

    } catch (error) {
      // notifyResponseError(error)
      console.log("error", error)
    }
  };

  const onFinish = (values) => {
    const updateValues = {
      check,
      ...values
    }
    handleCountrySubmit(updateValues)
  }
  return (
    <div style={{backgroundColor: '#FAFBFE'}}>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
          alignItems: 'center',
          textAlign: 'center'
        }}>
        <Col md={7}
        >
          <div style={{marginBottom: '35px', marginTop: "50px"}}><img style={{height: '54px', width: '300px'}}
                                                                      src={logo} alt=""/></div>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '30px 50px',
            borderRadius: '10px',
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            marginBottom: '40px',
          }}>
            <h1>Sing Up</h1>
            <h4>Don't have an account? Create your account, it takes less than a minute</h4>
            <RMForm
              form={form}
              name="store"
              // initialValues={{}}
              autoComplete="off"
              style={{
                backgroundColor: "#ffffff",
              }}
              onFinish={onFinish}
            >

              <Form.Item
                name="Name"
                rules={[{
                  required: false, message: "",
                }, {
                  whitespace: true,
                  message: "Only space is not allowed",
                },]}
                style={{marginTop: '15px'}}
              >
                <Input size={"large"} placeholder={'Name'}/>
              </Form.Item>

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
                style={{marginTop: '15px'}}
              >
                <Input.Password
                  size={"large"}
                  placeholder="Password"
                  iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                />
              </Form.Item>
              <Form.Item
                name="Country"
                rules={[{
                  required: false, message: "",
                }, {
                  whitespace: true,
                  message: "Only space is not allowed",
                },]}
                style={{marginTop: '15px'}}
              >
                <Input size={"large"} placeholder={'Country'}/>
              </Form.Item>
              <Form.Item style={{textAlign: 'left'}}>
                <Checkbox onChange={onChange}>Agree to <a href="https://linkmajesty.com/terms-of-service/">terms and
                  conditions</a></Checkbox>

              </Form.Item>

              <RMButton size={'large'} style={{width: '100%', fontSize: '19px', padding: '0px'}}
                        type="primary"
                        htmlType="submit">
                Sign Up
              </RMButton>
              <Form.Item style={{marginTop: '35px'}}>
                <h4>Already have account?<Link to={"/signin"}> Sign In</Link></h4>
              </Form.Item>
            </RMForm>
          </div>
        </Col>
      </Row>

    </div>
  );
};

export default Signup;
