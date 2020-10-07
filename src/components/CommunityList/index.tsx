import { MyCommunities_myCommunities } from '@sdk/api/Community/gqlTypes/MyCommunities';
import { useMyCommunities } from '@sdk/api/Community/queries';
import React from 'react';
import './scss/index.scss';

/*
I need to call the backend to get a list of 
communities
*/

type CommunityListProps = {
  userId: string;
  selectCommunity: (community: MyCommunities_myCommunities) => void
};

export const CommunityList = (props: CommunityListProps) => {
  const { data: myCommunities } = useMyCommunities(props.userId);  
  return (
    <div className="my-communities">
      {
        // here, it's better to use make class name
        myCommunities!=null && myCommunities.myCommunities!= null && myCommunities.myCommunities.map((element, index) => {
          return <div key={element.id} className={element.title} role="button" tabIndex={index} onClick={() => props.selectCommunity(element)}>{element.title}</div>;
        })
      }
    </div>
  );
};