import {Layout, Menu} from 'antd';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';

const {Sider} = Layout;

export default function Sidebar({collapsed, logo}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const selectedMenu = useSelector((state) => state.menu.selectedMenu);
  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        transition: '.4s',
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
    >
      <div className="logo">
        <img
          src={logo}
          alt="Logo"
          style={
            collapsed
              ? {marginTop: '15px', width: '100%', transition: '.4s'}
              : {marginTop: '15px', width: '80%', transition: '.4s'}
          }
        />
      </div>

      <Menu
        style={{marginTop: '40px'}}
        onClick={(value) => {
          const {key} = value;
          // dispatch(setMenu({key}));
          navigate(`/${key}`);
        }}
        // selectedKeys={selectedMenu}
        theme="light"
        mode="inline"
        items={[
          {
            key: '',
            icon: <i className="fas fa-home"/>,
            label: 'Home',
          },
          {
            key: 'Earnings',
            icon: <i className="fas fa-dollar-sign"/>,
            label: 'Earnings',
          }
        ]}
      />
    </Sider>
  );
}
