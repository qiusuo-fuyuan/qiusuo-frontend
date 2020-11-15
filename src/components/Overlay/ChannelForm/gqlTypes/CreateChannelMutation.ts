/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateChannelInput } from "./../../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateChannelMutation
// ====================================================

export interface CreateChannelMutation_addChannel_channels {
  __typename: "Channel";
  id: string;
  name: string;
  active: boolean;
}

export interface CreateChannelMutation_addChannel {
  __typename: "Community";
  id: string;
  title: string;
  description: string | null;
  avatarUrl: string | null;
  tags: (string | null)[];
  active: boolean;
  channels: (CreateChannelMutation_addChannel_channels | null)[];
}

export interface CreateChannelMutation {
  addChannel: CreateChannelMutation_addChannel;
}

export interface CreateChannelMutationVariables {
  createChannelInput: CreateChannelInput;
}
