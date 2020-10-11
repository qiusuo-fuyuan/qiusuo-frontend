import gql from 'graphql-tag';



export const createChannelMutation = gql`
mutation CreateChannelMutation($createChannelInput: CreateCommunityInput!) {
   createChannel(createChannelInput: $createChannelInput) { 
     id
     name
     type
   }
}
`;
