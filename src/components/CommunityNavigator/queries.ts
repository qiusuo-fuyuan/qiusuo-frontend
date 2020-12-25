import { communityDetailFragment } from '@sdk/api/fragments/community';
import gql from 'graphql-tag';


export const setActiveCommunityMutation = gql`
  ${communityDetailFragment}
  mutation SetActiveCommunityMutation($communityId: ID!) {
    setActiveCommunity(communityId: $communityId) {
      ...CommunityDetail
    }
  }
`;