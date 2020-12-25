/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetActiveCommunityMutation
// ====================================================

export interface SetActiveCommunityMutation_setActiveCommunity_channels {
  __typename: "Channel";
  id: string;
  name: string;
}

export interface SetActiveCommunityMutation_setActiveCommunity {
  __typename: "Community";
  id: string;
  title: string;
  description: string | null;
  avatarUrl: string | null;
  tags: (string | null)[];
  channels: (SetActiveCommunityMutation_setActiveCommunity_channels | null)[];
}

export interface SetActiveCommunityMutation {
  setActiveCommunity: SetActiveCommunityMutation_setActiveCommunity;
}

export interface SetActiveCommunityMutationVariables {
  communityId: string;
}
