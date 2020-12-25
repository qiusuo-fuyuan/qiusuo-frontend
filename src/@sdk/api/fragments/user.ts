import gql from 'graphql-tag';



export const userDetailFragment = gql`
fragment UserDetail on User {
  id
  name
  userId
  avatarUrl
}
`;