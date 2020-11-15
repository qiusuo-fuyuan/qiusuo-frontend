import { ChannelDetail } from '@sdk/api/fragments/gqlTypes/ChannelDetail';
import React from 'react';


export const ChannelEntry: React.FC<ChannelDetail> = (prop: ChannelDetail) => {
  return (
    <div key={prop.id} className={prop.name} role="button" />
  );
};
