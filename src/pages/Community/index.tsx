import { MyCommunities_myCommunities, MyCommunities_myCommunities_channels } from '@sdk/api/Community/gqlTypes/MyCommunities';
import { useUserDetails } from '@sdk/api/queries';
import { AdsBar } from 'AppComponents/AdsBar';
import { ChatBoard } from 'AppComponents/ChatBoard';
import { MyCommunities } from 'AppComponents/MyCommunities';
import { OverlayContext, OverlayTheme, OverlayType } from 'AppComponents/Overlay';
import { UserList } from 'AppComponents/UserList';
import logo from 'Assets/logo.png';
import React, { useState } from 'react';
import './scss/index.scss';


export const CommunityPage = () => {
  const { data: user } = useUserDetails();
  const [activeCommunity, setActiveCommunity] = useState<MyCommunities_myCommunities>(null);
  
  const selectCommunity = (community: MyCommunities_myCommunities) => {
    setActiveCommunity(community);
  };

  const selectChannel = (channel: MyCommunities_myCommunities_channels) => {
    console.log(`channel ${channel.name  } is selected`);
  };

  return (
    <OverlayContext.Consumer>
      { overlayContext => (
        <div className="community-page">
          <div className="community-page__communities">
            <a href="/">
              <img className="logo" src={logo} alt="logo" />
            </a>
            <button
              className="community-page__create-community__btn"
              onClick={() =>
                overlayContext.show(
                  OverlayType.community,
                  OverlayTheme.modal
                )}
            >添加社区
            </button>
            {
              user!= null?  <MyCommunities userId={user.userDetails.userId} selectCommunity={selectCommunity} />:''
            }
          </div>
 
          <div className="community-page_channels">
            <button className="community-page__create-channel__btn">添加频道
            </button>
            <div>
              {
                activeCommunity!=null && activeCommunity.channels.map((element, index) => {
                  return <div
                    className={element.name} 
                    role="button"
                    key={element.id}
                    tabIndex={index}
                    onClick={() => selectChannel(element)}
                  >{element.name}
                  </div>;
                })
              }
            </div>
          </div>
          <div className="community-page__right">
            <div className="community-page__right--header">
              <AdsBar />
              <li>
                {!user ? '':
                <span><img alt="avatar" className="avartar-user" src={user.userDetails.avatarUrl} /></span>}
              </li>
            </div>
            <div className="community-page__right--content">
              <ChatBoard />
              <UserList />
            </div>
          </div>
        </div>
      )}
    </OverlayContext.Consumer>
  );
};