import { gql } from '@apollo/client';
import { channelsFragment } from './channel';

export const communityDetailFragment = gql`
    ${channelsFragment}
    fragment CommunityDetail on Community {
      id
      title
      description  
      avatarUrl
      tags
      ...Channels
    }
`;