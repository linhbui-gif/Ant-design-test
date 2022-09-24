import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.9575 12.8676C16.5009 11.6665 16.5009 9.33347 14.9575 8.13239L5.5924 0.844805C3.62193 -0.688549 0.75 0.715631 0.75 3.21241V17.7876C0.75 20.2844 3.62193 21.6886 5.5924 20.1552L14.9575 12.8676Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
