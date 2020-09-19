/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MyCommunities
// ====================================================

export interface MyCommunities_myCommunities_channels {
  __typename: "Channel";
  name: string;
}

export interface MyCommunities_myCommunities {
  __typename: "Community";
  title: string;
  description: string;
  avatar: string;
  tags: (string | null)[];
  channels: (MyCommunities_myCommunities_channels | null)[];
}

export interface MyCommunities {
  myCommunities: (MyCommunities_myCommunities | null)[];
}
