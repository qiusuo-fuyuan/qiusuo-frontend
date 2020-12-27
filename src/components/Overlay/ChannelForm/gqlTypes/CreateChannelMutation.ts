/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateChannelInput } from "./../../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateChannelMutation
// ====================================================

export interface CreateChannelMutation_addChannel {
  __typename: "Channel";
  id: string;
  name: string;
}

export interface CreateChannelMutation {
  addChannel: CreateChannelMutation_addChannel;
}

export interface CreateChannelMutationVariables {
  createChannelInput: CreateChannelInput;
}
