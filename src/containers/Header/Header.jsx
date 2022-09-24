import React from 'react';

import Logo from '@/assets/images/logo.svg';
import Carousels from '@/components/Carousels';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import { dataCountryFlags } from './Header.data';
import './Header.scss';

const Header = ({ onClickMenu }) => {
  return (
    <div className="Header">
      <div className="container">
        <div className="Header-wrapper flex items-center justify-between">
          <div className="Header-logo bebas-neue-font">
            <img src={Logo} alt="" />
            FIREFOXINU
          </div>
          <div className="Header-flags">
            <Carousels
              dots={false}
              arrows
              slidesToShow={6}
              slidesToScroll={1}
              infinite
              autoplay={false}
              responsive={[
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 3,
                  },
                },
              ]}
            >
              {[...dataCountryFlags, ...dataCountryFlags].map((item) => (
                <div key={item.key} className="Header-flags-item">
                  <img src={item.flag} alt="" />
                </div>
              ))}
            </Carousels>
          </div>

          <div className="Header-menu" onClick={onClickMenu}>
            <Icon name={EIconName.Menu} color={EIconColor.AZURE_RADIANCE} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
