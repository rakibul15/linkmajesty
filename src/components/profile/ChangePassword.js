import React from 'react';
import {Form, Input, notification} from "antd";
import RMButton from "../common/button/RMButton";
import RMForm from "../common/RMForm";
import {useSelector} from "react-redux";
import authService from "../../service/AuthService";
import {notifyError} from "../common/notifications";

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

  const passwordReset = async (newValue) => {
    try {
      const {data} = await authService.updateUserPassword(newValue);
      console.log("===========>", data)
      if (data.status === true) {
        notification["success"]({
          message: data.message,
        });
        // navigate('/signin')
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

  // const VarifySignin = async (values) => {
  //   authService.login(values)
  //     .then((response) => {
  //       if (response.data.status === false) {
  //         notification["error"]({
  //           message: response.data.message,
  //         });
  //         return
  //       }
  //       passwordReset()
  //
  //     })
  //     .catch((error) => {
  //       notification["error"]({
  //         message: "Username or password invalid",
  //       });
  //       console.log("something went wrong", error);
  //     });
  //
  //
  // };


  const onFinish = (values) => {
    const loginData = {
      password: values.password,
      email: user.email
    }


    const VarifySignin = async (loginData) => {
      authService.login(loginData)
        .then((response) => {
          if (response.data.status === false) {
            notifyError("Old Password is invalid")
            return
          }
          if (response.data.status === true) {
            const newValues = {
              email: user.email,
              password: values.new_password,
            }
            localStorage.setItem("token", `${response.data.token}`);
            passwordReset(newValues)
          }
        })
        .catch((error) => {
          console.log("something went wrong", error);
        });


    };
    VarifySignin(loginData)


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
                   name="password"
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