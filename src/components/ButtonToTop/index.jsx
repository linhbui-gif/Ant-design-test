import React from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './ButtonToTop.scss';

const ButtonToTop = () => {
  return (
    <a href="#" className="ButtonToTop flex items-center justify-center">
      <Icon name={EIconName.ButtonToTop} color={EIconColor.WHITE} />
    </a>
  );
};

export default ButtonToTop;
