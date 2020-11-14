/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateChannelInput, ChannelType } from "./../../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateChannelMutation
// ====================================================

export interface CreateChannelMutation_createChannel {
  __typename: "Channel";
  id: string;
  name: string;
  type: ChannelType;
}

export interface CreateChannelMutation {
  createChannel: CreateChannelMutation_createChannel;
}

export interface CreateChannelMutationVariables {
  createChannelInput: CreateChannelInput;
}
