import { ApolloQueryResult, gql, ObservableQuery, useApolloClient } from '@apollo/client';
import { isEqual } from 'lodash';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { communityDetailFragment } from '../fragments/community';
import { MyCommunities, MyCommunitiesVariables } from './gqlTypes/MyCommunities';


/**
 * for my communitites, current user id should be passed
 * for getting my communitites data
 */
export function useMyCommunities(uid: string): {data: MyCommunities, error:any, loading: boolean} {
  const client = useApolloClient();
  const [result, setResult] = useState({
    data: null,
    error: null,
    loading: true,
  });
  const didMountRef = useRef(false);
  const prevDataRef = useRef(null);
  const prevUnsubRef = useRef(null);

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

  const { unsubscribe } = useMemo(() => {
      const observable: ObservableQuery<
      MyCommunities,
      { [key: string]: any }
    > = client.watchQuery<MyCommunities, MyCommunitiesVariables>({ query: getMyCommunities, variables: { userId: uid } });
      const subscription = observable.subscribe(
        (queryResult: ApolloQueryResult<MyCommunities>) => {
          const { data, errors: apolloErrors } = queryResult;
          if (apolloErrors) {
            setData(null);
            /* How to handle errors for graphql. In frontend, the display depends on the
            data sent back from the server. If there is no data from the server, then
            error should be shown in the frontend.
            */
          } else {
            console.log(`get user communities returns ${ data.myCommunities.length} entries`);
            setData({ data, loading: false, error: null });
          }
        }
      );
      return { unsubscribe: subscription.unsubscribe.bind(subscription) };
  }, []);

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
  }, []);

  return result;
}


export const getMyCommunities = gql`
  ${communityDetailFragment}
  query MyCommunities($userId: ID!) {
    myCommunities(userId: $userId) {
      ...CommunityDetail
    }
  }
`;
