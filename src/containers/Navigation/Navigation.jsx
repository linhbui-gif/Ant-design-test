import React from 'react';

import classNames from 'classnames';

import { dataNavigation } from './Navigation.data';
import './Navigation.scss';

const Navigation = ({ visible, onClickOverlay }) => {
  return (
    <>
      <div className={classNames('Navigation-overlay', { active: visible })} onClick={onClickOverlay} />
      <div className={classNames('Navigation', { active: visible })}>
        <div className="container">
          <div className="Navigation-wrapper flex items-center">
            {dataNavigation.map((item) => (
              <a
                className={classNames('Navigation-item bebas-neue-font', { button: item.isButton })}
                key={item.key}
                href={item.link}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
