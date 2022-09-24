import React from 'react';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { Tooltip } from 'antd';
import { navigate } from '@reach/router';
import { Paths } from '@/pages/routers';

import './CharacterCard.scss';

const CharacterCard = ({ id, image, diamond, ticket, global, shield, coin, latestCoin, type, isOwn }) => {
  const handleNavigateDetail = () => {
    navigate(isOwn ? Paths.MyNftDetail(id) : Paths.NftDetail(id));
  };

  return (
    <div className="CharacterCard" onClick={handleNavigateDetail}>
      <div className="CharacterCard-id">AIR FORCE 068 #{id}</div>
      <div className="CharacterCard-image">
        <img src={image} alt="" />
        <div className={classNames('CharacterCard-type', type)}>{type}</div>
      </div>
      <div className="CharacterCard-info flex flex-wrap">
        <div className="CharacterCard-info-item flex">
          <Tooltip title="Character talent">
            <div className="flex items-center">
              <Icon name={EIconName.Diamond} />
              {diamond}
            </div>
          </Tooltip>
        </div>
        <div className="CharacterCard-info-item flex">
          <Tooltip title="Invited characters">
            <div className="flex items-center">
              <Icon name={EIconName.Ticket} />
              {ticket}
            </div>
          </Tooltip>
        </div>
        <div className="CharacterCard-info-item flex">
          <Tooltip title={`Level ${shield}`}>
            <div className="flex items-center">
              <Icon name={EIconName.Shield} />
              {shield}
            </div>
          </Tooltip>
        </div>
        <div className="CharacterCard-info-item flex">
          <Tooltip title={`${global} day${global > 1 ? 's' : ''} left to earn`}>
            <div className="flex items-center">
              <Icon name={EIconName.Global} />
              {global}
            </div>
          </Tooltip>
        </div>
      </div>

      <div className="CharacterCard-coin flex items-center">
        <Icon name={EIconName.Coin} color={EIconColor.MARINER} />
        {coin}
      </div>
      <div className="CharacterCard-lastest-coin flex items-center">Last 24h rewards up to {latestCoin}</div>
    </div>
  );
};

export default CharacterCard;
