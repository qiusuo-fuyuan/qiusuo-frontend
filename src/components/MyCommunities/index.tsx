import { useMyCommunities } from '@sdk/api/Community/queries';
import React from 'react';
import './scss/index.scss';

/*
I need to call the backend to get a list of 
communities
*/
export const MyCommunities = (props: { userId: string }) => {
  const { data: myCommunities } = useMyCommunities(props.userId);  
  return (
    <div className="my-communities">
      {
        // here, it's better to use make class name
        myCommunities!=null && myCommunities.myCommunities!= null && myCommunities.myCommunities.map(element => {
          return <div key={element.id} className={element.title}>{element.title}</div>;
        })
      }
    </div>
  );
};