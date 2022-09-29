import React from 'react';
import { Typography, Breadcrumb as AntdBreadcrumb } from 'antd';

import './Breadcrumb.scss';
import { navigate } from '@reach/router';
import classNames from 'classnames';

const { Title } = Typography;

const Breadcrumb = ({ data = [], title }) => {
  const handleClickItem = (dataMenu) => {
    if (dataMenu.link) navigate(dataMenu.link);
    dataMenu.onClick?.();
  };

  return (
    <div className="Breadcrumb">
      <AntdBreadcrumb>
        {data.map((item) => (
          <AntdBreadcrumb.Item
            className={classNames({ 'cursor-pointer': item.link })}
            onClick={() => handleClickItem(item)}
          >
            {item.title}
          </AntdBreadcrumb.Item>
        ))}
      </AntdBreadcrumb>

      {title && (
        <Title level={4} className="Breadcrumb-title">
          {title}
        </Title>
      )}
    </div>
  );
};

export default Breadcrumb;
