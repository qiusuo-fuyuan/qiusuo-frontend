import { useUserDetails } from '@sdk/queries';
import React from 'react';
import { Link } from 'react-router-dom';


export const  Header:React.FC = () => {
  const { data: user } = useUserDetails();

  return (
    <ul className="header">
      <li>
        <Link to="/company">关于公司</Link>
      </li>
      <li>
        <Link to="/company">工作</Link>
      </li>
      <li className="login">
        <Link to="login">注册登陆</Link>
      </li>
      <li>
        <span><img alt="avatar" className="avartar-user" src={user.userDetails.avatarUrl} /></span>
      </li>
    </ul>
  );
};