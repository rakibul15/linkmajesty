import React, {useState} from 'react';
import {Checkbox, Col, Form, Input, Row, Select} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import RMButton from "../common/button/RMButton";
import {Link, useNavigate} from "react-router-dom";
import logo from "../../logo.png";
import RMForm from "../common/RMForm";
import {notifyError, notifySuccess} from "../common/notifications";
import authService from "../../service/AuthService";
import country from '../../components/Country.json'

const Signup = () => {
  let navigate = useNavigate();
  const countryVal = country;

  const [check, setCheck] = useState(false)
  const [form] = Form.useForm();
  const onChange = (e) => {
  };
  const onSearch = (e) => {

  }
  const handleCheck = (e) => {
    setCheck(e.target.checked)
  }


  const handleSubmit = async (values) => {
    try {
      const {data} = await authService.register(values);
      notifySuccess("An Email sent to your mail")
      navigate("/signin");

    } catch (error) {
      notifyError("Email Already Registered")
      navigate("/signup");

      return
    }
  };

  const onFinish = (values) => {
    const updateValues = {
      check,
      ...values
    }
    handleSubmit(updateValues)
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
        <Col xs={20} sm={18} md={10} lg={7} xl={7}
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
            <h3>Sign Up</h3>
            <p>Don't have an account? Create your account, it takes less than a minute</p>
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
                  required: true, message: "Please input Name",
                }, {
                  whitespace: true,
                  message: "Only space is not allowed",
                },]}
                style={{marginTop: '15px', textAlign: 'left'}}
              >
                <Input size={"large"} placeholder={'Name'}/>
              </Form.Item>

              <Form.Item
                name="Email"
                rules={[{
                  required: true, message: "Please input an Email",
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
                  required: true, message: "Please input Password",
                }, {
                  whitespace: true,
                  message: "Only space is not allowed",
                },]}
                style={{marginTop: '15px', textAlign: 'left'}}
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
                  required: true, message: "Please select a country",
                }, {
                  whitespace: true,
                  message: "Only space is not allowed",
                },]}
                style={{marginTop: '15px', textAlign: 'left'}}

              >
                <Select size={"large"} showSearch
                        placeholder="Select a Country"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }

                        options={countryVal}
                />
              </Form.Item>
              <Form.Item style={{textAlign: 'left'}}>
                <Checkbox rules={[{
                  required: true, message: "Please Check terms and condition",
                },]} onChange={handleCheck}>Agree to <a href="https://linkmajesty.com/terms-of-service/">terms and
                  conditions</a></Checkbox>

              </Form.Item>

              <RMButton disabled={check === false} size={'large'}
                        style={{width: '100%', fontSize: '20px', padding: '0px'}}
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
