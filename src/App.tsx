import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { Footer } from 'AppComponents/Footer';
import { Header } from 'AppComponents/Header';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { apiUrl } from './constants';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Login';

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: new HttpLink({
    uri: `${apiUrl}/graphql`
  }),
  cache
});

cache.writeData({
  data: {}
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
        </Switch>
        <Footer />
      </ApolloProvider>
    </Router>
  );
}

export default App;
