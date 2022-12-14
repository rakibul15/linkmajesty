import React from "react";
import {BellFilled, MenuOutlined} from "@ant-design/icons";
import {Badge, Button, Dropdown, Layout, Menu, Space} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import profile from "../../logo.png"

const LOGOUT = "logout";
const PROFILE = "profile";

export default function AppHeader({collapsed, setCollapsed}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.clear();
    // dispatch(setUser(""));
    navigate("/signin");
  };
  const user = useSelector((state) => state.user);

  // const userName = useSelector(state => state.user.username)

  const handleMenuClick = (selected) => {
    const {key} = selected;
    if (key === LOGOUT) {
      handleLogOut();
    }

    if (key === PROFILE) {
      const userId = localStorage.getItem("userId")
      navigate('/Profile')
    }
  }

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: 'Profile',
          key: PROFILE,
          icon: ""
        },
        {
          label: <div>
            Log Out
          </div>,
          key: LOGOUT
        }
      ]}
    />
  );

  return (
    <Layout.Header
      className="site-layout-background"
      style={{
        color: "black",
        backgroundColor: "#ffffff",
        fontSize: "20px",
        position: "sticky",
        top: 0,
        zIndex: 999,
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center'
      }}
    >
      {React.createElement(collapsed ? MenuOutlined : MenuOutlined, {
        className: "trigger",
        onClick: () => setCollapsed(!collapsed),
      })}

      <div style={{display: "flex", gap: '10px', alignItems: 'center'}}>
        <div style={{marginRight: '10px'}}>
          <Badge dot>
            {/*<BellTwoTone style={{fontSize: '22px', color: 'black'}} theme="outlined"/>*/}
            <BellFilled style={{fontSize: '18px', color: 'black'}}/>
          </Badge>
        </div>
        <Button style={{color: 'skyblue', border: '2px solid skyblue', padding: '0px 26px', borderRadius: '6px'}}><i
          className="fas fa-dollar-sign"/> <span
          style={{marginLeft: '3px'}}>{user.balance}</span></Button>
        <Dropdown overlay={menu}>
          <Space>
            <div style={{display: 'block'}}>
              <p style={{fontSize: "14px"}}>{user.name}</p>
            </div>
            {/*<Avatar size={"large"} icon={<UserOutlined/>}/>*/}
            <img
              style={{
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                objectFit: 'contain',
                border: '1px solid gray'
              }}
              src={profile}
              alt=""/>
          </Space>

        </Dropdown>
      </div>

    </Layout.Header>
  );
}
