import { MyCommunities_myCommunities, MyCommunities_myCommunities_channels } from '@sdk/api/Community/gqlTypes/MyCommunities';
import React from 'react';


type ChannelMenuProps = {
  activeCommunity: MyCommunities_myCommunities;
  selectChannel: (channel: MyCommunities_myCommunities_channels) => void
};


/**
 * TODO: classname should be a composed classname
 */
export const ChannelMenu = (props: ChannelMenuProps) => {
  const { activeCommunity, selectChannel } = props;

  return (
    <div className="channels-menu">
      <button className="channels-menu__create-btn">添加频道
      </button>
      <div>
        {
          props.activeCommunity!=null && activeCommunity.channels.map((element, index) => {
            return (
              <div
                className={element.name} 
                role="button"
                key={element.id}
                tabIndex={index}
                onClick={() => selectChannel(element)}
              > 
                {element.name}
              </div>);
          })
        }
      </div>
    </div>);
};