import React from "react";
import {DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {Button, Dropdown, Layout, Menu, Space} from "antd";
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
        // {
        //   label: <ARMButton size="small" type="primary" danger>
        //     Log Out
        //   </ARMButton>,
        //   key: LOGOUT
        // }
      ]}
    />
  );

  return (
    <Layout.Header
      className="site-layout-background"
      style={{
        color: "#ffffff",
        backgroundColor: "#391B52",
        fontSize: "20px",
        position: "sticky",
        top: 0,
        zIndex: 9999999,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => setCollapsed(!collapsed),
      })}

      <Dropdown overlay={menu}>
        <Button>
          <Space>
            <small>"userName"</small>
            <DownOutlined/>
          </Space>
        </Button>
      </Dropdown>
    </Layout.Header>
  );
}
