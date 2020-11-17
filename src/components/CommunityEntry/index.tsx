import { CommunityDetail } from '@sdk/api/fragments/gqlTypes/CommunityDetail';
import React from 'react';


export const CommunityEntry: React.FC<CommunityDetail> = (prop: CommunityDetail) => {
  return (
    <div key={prop.id} className={prop.title} role="button" />
  );
};