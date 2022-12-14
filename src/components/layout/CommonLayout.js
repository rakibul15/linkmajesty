import Sidebar from "./Sidebar";
import {Layout} from "antd";
import AppHeader from "./AppHeader";
import React from "react";
import {useAppContext} from "../../contex/app";

const {Content} = Layout;

export default function CommonLayout({children}) {
  const {logo, collapsed, setCollapsed} = useAppContext();

  return (
    <Layout style={{minHeight: "100vh", marginLeft: collapsed ? 80 : 200, transition: '.4s'}}>
      <Sidebar
        collapsed={collapsed}
        logo={logo}
        setCollapsed={setCollapsed}
      />
      <Layout className="site-layout">
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed}/>
        <Content
          style={{
            margin: "3em",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
