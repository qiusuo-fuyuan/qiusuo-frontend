import { gql } from '@apollo/client';
import { MyCommunities } from './gqlTypes/MyCommunities';


export function useMyCommunities(): {data: MyCommunities, error:any, loading: boolean} {
  return null;
}

export const getMyCommunities = gql`
  query MyCommunities {
    myCommunities {
      title
      description  
      avatar
      tags
      channels {
        name
      }
    }
  }
`;
