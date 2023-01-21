import React, {useEffect, useState} from 'react';
import {Col, Row, Space, Spin} from "antd";
import logo from "../../logo.png";
import {useSearchParams} from "react-router-dom";
import authService from "../../service/AuthService";
import {notifySuccess} from "../common/notifications";

const Validate = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [varified, setVarified] = useState(false)
  const [loading, SetLoading] = useState(true)
  const user_email = searchParams.get("email")
  const token = searchParams.get("token");

  const EmailVerify = async (emailVeifyData) => {
    try {
      const {data} = await authService.Validate(emailVeifyData);
      console.log("===========>", data)
      if (data?.status === true) {
        setVarified(true)
        notifySuccess("Email Successfully Verified")
      }
      setVarified(false)
      SetLoading(false)

    } catch (error) {
      SetLoading(false)
      console.log("error", error)
    }
  };
  const emailVeifyData = {
    user_email,
    token
  }

  useEffect(() => {

    (async () => {
      await EmailVerify(emailVeifyData)
    })();
  }, [user_email, token]);
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
          <Col md={7}>
            <div style={{marginBottom: '35px'}}><img style={{height: '54px', width: '300px'}} src={logo} alt=""/></div>
            {
              loading ? <Space size="middle">
                <Spin size="large"/>
              </Space> : <div style={{
                backgroundColor: '#ffffff',
                padding: '30px 50px',
                borderRadius: '10px',
              }}>
                {
                  varified ? <div style={{marginBottom: '30px'}}>
                    <h4 style={{color: 'green'}}>Your email successfully verified!
                    </h4>
                    <h4 style={{color: 'green'}}>Thank You
                    </h4>
                  </div> : <div style={{marginBottom: '30px'}}>
                    <h4 style={{color: 'red'}}>This token or url is expired!
                    </h4>
                    <h4 style={{color: 'red'}}>Please try for new verification email
                    </h4>
                  </div>
                }
              </div>

            }


          </Col>
        </Row>
      </div>
    </>
  );
};

export default Validate;