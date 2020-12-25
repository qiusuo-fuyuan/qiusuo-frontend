/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CommunityDetail
// ====================================================

export interface CommunityDetail_channels {
  __typename: "Channel";
  id: string;
  name: string;
}

export interface CommunityDetail {
  __typename: "Community";
  id: string;
  title: string;
  description: string | null;
  avatarUrl: string | null;
  tags: (string | null)[];
  channels: (CommunityDetail_channels | null)[];
}
