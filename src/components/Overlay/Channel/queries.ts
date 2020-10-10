import gql from 'graphql-tag';



export const createChannelMutation = gql`
mutation CreateChannelMutation($communityId: ID!) {
   createChannel(communityId: $communityId) { 
     id
     name
     type
   }
}
`;
