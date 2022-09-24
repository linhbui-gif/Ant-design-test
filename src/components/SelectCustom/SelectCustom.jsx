import React, { useState } from 'react';
import './SelectDropdownCustom.scss';
import Icon, { EIconName } from '@/components/Icon';

const SelectDropdownCustom = ({ data }) => {
  const [active, setActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(data?.[0]);
  const onShowDropdown = () => {
    setActive(!active);
  };
  const handlerClickOption = (e) => {
    const id = e.target.getAttribute('data-id');
    const optionSelected = data && data.find((item) => item.id === parseInt(id));
    setSelectedItem(optionSelected || data?.[0]);
    setActive(false);
  };
  return (
    <div className="select-dropdown">
      <div className="select-dropdown-name flex" onClick={onShowDropdown}>
        <div className={`dots ${selectedItem.name}`}></div> {selectedItem?.name}
        <Icon name={EIconName.AngleDown} />
      </div>
      <ul className={`select-dropdown-list ${active ? 'active' : ''}`}>
        {data &&
          data.map((item) => {
            return (
              <li className="select-dropdown-list-item flex" data-id={item.id} onClick={handlerClickOption}>
                <div className={`dots ${item.name === 'active' ? 'active' : 'Inactive'}`}></div> {item.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SelectDropdownCustom;
