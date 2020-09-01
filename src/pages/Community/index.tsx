import { useUserDetails } from '@sdk/queries';
import { AdsBar } from 'AppComponents/AdsBar';
import { ChannelList } from 'AppComponents/ChannelList';
import { ChatBoard } from 'AppComponents/ChatBoard';
import { CommunityList } from 'AppComponents/CommunityList';
import { UserList } from 'AppComponents/UserList';
import logo from 'Assets/logo.png';
import React from 'react';


export const CommunityPage = () => {
  const { data: user } = useUserDetails();

  return (
    <div className="page_community">
      <div className="panel_left_community">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <button>添加订阅</button>
        <CommunityList />
      </div>

      <div className="panel_left_channel">
        <button>添加订阅</button>
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
  );
};