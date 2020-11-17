import { MyCommunities_myCommunities_channels } from '@sdk/api/Community/gqlTypes/MyCommunities';
import React from 'react';
import { ChannelType } from 'src/core/types/channel';

type ChannelContentProps = {
  activeChannel: MyCommunities_myCommunities_channels;
};

export const ChannelContent: React.FC<ChannelContentProps> = ({ activeChannel }) => {

  const channelContent = (channel: MyCommunities_myCommunities_channels) => {
    switch (channel.type) {
      case ChannelType.Chat:
        return <ChatRoom />;
    }
  };
  return (
    <div />
  );
}; 