import { useUserDetails } from '@sdk/api/queries';
import { ChannelMenu } from 'AppComponents/ChannelMenu';
import { CommunityMenu } from 'AppComponents/CommunityMenu';
import { MyCommunities_myCommunities, MyCommunities_myCommunities_channels } from 'AppComponents/CommunityMenu/node_modules/@sdk/api/Community/gqlTypes/MyCommunities';
import { CommunityPageHeader } from 'AppComponents/Header/CommunityPage';
import { OnlineUsersList } from 'AppComponents/OnlineUsersList';
import logo from 'Assets/logo.png';
import React, { useState } from 'react';
import './scss/index.scss';


export const CommunityPage = () => {
  const { data: user } = useUserDetails();
  const [activeCommunity, setActiveCommunity] = useState<MyCommunities_myCommunities>(null);
  const [activeChannel, setActiveChannel] = useState<MyCommunities_myCommunities_channels>(null);

  const selectCommunity = (community: MyCommunities_myCommunities) => {
    setActiveCommunity(community);
  };

  const selectChannel = (channel: MyCommunities_myCommunities_channels) => {
    setActiveChannel(channel);
    console.log(`channel ${channel.name  } is selected`);
  };

  return (
    <div className="community-page">
      <div className="community-page--logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      {
          user!= null?  <CommunityMenu userId={user.userDetails.userId} selectCommunity={selectCommunity} />:''
      }
      <ChannelMenu selectChannel={selectChannel} activeCommunity={activeCommunity} />
      <CommunityPageHeader />
      <OnlineUsersList />
    </div>
  );
};