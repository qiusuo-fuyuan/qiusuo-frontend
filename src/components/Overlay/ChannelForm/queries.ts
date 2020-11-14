import gql from 'graphql-tag';



export const createChannelMutation = gql`
mutation CreateChannelMutation($createChannelInput: CreateChannelInput!) {
   createChannel(createChannelInput: $createChannelInput) { 
     id
     name
     type
   }
}
`;
