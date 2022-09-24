import React, { useState, useEffect } from 'react';
import { Layout, Button, Avatar } from 'antd';
import { UserOutlined, BarsOutlined, SearchOutlined, BellOutlined } from '@ant-design/icons';
import Sidebar from './Aside';
import { showNotification } from '@/utils/functions';
import { navigate } from '@reach/router';
import { LayoutPaths, Paths } from '@/pages/routers';
import AuthHelpers from '@/services/auth-helpers';
import LogoImage from '@/assets/images/Logo.png';
import './Admin.scss';

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const { Header, Footer, Sider, Content } = Layout;
const Admin = ({ children }) => {
  const isMd = window.innerWidth > 767 ? true : false;
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const [visible, setVisible] = useState(isMd);
  const [openRightsItem, setOpenRightsItem] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 767) {
        setVisible(true);
        setOpenRightsItem(false);
      } else {
        setVisible(false);
      }
    }
    window.addEventListener('resize', handleResize);
  });

  const showDrawer = () => {
    setVisible(!visible);
    setOpenRightsItem(!openRightsItem);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const styleNone = {
    display: openRightsItem ? 'none' : 'flex',
  };
  const handleLogout = () => {
    handleLogoutSuccess();
  };
  const handleLogoutSuccess = () => {
    AuthHelpers.clearTokens();
    showNotification('success', 'Đăng xuất thành công');
    navigate(LayoutPaths.Auth + Paths.Login);
  };
  return (
    <div className="Admin">
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="site-header layout__site-header">
          <div className="header_logo">
            <img src={LogoImage} />
          </div>
          <div className="header__item" style={styleNone}>
            {/* <div className="header__item-search">
              <button className="search__btn">
                <SearchOutlined />
              </button>
              <input type="text" className="search__input" placeholder="Type to Search..." />
            </div> */}
            <div className="header__item-bell">
              <BellOutlined />
            </div>
            <div className="btn-avatar header__item-avatar">
              <Avatar size="large" icon={<UserOutlined />} />
            </div>
          </div>
        </Header>
        <Layout>
          {visible && (
            <div className="menu">
              <Sider
                className="site-layout-background"
                collapsible
                collapsed={collapsed}
                onCollapse={() => toggleCollapsed()}
              >
                <Sidebar openKeys={openKeys} onOpenChange={onOpenChange} handleLogout={handleLogout} />
              </Sider>
            </div>
          )}
          <Content style={{ margin: '0 16px' }}>{children}</Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
};

export default Admin;
