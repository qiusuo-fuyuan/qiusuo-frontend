import { useUserDetails } from '@sdk/api/queries';
import { RecommendationSlot } from 'AppComponents/FlowingAds';
import React from 'react';


export const CommunityPageHeader = () => {
  const { data: user } = useUserDetails();

  return (
    <div className="community-header">
      <RecommendationSlot />
      <div className="community-header--searchbox" />
      <div className="community-header--notifications" />
      <div>
        {!user ? '':
        <span><img alt="avatar" className="avartar-user" src={user.userDetails.avatarUrl} /></span>}
      </div>

    </div>
  );
}; 