import { communityDetailFragment } from '@sdk/api/fragments/community';
import gql from 'graphql-tag';



export const createChannelMutation = gql`
${communityDetailFragment}
mutation CreateChannelMutation($createChannelInput: CreateChannelInput!) {
   addChannel(createChannelInput: $createChannelInput) { 
     ...CommunityDetail
   }
}
`;
