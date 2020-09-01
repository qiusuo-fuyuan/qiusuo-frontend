import { useSignIn } from '@sdk/mutations';
import { useUserDetails } from '@sdk/queries';
import github from '@sdk/sociallogin/github';
import { getQueryStringValue } from '@sdk/sociallogin/utils';
import Loader from 'AppComponents/Loader';
import { TokenAuthVariables } from 'Generated/TokenAuth';
import React, { useMemo, useRef } from 'react';
import { Redirect } from 'react-router';
import { apiUrl } from '../../constants';

const client_id = process.env.GITHUB_API_CLIENT_ID;
const redirect = 'http://localhost:3000/ghcb';
const scope = 'user';
const gateKeeper = apiUrl;

export const GithubCb = () => {
  github.init({ appId: client_id, gateKeeper, redirect, scope });

  const githubAuthorizationCode = useRef(null);
  const [signIn] = useSignIn();// signIn will create the jwtToken
  const { data: user } = useUserDetails();

  const getGithubUserInfo = useMemo(() => {
    (async () => {
      const code = getQueryStringValue('code');
      if (code != null && code.length > 0 && githubAuthorizationCode.current == null) {
        githubAuthorizationCode.current = code;
        await github.getAccessToken();
        const userInfo = await github.getUserInfo();
        /* Here i need to make a mutation query to send the request to backend.
        The mutation query is createJwtToken
        */
        const tokenAuthParams: TokenAuthVariables =
        {
          authInput:
          {
            username: userInfo.profile.name,
            usertype: 'GITHUB', userId: userInfo.profile.id,
            avatarUrl: userInfo.profile.profilePicURL
          }
        };
        signIn(tokenAuthParams);
      }
      // can we change the page history to home page.
    })();
  }, [githubAuthorizationCode.current]);
  
  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <Loader full={true} />
  );
};