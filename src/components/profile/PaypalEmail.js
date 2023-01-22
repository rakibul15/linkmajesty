import React from 'react';
import {Form, Input} from "antd";
import RMForm from "../common/RMForm";
import EarningService from "../../service/EarningService";
import {notifyError, notifySuccess} from "../common/notifications";
import {useSelector} from "react-redux";

const PaypalEmail = () => {
  const user = useSelector((state) => state.user);
  console.log({user})
  const paypalEmail = user.paypal_email;
  const [form] = Form.useForm();
  const sendPaypal = async (values) => {
    try {
      const {data} = await EarningService.updatePaypal(values);
      if (data.status === false) {
        notifyError(data.message)
        return
      }
      notifySuccess(data.messages)
    } catch (error) {
      notifyError(error?.response?.data?.message)
      console.log({error})
    }
  };


  const onFinish = (values) => {
    const newValues = {
      ...values,
      email: user.email
    }
    sendPaypal(newValues)
  }


  return (
    <div style={{
      paddingLeft: "40px",
      paddingRight: '80px',
      paddingTop: '30px',
      paddingBottom: '40px',
      backgroundColor: "#ffffff",
    }}>
      <h4> Your Paypal Email</h4>
      {
        paypalEmail === '' ? '' : <h6>{paypalEmail}</h6>
      }

      <RMForm
        form={form}
        name="store"
        autoComplete="off"
        style={{
          backgroundColor: "#ffffff",
        }}
        onFinish={onFinish}
      >
        {
          paypalEmail === '' ? <Form.Item
            name="paypal_email"
            rules={[{
              required: false, message: "",
            }, {
              whitespace: true,
              message: "Only space is not allowed",
            },]}
            style={{marginTop: '15px'}}
          >
            <Input size={"large"} type={'email'} placeholder={'Paypal Email'}/>
          </Form.Item> : ''
        }

        {/*<RMButton size={'large'} style={{width: '100%', fontSize: '19px', padding: '0px', marginTop: '5px'}}*/}
        {/*          type="primary"*/}
        {/*          htmlType="submit">*/}
        {/*</RMButton>*/}
      </RMForm>
    </div>
  );
};

export default PaypalEmail;