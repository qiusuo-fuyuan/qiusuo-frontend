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
        <div className="page_community">
          <div className="panel_left_community">
            <a href="/">
              <img className="logo" src={logo} alt="logo" />
            </a>
            <button
              className="panel_community_add_btn"
              onClick={() =>
                overlayContext.show(
                  OverlayType.community,
                  OverlayTheme.modal
                )}
            >添加社区
            </button>
            <CommunityList />
          </div>
 
          <div className="panel_left_channel">
            <button className="panel_channel__button">添加频道
            </button>
            <ChannelList />
          </div>
 
          <div className="panel_right">
            <div className="panel_right_header">
              <AdsBar />
              <li>
                {!user ? '':
                <span><img alt="avatar" className="avartar-user" src={user.userDetails.avatarUrl} /></span>}
              </li>
            </div>
            <div className="panel_right_content">
              <ChatBoard />
              <UserList />
            </div>
          </div>
        </div>
      )}
    </OverlayContext.Consumer>
  );
};