import React, {useState} from 'react';
import {Col, Form, InputNumber, Modal, Row} from "antd";
import RmCard from "../common/RMCard";
import CommonLayout from "../layout/CommonLayout";
import PaymentTable from "./PaymentTable";
import RMButton from "../common/button/RMButton";
import RMForm from "../common/RMForm";
import {useParams} from "react-router-dom";
import AllApiService from "../../service/AllApiService";
import {notifyError, notifySuccess} from "../common/notifications";
import {useSelector} from "react-redux";

const Payment = () => {
  const user = useSelector((state) => state.user);
  const email = user.email;
  console.log({user})
  const submitPayment = async (values) => {
    await AllApiService.paymentRequest(values)
      .then((response) => {
        console.log({response})
        if (response.status === 200) {
          notifySuccess("Successfully Created")
          form.resetFields();
          // navigate(-1)
        }
      })
      .catch((error) => {
        console.log(error)
        notifyError(error.response.data.message)
      });
  };


  const [form] = Form.useForm();
  const {id} = useParams();
  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };
  const onFinish = (values) => {
    const newValues = {
      ...values,
      email: email
    }
    submitPayment(newValues)
  }
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };


  return (
    <CommonLayout>
      <h1 style={{fontWeight: '600', fontSize: '20px'}}>Payments</h1>
      <Row style={{marginTop: '30px'}} gutter={16}>
        <Col md={8}>
          <RmCard title='Balance On Hold' sign={<i className="fa fa-dollar-sign"></i>} count={user.hold_balance}
                  icon={<i className="fa fa-dollar-sign"></i>}></RmCard>
        </Col>

        <Col md={8}>
          <RmCard title='Balance' sign={<i className="fa fa-dollar-sign"></i>} count={user.balance}
                  icon={<i className="fa fa-dollar-sign"></i>}></RmCard>
        </Col>

        <Col md={8}
             style={{alignItems: 'center', justifyContent: 'center', display: 'flex', backgroundColor: '#ffffff'}}>
          <button className='btn btn-copy' onClick={showModal}>Withdraw</button>
        </Col>
      </Row>
      <div style={{marginTop: '30px'}}>
        <PaymentTable></PaymentTable>
      </div>
      {/*  Modal*/}
      <Modal
        open={open}
        title="withdraw"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[

          // <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          //   Submit
          // </Button>,

        ]}
      >
        <RMForm form={form}
                autoComplete="off"
                style={{
                  backgroundColor: "#ffffff",
                }}
                onFinish={onFinish}

        >
          <Form.Item {...layout}
                     label="Amount"
                     name="amount"
                     rules={[{
                       required: false, message: "",
                     }]}
          >
            <InputNumber style={{width: '100%'}} min={100}/>
          </Form.Item>

          {/*------------Billing Address-----------*/}
          <Row gutter={16}>
            <RMButton style={{marginTop: '15px', marginLeft: '6px'}} type="primary" htmlType="submit">
              {id ? "Update" : "Submit"}
            </RMButton>
          </Row>

        </RMForm>
      </Modal>


    </CommonLayout>
  );
};

export default Payment;