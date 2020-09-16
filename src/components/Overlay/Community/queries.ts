import gql from 'graphql-tag';


export const CreateCommunityMutation = gql`
mutation CreateCommunityMutation($createCommunity: CreateCommunityInput!) {
   createCommunity(createCommunityInput: $createCommunity) { 
     title
     description
     avatar
   }
}
`;

