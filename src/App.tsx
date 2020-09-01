import { ApolloProvider } from '@apollo/react-hooks';
import { authLink } from '@sdk/auth';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { Footer } from 'AppComponents/Footer';
import { Header } from 'AppComponents/Header';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { apiUrl } from './constants';
import { GithubCb } from './pages/GithubCb';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Login';



const httpLink = createHttpLink({
  uri: `${apiUrl}/graphql`,
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

cache.writeData({
  data: {},
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/ghcb">
            <GithubCb />
          </Route>
        </Switch>
        <Footer />
      </ApolloProvider>
    </Router>
  );
}

export default App;
