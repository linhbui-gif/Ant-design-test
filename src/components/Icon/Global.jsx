import React from 'react';

import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_153254_13093)">
        <path
          d="M12.35 11.5141C12.3531 11.5094 12.3578 11.5047 12.3609 11.5C13.3844 10.2828 14 8.71406 14 7C14 5.28594 13.3844 3.71719 12.3625 2.5C12.3594 2.49531 12.3547 2.49219 12.3516 2.4875C12.3344 2.46719 12.3187 2.44844 12.3016 2.42969C12.2953 2.42188 12.2891 2.41563 12.2828 2.40781L12.2188 2.33437L12.2172 2.33281C12.1938 2.30625 12.1687 2.27969 12.1453 2.25312L12.1438 2.25156C12.0938 2.19844 12.0437 2.14531 11.9922 2.09375L11.9906 2.09219L11.9156 2.01719L11.9109 2.0125C11.8875 1.98906 11.8641 1.96719 11.8406 1.94531C11.8328 1.9375 11.825 1.92969 11.8156 1.92188C11.8 1.90625 11.7844 1.89219 11.7688 1.87812C11.7641 1.87344 11.7578 1.86875 11.7531 1.8625C10.5063 0.70625 8.83594 0 7 0C5.16406 0 3.49375 0.70625 2.24531 1.8625C2.24062 1.86719 2.23437 1.87187 2.22969 1.87812C2.21406 1.89219 2.19844 1.90781 2.18281 1.92344C2.175 1.93125 2.16719 1.93906 2.15781 1.94688C2.13438 1.96875 2.11094 1.99219 2.0875 2.01406L2.08281 2.01875L2.00781 2.09375L2.00625 2.09531C1.95469 2.14688 1.90469 2.2 1.85469 2.25312L1.85313 2.25469C1.82813 2.28125 1.80469 2.30781 1.78125 2.33437L1.77969 2.33594C1.75781 2.35938 1.73594 2.38437 1.71563 2.40937C1.70938 2.41719 1.70313 2.42344 1.69688 2.43125C1.67969 2.45 1.66406 2.47031 1.64687 2.48906C1.64375 2.49375 1.63906 2.49688 1.63594 2.50156C0.615625 3.71719 0 5.28594 0 7C0 8.71406 0.615625 10.2828 1.6375 11.5C1.64063 11.5047 1.64531 11.5094 1.64844 11.5141L1.69688 11.5719C1.70313 11.5797 1.70938 11.5859 1.71563 11.5938L1.77969 11.6672C1.77969 11.6688 1.78125 11.6688 1.78125 11.6703C1.80469 11.6969 1.82813 11.7234 1.85313 11.7484L1.85469 11.75C1.90469 11.8031 1.95469 11.8562 2.00469 11.9078L2.00625 11.9094C2.03125 11.9344 2.05469 11.9594 2.07969 11.9828L2.08437 11.9875C2.13594 12.0391 2.18906 12.0891 2.24219 12.1375C3.49375 13.2937 5.16406 14 7 14C8.83594 14 10.5062 13.2937 11.7547 12.1375C11.8079 12.0887 11.86 12.0387 11.9109 11.9875L11.9156 11.9828C11.9406 11.9578 11.9656 11.9344 11.9891 11.9094L11.9906 11.9078C12.0422 11.8562 12.0922 11.8031 12.1406 11.75L12.1422 11.7484C12.1656 11.7219 12.1906 11.6969 12.2141 11.6703C12.2141 11.6688 12.2156 11.6688 12.2156 11.6672C12.2375 11.6438 12.2594 11.6188 12.2797 11.5938C12.2859 11.5859 12.2922 11.5797 12.2984 11.5719C12.3161 11.553 12.3333 11.5338 12.35 11.5141V11.5141ZM12.4141 9.28594C12.1984 9.79531 11.9141 10.2672 11.5672 10.6953C11.1765 10.3577 10.7494 10.0647 10.2937 9.82187C10.475 9.08906 10.5875 8.28438 10.6172 7.4375H12.8594C12.8125 8.07656 12.6625 8.69687 12.4141 9.28594ZM12.8594 6.5625H10.6172C10.5875 5.71562 10.475 4.91094 10.2937 4.17812C10.7516 3.93437 11.1781 3.64062 11.5672 3.30469C12.3212 4.23277 12.7722 5.3699 12.8594 6.5625V6.5625ZM9.28594 1.58594C9.90625 1.84844 10.4703 2.21094 10.9672 2.66719C10.6785 2.91296 10.3679 3.13159 10.0391 3.32031C9.79375 2.61719 9.47969 2.00625 9.11406 1.51719C9.17187 1.53906 9.22969 1.5625 9.28594 1.58594ZM7.87031 12.5328C7.72656 12.6453 7.58281 12.7312 7.4375 12.7891V9.89062C8.05749 9.93388 8.66717 10.0719 9.24531 10.3C9.11563 10.6844 8.96563 11.0391 8.79219 11.3594C8.52031 11.8656 8.20156 12.2703 7.87031 12.5328ZM8.79219 2.64062C8.96406 2.9625 9.11563 3.31719 9.24531 3.7C8.66717 3.92806 8.05749 4.06612 7.4375 4.10938V1.2125C7.58125 1.27031 7.72656 1.35469 7.87031 1.46875C8.20156 1.72969 8.52031 2.13437 8.79219 2.64062V2.64062ZM7.4375 9.01406V7.4375H9.74219C9.71719 8.12813 9.63125 8.79844 9.4875 9.43437L9.48281 9.45312C8.82708 9.20447 8.13751 9.05644 7.4375 9.01406V9.01406ZM7.4375 6.5625V4.98594C8.15312 4.94219 8.84063 4.79063 9.48281 4.54688L9.4875 4.56563C9.63125 5.20156 9.71719 5.87031 9.74219 6.5625H7.4375ZM6.5625 7.4375V9.01406C5.84688 9.05781 5.15938 9.20937 4.51719 9.45312L4.5125 9.43437C4.36875 8.79844 4.28281 8.12969 4.25781 7.4375H6.5625ZM4.25781 6.5625C4.28281 5.87187 4.36875 5.20156 4.5125 4.56563L4.51719 4.54688C5.15938 4.79063 5.84531 4.94219 6.5625 4.98594V6.5625H4.25781ZM6.5625 9.89062V12.7875C6.41875 12.7297 6.27344 12.6453 6.12969 12.5312C5.79844 12.2703 5.47813 11.8641 5.20625 11.3578C5.03438 11.0359 4.88281 10.6812 4.75313 10.2984C5.33438 10.0703 5.93906 9.93437 6.5625 9.89062ZM6.5625 4.10938C5.94251 4.06612 5.33283 3.92806 4.75469 3.7C4.88437 3.31562 5.03437 2.96094 5.20781 2.64062C5.47969 2.13437 5.79844 1.72812 6.13125 1.46719C6.275 1.35469 6.41875 1.26875 6.56406 1.21094V4.10938H6.5625ZM4.71406 1.58594C4.77188 1.5625 4.82813 1.53906 4.88594 1.51719C4.52031 2.00625 4.20625 2.61719 3.96094 3.32031C3.63281 3.13281 3.32188 2.91406 3.03281 2.66719C3.52969 2.21094 4.09375 1.84844 4.71406 1.58594V1.58594ZM1.58594 4.71406C1.80156 4.20469 2.08594 3.73281 2.43281 3.30469C2.82187 3.64062 3.24844 3.93437 3.70625 4.17812C3.525 4.91094 3.4125 5.71562 3.38281 6.5625H1.14062C1.1875 5.92344 1.3375 5.30313 1.58594 4.71406ZM1.14062 7.4375H3.38281C3.4125 8.28438 3.525 9.08906 3.70625 9.82187C3.25059 10.0647 2.82347 10.3577 2.43281 10.6953C1.6788 9.76723 1.22776 8.6301 1.14062 7.4375V7.4375ZM4.71406 12.4141C4.09375 12.1516 3.52969 11.7891 3.03281 11.3328C3.32188 11.0859 3.63281 10.8688 3.96094 10.6797C4.20625 11.3828 4.52031 11.9938 4.88594 12.4828C4.82813 12.4609 4.77031 12.4375 4.71406 12.4141ZM9.28594 12.4141C9.22812 12.4375 9.17187 12.4609 9.11406 12.4828C9.47969 11.9938 9.79375 11.3828 10.0391 10.6797C10.3672 10.8672 10.6781 11.0859 10.9672 11.3328C10.4731 11.7872 9.90432 12.1529 9.28594 12.4141V12.4141Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_153254_13093">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Svg;
