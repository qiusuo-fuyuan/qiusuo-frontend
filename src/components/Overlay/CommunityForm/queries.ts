import gql from 'graphql-tag';


export const createCommunityMutation = gql`
mutation CreateCommunityMutation($createCommunityInput: CreateCommunityInput!) {
   createCommunity(createCommunityInput: $createCommunityInput) { 
     id
     title
     description
     avatarUrl
   }
}
`;