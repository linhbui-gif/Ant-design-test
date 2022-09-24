import React from 'react';
import { Button as AntdButton, Select as AntdSelect } from 'antd';
const { Option } = AntdSelect;
export const SelectOption = ({ arrayOption, icon, ...rest }) => {
  return (
    <div className="Select">
      <AntdSelect defaultValue={arrayOption[1].name} style={{ width: ' 100%' }} {...rest}>
        {arrayOption.length > 0 && arrayOption.map((e) => <Option value={e.id}>{e.name}</Option>)}
      </AntdSelect>
    </div>
  );
};

export default SelectOption;
