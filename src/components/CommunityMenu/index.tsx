import { useMyCommunities } from '@sdk/api/Community/queries';
import { MyCommunities_myCommunities } from 'AppComponents/ChannelMenu/node_modules/@sdk/api/Community/gqlTypes/MyCommunities';
import { OverlayContext, OverlayTheme, OverlayType } from 'AppComponents/Overlay';
import React from 'react';
import './scss/index.scss';

/*
I need to call the backend to get a list of 
communities
*/

type CommunityMenuProps = {
  userId: string;
  selectCommunity: (community: MyCommunities_myCommunities) => void
};

export const CommunityMenu = (props: CommunityMenuProps) => {
  const { data: myCommunities } = useMyCommunities(props.userId);  
  return (
    <OverlayContext.Consumer>
      { overlayContext => (
        <div className="communities-menu">
          <div
            role="button"
            tabIndex={0}
            className="community-page__communities-menu__create-btn"
            onClick={() =>
                    overlayContext.show(
                      OverlayType.community,
                      OverlayTheme.modal
                    )}
          >添加社区
          </div>
          {
            // here, it's better to use make class name
            myCommunities!=null && myCommunities.myCommunities!= null && myCommunities.myCommunities.map((element, index) => {
              return <div key={element.id} className={element.title} role="button" tabIndex={index} onClick={() => props.selectCommunity(element)}>{element.title}</div>;
            })
          }
        </div>)}
    </OverlayContext.Consumer>
  );
};