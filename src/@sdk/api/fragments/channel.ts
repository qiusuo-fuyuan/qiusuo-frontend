import { gql } from '@apollo/client';


export const channelDetailFragment = gql`
    fragment ChannelDetail on Channel {
      id
      name
    }
`;

export const channelsFragment = gql`
   ${channelDetailFragment}
  fragment Channels on Community {
    channels {
      ...ChannelDetail
    }
  }
`;