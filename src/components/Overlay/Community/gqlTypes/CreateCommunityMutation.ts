/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateCommunityInput } from "./../../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateCommunityMutation
// ====================================================

export interface CreateCommunityMutation_createCommunity {
  __typename: "Community";
  id: string;
  title: string;
  description: string | null;
  avatarUrl: string | null;
}

export interface CreateCommunityMutation {
  createCommunity: CreateCommunityMutation_createCommunity;
}

export interface CreateCommunityMutationVariables {
  createCommunity: CreateCommunityInput;
}
