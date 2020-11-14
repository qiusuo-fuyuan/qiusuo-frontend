import { MyCommunities_myCommunities } from '@sdk/api/Community/gqlTypes/MyCommunities';
import { useMyCommunities } from '@sdk/api/Community/queries';
import { OverlayContext, OverlayTheme, OverlayType } from 'AppComponents/Overlay';
import React from 'react';
import './scss/index.scss';

/*
I need to call the backend to get a list of 
communities
*/

type CommunityNavigatorProps = {
  userId: string;
  selectCommunity: (community: MyCommunities_myCommunities) => void
};

export const CommunityNavigator: React.FC<CommunityNavigatorProps> = (props: CommunityNavigatorProps) => {
  const { data: myCommunities } = useMyCommunities(props.userId);  
  return (
    <OverlayContext.Consumer>
      { overlayContext => (
        <div className="communities-menu">
          <div
            role="button"
            tabIndex={0}
            className="communities-menu__create-btn"
            onClick={() =>
                    overlayContext.show(
                      OverlayType.create_community,
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