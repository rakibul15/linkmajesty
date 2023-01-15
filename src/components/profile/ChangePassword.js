import React from 'react';
import {Form, Input, notification} from "antd";
import RMButton from "../common/button/RMButton";
import RMForm from "../common/RMForm";
import authService from "../../service/AuthService";
import {notifySuccess} from "../common/notifications";
import {useSelector} from "react-redux";

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

const ChangePassword = () => {
  const [form] = Form.useForm();
  const user = useSelector((state) => state.user);
  const token = localStorage.getItem('token');
  const onFinish = (values) => {


    const newValues = {
      emil: user.email,
      token: token,
      new_password: values.new_password,
    }

    authService.resetPassword(newValues)
      .then((response) => {
        console.log({response})
        if (response.data.status === false) {
          notification["error"]({
            message: response.data.message,
          });
          return
        }

        notifySuccess("Successfully change password")

      })
      .catch((error) => {
        notification["error"]({
          message: error,
        });
        console.log("something went wrong", error);
      });
  }

  return (
    <RMForm form={form}
            autoComplete="off"
            style={{
              backgroundColor: "#ffffff",
            }}
            onFinish={onFinish}

    >
      <div style={{
        paddingLeft: "40px",
        paddingRight: '80px',
        paddingTop: '30px',
        paddingBottom: '40px',
        backgroundColor: "#ffffff",
        marginTop: "27px"
      }}>
        <h4 style={{marginBottom: '20px'}}>Change Password</h4>
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
                   name="new_password"
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

        <RMButton style={{marginTop: '10px'}} type="primary" htmlType="submit">
          Change Password
        </RMButton>
      </div>
    </RMForm>
  );
};

export default ChangePassword;