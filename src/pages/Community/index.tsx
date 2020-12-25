import { useMyCommunities } from '@sdk/api/Community/queries';
import { useUserDetails } from '@sdk/api/queries';
import { AdsBar } from 'AppComponents/AdsBar';
import { ChannelNavigator } from 'AppComponents/ChannelNavigator';
import { ChatBoard } from 'AppComponents/ChatBoard';
import { CommunityNavigator } from 'AppComponents/CommunityNavigator';
import { UserList } from 'AppComponents/UserList';
import logo from 'Assets/logo.png';
import React from 'react';
import './scss/index.scss';


export const CommunityPage = () => {
  const { data: user } = useUserDetails();
  const { data: myCommunities } =  useMyCommunities();  

  return (
    <div className="community-page">
      <div className="community-page__communities">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a> 
        <CommunityNavigator myCommunities={myCommunities} activeCommunity={!myCommunities? null : myCommunities.activeCommunity}  />
      </div>
      <ChannelNavigator
        activeCommunity={!myCommunities? null : myCommunities.activeCommunity} 
        activeChannel={!myCommunities? null : myCommunities.activeChannel}
      />
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
  );
};