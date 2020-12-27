import { channelDetailFragment } from '@sdk/api/fragments/channel';
import gql from 'graphql-tag';



export const createChannelMutation = gql`
${channelDetailFragment}
mutation CreateChannelMutation($createChannelInput: CreateChannelInput!) {
   addChannel(createChannelInput: $createChannelInput) { 
     ...ChannelDetail
   }
}
`;
