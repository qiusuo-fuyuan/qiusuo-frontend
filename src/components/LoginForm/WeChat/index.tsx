import SocialLogin, { SocialLoginProps } from '@sdk/sociallogin/SocialLogin';
import wechat from '@sdk/sociallogin/wechat';
import React from 'react';
import { apiUrl } from '../../../constants';
import WeChatIcon from './wechat.png';

/*
WeChat Login Steps
(1)Get the code
(2)Use code to get access token
(3)From access token to get user information.
(4)After we have the user information, we should create user in the backend, by sending the user id, we could actually use the access token
as the token for the backend. we also send the login type to backend. When backend sees that it's wechat type. It verifies the following information.
It checks if we also have accessToken.

(1)On mobile systems, if we use wechat to login, there will be problems. Because mobile
*/
const WeChatButton: React.FC<SocialLoginProps> = (props) => {
  const onClickHandler = () => {
    wechat.authorize();
  };
  
  return (
    <button className="button--wechat" type="button" onClick={onClickHandler}>
      <img
        src={WeChatIcon}
        alt="wechat icon"
        className="icon--wechat"
      />
    </button>
  );
};

const client_id = process.env.GITHUB_API_CLIENT_ID;
const SociaLoginWeChat = SocialLogin(WeChatButton);
const wechatProps: SocialLoginProps = {
  appId: client_id,
  gateKeeper: apiUrl,
  autoLogin: false,
  autoCleanUri: false,
  getInstance: () => {
    return '';
  },
  onLoginFailure: () => {
    return '';
  },
  onLoginSuccess: () => {
    return '';
  },
  onLogoutFailure: () => {
    return '';
  },
  onLogoutSuccess: () => {
    return '';
  },
  provider: 'wechat',
  redirect: 'http://localhost:3000/login',
  scope: 'user',
};

function WeChatLogin() {
  return <SociaLoginWeChat {...wechatProps} />;
}

export default WeChatLogin;
