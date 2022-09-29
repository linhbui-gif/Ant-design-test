import React from 'react';
import { Switch as AntdSwitch } from 'antd';

import './Switch.scss';

const Switch = ({ value, onChange }) => {
  return (
    <div className="Switch">
      <AntdSwitch checked={value} onChange={onChange} />
    </div>
  );
};

export default Switch;
