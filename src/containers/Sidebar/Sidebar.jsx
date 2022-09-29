import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { navigate } from '@reach/router';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { dataSidebar } from './Sidebar.data';
import './Sidebar.scss';
import classNames from 'classnames';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  const [visibleSidebar, setVisibleSidebar] = useState(true);

  const handleClickMenuItem = (data) => {
    if (data?.link && (!data?.children || data?.children.length === 0)) {
      navigate(data.link);
    }
  };

  return (
    <Sider className="Sidebar" theme="light" width={208} collapsible collapsed={!visibleSidebar}>
      <Menu theme="light" mode="inline">
        {dataSidebar.map((item) => (
          <SubMenu
            title={item.title}
            icon={item.icon}
            disabled={item.disabled}
            onTitleClick={() => handleClickMenuItem(item)}
          >
            {item.children.map((subItem) => (
              <Menu.Item onClick={() => handleClickMenuItem(subItem)}>{subItem.title}</Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>

      <div
        className={classNames('Sidebar-toggle flex', { 'justify-center': !visibleSidebar })}
        onClick={() => setVisibleSidebar(!visibleSidebar)}
      >
        {visibleSidebar ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
      </div>
    </Sider>
  );
};

export default Sidebar;
