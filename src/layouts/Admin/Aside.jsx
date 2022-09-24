import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const Sidebar = ({ openKeys, onOpenChange, handleLogout }) => {
  return (
    <div className="Sidebar">
      <Menu theme="light" mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Dashboard
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Account">
          <Menu.Item key="3">Create User</Menu.Item>
          <Menu.Item key="4">User Management</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="7">Team 2</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<MailOutlined />} title="Mail">
          <Menu.Item key="8">Team 1</Menu.Item>
          <Menu.Item key="9">Team 2</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Sidebar;
