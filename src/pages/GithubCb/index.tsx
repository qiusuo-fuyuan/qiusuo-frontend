import { removeAuthToken } from '@sdk/api/auth';
import { TokenAuthVariables } from '@sdk/api/gqlTypes/TokenAuth';
import { useSignIn } from '@sdk/api/mutations';
import { useUserDetails } from '@sdk/api/queries';
import github from '@sdk/sociallogin/github';
import { getQueryStringValue } from '@sdk/sociallogin/utils';
import Loader from 'AppComponents/Loader';
import React, { useMemo, useRef } from 'react';
import { Redirect } from 'react-router';
import { apiUrl } from '../../constants';

const client_id = process.env.GITHUB_API_CLIENT_ID;
const redirect = 'http://localhost:3000/ghcb';
const scope = 'user';
const gateKeeper = apiUrl;

/**
 * The logic in this area has problem
 * 
 * 
 * 
 */
export const GithubCb = () => {
  github.init({ appId: client_id, gateKeeper, redirect, scope });

  const githubAuthorizationCode = useRef(null);
  const [signIn] = useSignIn();// signIn will create the jwtToken

  /* 
  Two useMemos are used here. They are both asynchrnous call. They will be fired
  at the same time. However, the correct logic is 
  (1)first remmove the existing token in the localStorage 
  (2)redo the login using github access token

  I think in this page, the user should login again. The token in the localStorage shoud
  be removed first. Then useUserDetails will first check the token, it does not
  exist, so it will not fire the UserDetails request.
  */
  const getGithubUserInfo = useMemo(() => {
    (async () => {
      const code = getQueryStringValue('code');

      // starting from here, i could use a demo data for local and production
      if (code != null && code.length > 0 && githubAuthorizationCode.current == null) {
        githubAuthorizationCode.current = code;
        removeAuthToken(); // we have to remove the token in the localStorage first

        // TODO error should be handled here for getAccessToken error
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
  
  const { data: user } = useUserDetails();
  
  if (user) {
    return <Redirect to="/me" />;
  }

  return (
    <Loader full={true} />
  );
};