/* eslint-disable @typescript-eslint/indent */
import { ApolloQueryResult, ObservableQuery, useApolloClient } from '@apollo/client';
import gql from 'graphql-tag';
import { isEqual } from 'lodash';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { UserDetails } from './gqlTypes/UserDetails';
import { useAuth } from './helper';


export function useUserDetails(): {data: UserDetails, error:any, loading: boolean} {
  const client = useApolloClient();
  const [result, setResult] = useState({
    data: null,
    error: null,
    loading: true,
  });
  const didMountRef = useRef(false);
  const prevDataRef = useRef(null);
  const prevUnsubRef = useRef(null);

  /* useAuth will register an auth event listener. This event will get 
  called when we login from the Github.This design is excellent. Previously 
  After getting the token. I don't know how to get the user information.The GetUserInfo
  is a normal graphql query which i can not put into the Login button.I could do the login
  in the Github button, and fetch the userinformation here. 
  */
  const { authenticated } = useAuth();
  const setData = useCallback(({ data, error, loading }) => {
    if (!isEqual(data, prevDataRef.current)) {
      prevDataRef.current = data;
      setResult({ data, loading: false, error: null });
    } else {
      /* What's the point of this.When current and results are the same
      then there should be no change
      */
      setResult((prev) => ({ ...prev, loading: false }));
    }
  }, []);

  /*
  memo in react will get called first before Fiber Commit, later
  it will get called when the dependency got changed.
  */
  const { unsubscribe } = useMemo(() => {
    if(authenticated) {
      const observable: ObservableQuery<
      UserDetails,
      { [key: string]: any }
    > = client.watchQuery({ query: getUserDetails, fetchPolicy: 'cache-first' });
      const subscription = observable.subscribe(
        (queryResult: ApolloQueryResult<UserDetails>) => {
          const { data, errors: apolloErrors } = queryResult;
          if (apolloErrors) {
            setData(null);
            /* How to handle errors for graphql. In frontend, the display depends on the
            data sent back from the server. If there is no data from the server, then
            error should be shown in the frontend.
            */
          } else {
            console.log(`get user detail returns ${ data.userDetails.name}`);
            setData({ data, loading: false, error: null });
          }
        }
      );
      return { unsubscribe: subscription.unsubscribe.bind(subscription) };
    } 
    return { unsubscribe: null };
  }, [authenticated]);

  useEffect(() => {
    /* Effects are only called when authenticated value is changed.Initially
    authenticated value is false. This effect will get called.And the effect return a callback(why)
    */
    if (prevUnsubRef.current) {
      prevUnsubRef.current();
    }
    prevUnsubRef.current = unsubscribe;
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [authenticated]);

  return result;
}

export type QueryShape = (...args: any) => any;

export const getUserDetails = gql`
  query UserDetails {
    userDetails {
      id
      name
      userId
      avatarUrl
    }
  }
`;
