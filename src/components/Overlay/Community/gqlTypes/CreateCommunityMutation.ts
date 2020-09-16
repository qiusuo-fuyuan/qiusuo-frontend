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
  title: string;
  description: string;
  avatar: string;
}

export interface CreateCommunityMutation {
  createCommunity: CreateCommunityMutation_createCommunity;
}

export interface CreateCommunityMutationVariables {
  createCommunity: CreateCommunityInput;
}
