import React, {useEffect, useState} from 'react';
import CommonLayout from "../layout/CommonLayout";
import {Col, Form, Input, Row, Space} from "antd";
import RMForm from "../common/RMForm";
import RMButton from "../common/button/RMButton";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import ChangePassword from "./ChangePassword";
import PaypalEmail from "./PaypalEmail";
import {notifyError, notifySuccess} from "../common/notifications";
import AllApiService from "../../service/AllApiService";


const Profile = () => {
  const [form] = Form.useForm();
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };

  const user = useSelector((state) => state.user);
  console.log({user})
  console.log("name", user.name)

  useEffect(() => {
    form.setFieldsValue({
      ...user
    })
  }, []);


  const updateImage = async (values) => {
    try {
      const {data} = await AllApiService.userImage(values);
      if (data.status === false) {
        notifyError(data.message)
        return
      }
      setImageUrl(data.image)
      notifySuccess(data.messages)
    } catch (error) {
      notifyError("Something Went Wrong!")
    }
  };


  const updateUserInfo = async (values) => {
    try {
      const {data} = await AllApiService.userInfoUpdate(values);
      if (data.status === false) {
        notifyError(data.message)
        return
      }
      setImageUrl(data.image)
      notifySuccess(data.messages)
    } catch (error) {
      notifyError("Something Went Wrong!")
    }
  };

  const onFinish = (values) => {
    console.log({values})
    updateUserInfo()
  }


  const logoFileUpload = (file) => {
    const formData = new FormData();
    formData.append('user_image', file);
    updateImage(formData)
  }


  return (
    <CommonLayout>
      <h1 style={{fontWeight: '600', fontSize: '20px', marginLeft: '20px', marginBottom: '30px'}}>Profile</h1>

      {/* --------Profile section---------*/}
      <Row gutter={[24, 24]} style={{justifyContent: 'space-around'}}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}
        >
          <div style={{
            paddingLeft: "40px",
            paddingRight: '80px',
            paddingTop: '30px',
            paddingBottom: '40px',
            backgroundColor: "#ffffff"
          }}>


            {/*--------Profile Image and Name----------*/}
            <Space style={{display: "flex", alignItems: 'flex-end'}}>
              <img style={{height: '130px', width: '130px', objectFit: 'fill'}} src={imageUrl}
                   alt=""/>

              <div>
                <p style={{marginBottom: '0px'}}>{user.name}</p>
              </div>
            </Space>
            <div className="upload-btn-wrapper">

              <input className='input-file' type={"file"}
                     accept=".jpg, .jpeg, .png, .pdf"
                     onChange={(e) => {
                       logoFileUpload(
                         e.target.files[0]
                       )
                     }}
                     height={"fit-content"} type="file"/>
              <label className='label_img' htmlFor="upload file">
                {/*<img style={{width: '40px', height: '40px', objectFit: 'cover'}} src={icon} alt=""/>*/}
                Upload Image
              </label>

            </div>

            {/* -----------Basic Details---------*/}
            <h4 style={{marginTop: '30px'}}>Basic Details</h4>
            <RMForm form={form}
                    autoComplete="off"
                    style={{
                      backgroundColor: "#ffffff",
                    }}
                    onFinish={onFinish}

            >
              <Form.Item {...layout}
                         label="Full Name"
                         name="name"
                         rules={[{
                           required: false, message: "",
                         }, {
                           whitespace: true,
                           message: "Only space is not allowed",
                         },]}
              >
                <Input size={"large"} type={'texts'}/>
              </Form.Item>

              <Form.Item {...layout}
                         label="Email"
                         name="email"
                         rules={[{
                           required: false, message: "",
                         }, {
                           whitespace: true,
                           message: "Only space is not allowed",
                         },]}
              >
                <Input size={"large"} type={'email'}/>
              </Form.Item>
              {/*------------Billing Address-----------*/}
              <Row gutter={16}>
                <RMButton size={'large'} style={{marginTop: '15px', marginLeft: '6px'}} type="primary"
                          htmlType="submit">
                  {id ? "Update" : "Submit"}
                </RMButton>
              </Row>

            </RMForm>
          </div>
        </Col>
        {/*------------Card and Password Section-----------*/}
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          {/*----------Cards----------*/}
          <Row gutter={30} style={{justifyContent: 'space-between'}}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <PaypalEmail/>
            </Col>

          </Row>
          {/*------------Password Section------------*/}
          <ChangePassword></ChangePassword>

        </Col>
      </Row>
    </CommonLayout>
  );
};

export default Profile;