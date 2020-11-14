import { MyCommunities_myCommunities, MyCommunities_myCommunities_channels } from '@sdk/api/Community/gqlTypes/MyCommunities';
import { useUserDetails } from '@sdk/api/queries';
import { AdsBar } from 'AppComponents/AdsBar';
import { ChannelNavigator } from 'AppComponents/ChannelNavigator';
import { ChatBoard } from 'AppComponents/ChatBoard';
import { CommunityNavigator } from 'AppComponents/CommunityNavigator';
import { UserList } from 'AppComponents/UserList';
import logo from 'Assets/logo.png';
import React, { useState } from 'react';
import './scss/index.scss';


export const CommunityPage = () => {
  const { data: user } = useUserDetails();
  const [activeCommunity, setActiveCommunity] = useState<MyCommunities_myCommunities>(null);
  const [activeChannel, setActiveChannel] = useState<MyCommunities_myCommunities_channels>(null);

  const selectCommunity = (community: MyCommunities_myCommunities) => {
    setActiveCommunity(community);
    console.log(`channel ${community.title  } is selected`);
  };

  const selectChannel = (channel: MyCommunities_myCommunities_channels) => {
    setActiveChannel(channel);
    console.log(`channel ${channel.name  } is selected`);
  };

  return (

    <div className="community-page">
      <div className="community-page__communities">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        { 
          !user? '': <CommunityNavigator userId={user.userDetails.userId} selectCommunity={selectCommunity} />
        }
      </div>
      <ChannelNavigator selectChannel={selectChannel} activeCommunity={activeCommunity} />
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