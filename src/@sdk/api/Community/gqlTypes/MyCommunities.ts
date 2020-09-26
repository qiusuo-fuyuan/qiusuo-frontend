/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MyCommunities
// ====================================================

export interface MyCommunities_myCommunities_channels {
  __typename: "Channel";
  id: string;
  name: string;
}

export interface MyCommunities_myCommunities {
  __typename: "Community";
  id: string;
  title: string;
  description: string | null;
  avatarUrl: string | null;
  tags: (string | null)[];
  channels: (MyCommunities_myCommunities_channels | null)[];
}

export interface MyCommunities {
  myCommunities: (MyCommunities_myCommunities | null)[];
}

export interface MyCommunitiesVariables {
  userId: string;
}
