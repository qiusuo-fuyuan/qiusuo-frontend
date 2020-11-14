import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { authLink } from '@sdk/api/auth';
import { OverlayProvider } from 'AppComponents/Overlay';
import { OverlayManager } from 'AppComponents/OverlayManager';
import { StompProvider } from 'AppComponents/Stomp/provider';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { apiUrl, stompUrl } from './constants';
import { StompConfig } from './lib';
import { CommunityPage } from './pages/Community';
import { GithubCb } from './pages/GithubCb';
import { HomePage } from './pages/Home';


// graphql setup
const httpLink = createHttpLink({
  uri: `${apiUrl}/graphql`,
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
  connectToDevTools: true
});


// stomp setup
const stompConfig: StompConfig = {
  brokerURL: `${stompUrl}`,
  connectHeaders: {
    login: 'user',
    passcode: 'password'
  },
  reconnectDelay: 5000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000
  /*
  debug(str) {
    console.log(str);
  },
  */
};

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <StompProvider config={stompConfig}>
          <OverlayProvider>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/ghcb">
                <GithubCb />
              </Route>
              <Route path="/me/">
                <CommunityPage />
              </Route>
            </Switch>
            <OverlayManager />
          </OverlayProvider>
        </StompProvider>
      </ApolloProvider>
    </Router>
  );
}

export default App;
