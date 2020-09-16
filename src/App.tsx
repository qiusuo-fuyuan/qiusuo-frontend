import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { authLink } from '@sdk/api/auth';
import { OverlayProvider } from 'AppComponents/Overlay';
import { OverlayManager } from 'AppComponents/OverlayManager';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { apiUrl } from './constants';
import { CommunityPage } from './pages/Community';
import { GithubCb } from './pages/GithubCb';
import { HomePage } from './pages/Home';


const httpLink = createHttpLink({
  uri: `${apiUrl}/graphql`,
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </Router>
  );
}

export default App;
