import React, {useEffect, useState} from 'react';
import CommonLayout from "../layout/CommonLayout";
import {Col, Form, Input, message, Row, Space, Upload} from "antd";
import RMForm from "../common/RMForm";
import RmCard from "../common/RMCard";
import RMButton from "../common/button/RMButton";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import ChangePassword from "./ChangePassword";
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';

const Profile = () => {
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

  const user = useSelector((state) => state.user);
  console.log({user})
  console.log("name", user.name)

  useEffect(() => {
    form.setFieldsValue({
      ...user
    })
  }, []);
  const onFinish = (values) => {
    console.log({values})
  }

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    console.log({info})
    if (info.file.status === 'uploading') {
      setLoading(true);
      console.log("Uploading")
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      console.log('Done')
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined/> : <PlusOutlined/>}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );


  return (
    <CommonLayout>
      <h1 style={{fontWeight: '600', fontSize: '20px', marginLeft: '20px', marginBottom: '30px'}}>Profile</h1>

      {/* --------Profile section---------*/}
      <Row style={{justifyContent: 'space-around'}}>
        <Col md={12}
             style={{
               paddingLeft: "40px",
               paddingRight: '80px',
               paddingTop: '30px',
               paddingBottom: '40px',
               backgroundColor: "#ffffff"
             }}>
          {/*--------Profile Image and Name----------*/}
          <Space style={{display: "flex", alignItems: 'flex-end'}}>
            {/*<Avatar size={50} style={{marginTop: '30px'}}*/}
            {/*        src={*/}
            {/*          <Image*/}
            {/*            src="https://joeschmoe.io/api/v1/random"*/}
            {/*            style={{*/}
            {/*              width: 50,*/}
            {/*              height: 50*/}
            {/*            }}*/}
            {/*          />*/}
            {/*        }*/}
            {/*/>*/}

            {/*<div style={{backgroundImage: `url(${photo})`}} className="custom-file-upload">*/}
            {/*  <input type="file" id="file-upload" accept="image/*"/>*/}
            {/*  <label htmlFor="file-upload">Choose file</label>*/}
            {/*</div>*/}

            <Upload
              name="user_image"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action='{http://34.27.11.233/v1/affiliate/update-user-image'
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: '100%',
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>


            <div>
              <p style={{marginBottom: '0px'}}>{user.name}</p>
              <small>frghftg</small>
            </div>
          </Space>
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
              <Input/>
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
              <Input type={'email'}/>
            </Form.Item>
            {/*------------Billing Address-----------*/}
            <Row gutter={16}>
              <RMButton style={{marginTop: '15px', marginLeft: '6px'}} type="primary" htmlType="submit">
                {id ? "Update" : "Submit"}
              </RMButton>
            </Row>

          </RMForm>
        </Col>
        {/*------------Card and Password Section-----------*/}
        <Col md={11}>
          {/*----------Cards----------*/}
          <Row gutter={30} style={{justifyContent: 'space-between'}}>
            <Col md={12}>
              <RmCard title='Clicks' count={500} icon={<i className="fa fa-paper-plane"></i>}></RmCard>
            </Col>
            <Col md={12}>
              <RmCard title='Sign up' count={160} icon={<i className="fa fa-user-plus"></i>}></RmCard>
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