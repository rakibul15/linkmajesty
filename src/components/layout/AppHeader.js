import React from "react";
import {BellFilled, MenuOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar, Badge, Button, Dropdown, Layout, Menu, Space} from "antd";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const LOGOUT = "logout";
const PROFILE = "profile";

export default function AppHeader({collapsed, setCollapsed}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const handleLogOut = async () => {
  //   try {
  //     await UsersService.logOut();
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     localStorage.clear();
  //     dispatch(setUser(""));
  //     navigate("/login");
  //   }
  // };


  // const userName = useSelector(state => state.user.username)

  const handleMenuClick = async (selected) => {
    const {key} = selected;

    // if (key === LOGOUT) {
    //   await handleLogOut();
    // }

    // if (key === PROFILE) {
    //   const userId = localStorage.getItem("userId")
    //   // navigate(`/configurations/profile/${userId}`)
    // }
  }

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: 'Profile',
          key: PROFILE
        },
        {
          label: <Button size="small" type="primary" danger>
            Log Out
          </Button>,
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
        <Button style={{color: 'skyblue', border: '2px solid skyblue'}}><i className="fas fa-dollar-sign"/> <span
          style={{marginLeft: '3px'}}>500</span></Button>
        <Dropdown overlay={menu}>
          <Space>
            <div style={{display: 'block'}}>
              <p style={{fontSize: "14px"}}>Rakibul Hasan</p>
            </div>
            <Avatar size={"large"} icon={<UserOutlined/>}/>
          </Space>

        </Dropdown>
      </div>

    </Layout.Header>
  );
}
