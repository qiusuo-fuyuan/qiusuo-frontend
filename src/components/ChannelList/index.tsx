import { MyCommunities_myCommunities, MyCommunities_myCommunities_channels } from '@sdk/api/Community/gqlTypes/MyCommunities';
import React from 'react';


type ChannelListProps = {
  activeCommunity: MyCommunities_myCommunities;
  selectChannel: (channel: MyCommunities_myCommunities_channels) => void
};

export const ChannelList = (props: ChannelListProps) => {
  const { activeCommunity, selectChannel } = props;

  return (
    <div className="community-page_channels">
      <button className="community-page__create-channel__btn">添加频道
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