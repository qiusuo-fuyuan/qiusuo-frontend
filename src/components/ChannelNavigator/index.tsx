import { MyCommunities_myCommunities, MyCommunities_myCommunities_channels } from '@sdk/api/Community/gqlTypes/MyCommunities';
import { OverlayContext, OverlayTheme, OverlayType } from 'AppComponents/Overlay';
import React from 'react';


type ChannelNavigatorProps = {
  activeCommunity: MyCommunities_myCommunities;
  selectChannel: (channel: MyCommunities_myCommunities_channels) => void
};

/**
 * TODO: classname should be a composed classname
 */
export const ChannelNavigator: React.FC<ChannelNavigatorProps> = (props: ChannelNavigatorProps) => {
  const { activeCommunity, selectChannel } = props;

  return (
    <OverlayContext.Consumer>
      { overlayContext => (
        <div className="channels-navigator">
          <button
            className="community-page__create-channel__btn"
            onClick={() =>
                  overlayContext.show(
                    OverlayType.create_channel,
                    OverlayTheme.modal,
                    { data: { community: activeCommunity } }
                  )}
          >添加频道
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
        </div>
      )}
    </OverlayContext.Consumer> );
};