

import { channelDetailFragment } from '@sdk/api/fragments/channel';
import gql from 'graphql-tag';


export const setActiveChannelMutation = gql`
  ${channelDetailFragment}
  mutation SetActiveChannelMutation($channelId: ID!) {
    setActiveChannel(channelId: $channelId) {
      ...ChannelDetail
    }
  }
`;