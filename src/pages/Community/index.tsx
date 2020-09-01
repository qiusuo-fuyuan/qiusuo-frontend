import { useUserDetails } from '@sdk/queries';
import logo from 'Assets/logo.png';
import React from 'react';


export const CommunityPage = () => {
  const { data: user } = useUserDetails();

  return (
    <>
      <a href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <li>
        {!user ? '':
        <span><img alt="avatar" className="avartar-user" src={user.userDetails.avatarUrl} /></span>}
      </li>
    </>
  );
};