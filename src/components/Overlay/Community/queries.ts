import gql from 'graphql-tag';


export const createCommunityMutation = gql`
mutation CreateCommunityMutation($createCommunity: CreateCommunityInput!) {
   createCommunity(createCommunityInput: $createCommunity) { 
     id
     title
     description
     avatarUrl
   }
}
`;

