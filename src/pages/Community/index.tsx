import { useUserDetails } from '@sdk/api/queries';
import { AdsBar } from 'AppComponents/AdsBar';
import { ChannelList } from 'AppComponents/ChannelList';
import { ChatBoard } from 'AppComponents/ChatBoard';
import { CommunityList } from 'AppComponents/CommunityList';
import { OverlayContext, OverlayTheme, OverlayType } from 'AppComponents/Overlay';
import { UserList } from 'AppComponents/UserList';
import logo from 'Assets/logo.png';
import React from 'react';
import './scss/index.scss';

export const CommunityPage = () => {
  const { data: user } = useUserDetails();


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
            <CommunityList />
          </div>
 
          <div className="community-page_channels">
            <button className="community-page__create-channel__btn">添加频道
            </button>
            <ChannelList />
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