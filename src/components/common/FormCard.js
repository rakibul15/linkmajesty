import React from 'react';
import RMForm from "./RMForm";
import {Button, Form, Input} from "antd";

const FormCard = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Values==>", values)
  }
  return (<div>
    <div style={{backgroundColor: '#ffffff', padding: '5px 20px'}}>
      <h1 style={{marginTop: '2px', marginBottom: '0px', color: 'skyblue'}}>Your Paypal Email</h1>
      <RMForm
        form={form}
        name="store"
        initialValues={{
          'Email': 'rakib@gmail.com'
        }}
        autoComplete="off"
        style={{
          backgroundColor: "#ffffff",
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="Email"
        >
          <Input style={{border: 'none'}} size={"small"} type={'email'}/>
        </Form.Item>
        <div style={{display: 'flex', justifyContent: 'end', marginBottom: '5px'}}>
          <Button type={'primary'} size={'small'} htmlType={'submit'}>Change</Button>
        </div>
      </RMForm>
    </div>
  </div>);
};

export default FormCard;