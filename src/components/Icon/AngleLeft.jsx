import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.04254 12.8676C0.499074 11.6665 0.499073 9.33347 2.04254 8.13239L11.4076 0.844805C13.3781 -0.688549 16.25 0.715631 16.25 3.21241V17.7876C16.25 20.2844 13.3781 21.6886 11.4076 20.1552L2.04254 12.8676Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
