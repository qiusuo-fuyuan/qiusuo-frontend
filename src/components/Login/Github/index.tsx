import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { makeRandomString, toQuery } from '../../../core/tsUtils';
import GithubIcon from './GitHub-Mark-32px.png';

const { GITHUB_API_URL } = process.env;
const client_id = process.env.GITHUB_API_CLIENT_ID;

/*
Github Login Steps
(1)Get the code
(2)Use code to get access token
(3)From access token to get user information.
(4)After we have the user information, we should create user in the backend, by sending the user id, we could actually use the access token
as the token for the backend. we also send the login type to backend. When backend sees that it's github type. It verifies the following information.
It checks if we also have accessToken
*/
const GithubLogin: React.FC<RouteComponentProps<{}>> = (routerProps) => {
  const onClickHandler = () => {
    const query = toQuery({
      client_id,
      state: makeRandomString(20),
      scope: 'user,repo'
    });
    window.location.href = `${GITHUB_API_URL}?${query}`;
  };

  useEffect(() => {
    console.log('parameter is ', routerProps.location.search);

    const searchParams = new URLSearchParams(routerProps.location.search);
    const code = searchParams.get('code');
    console.log(code);
    if (code && code.length !== 0) {
      console.log('code is ', code);
    }
  });

  return (
    <button className="github__button" type="button" onClick={() => onClickHandler()}>
      <img src={GithubIcon} alt="github icon" className="github__button__icon" />
      Sign In With Github
    </button>
  );
};

export default withRouter(GithubLogin);
