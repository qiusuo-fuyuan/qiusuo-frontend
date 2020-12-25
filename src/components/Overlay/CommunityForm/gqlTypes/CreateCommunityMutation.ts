/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateCommunityInput } from "./../../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateCommunityMutation
// ====================================================

export interface CreateCommunityMutation_createCommunity_channels {
  __typename: "Channel";
  id: string;
  name: string;
}

export interface CreateCommunityMutation_createCommunity {
  __typename: "Community";
  id: string;
  title: string;
  description: string | null;
  avatarUrl: string | null;
  tags: (string | null)[];
  channels: (CreateCommunityMutation_createCommunity_channels | null)[];
}

export interface CreateCommunityMutation {
  createCommunity: CreateCommunityMutation_createCommunity;
}

export interface CreateCommunityMutationVariables {
  createCommunityInput: CreateCommunityInput;
}
