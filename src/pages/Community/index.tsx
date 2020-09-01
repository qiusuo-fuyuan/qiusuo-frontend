import { useUserDetails } from '@sdk/queries';
import logo from 'Assets/logo.png';
import React from 'react';


export const CommunityPage = () => {
  const { data: user } = useUserDetails();

  return (
    <>
      <div className="panel_left">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <button>添加订阅</button>
        <CommunityList />
      </div>

      <li>
        {!user ? '':
        <span><img alt="avatar" className="avartar-user" src={user.userDetails.avatarUrl} /></span>}
      </li>
    </>
  );
};