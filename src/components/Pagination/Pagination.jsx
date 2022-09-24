import React from 'react';
import { Pagination as AntdPagination } from 'antd';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './Pagination.scss';

const Pagination = ({ ...rest }) => {
  const itemRender = (page, type, original) => {
    if (type === 'prev') {
      return (
        <div className="Pagination-prev">
          <Icon name={EIconName.ArrowLeft} color={EIconColor.WHITE} />
        </div>
      );
    }

    if (type === 'next') {
      return (
        <div className="Pagination-next">
          <Icon name={EIconName.ArrowRight} color={EIconColor.WHITE} />
        </div>
      );
    }

    return original;
  };

  return (
    <div className="Pagination">
      <AntdPagination {...rest} simple itemRender={itemRender} />
    </div>
  );
};

export default Pagination;
