import { communityDetailFragment } from '@sdk/api/fragments/community';
import gql from 'graphql-tag';


export const createCommunityMutation = gql`
${communityDetailFragment}
mutation CreateCommunityMutation($createCommunityInput: CreateCommunityInput!) {
   createCommunity(createCommunityInput: $createCommunityInput) { 
     ...CommunityDetail
   }
  }
`;