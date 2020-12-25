/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetActiveChannelMutation
// ====================================================

export interface SetActiveChannelMutation_setActiveChannel {
  __typename: "Channel";
  id: string;
  name: string;
}

export interface SetActiveChannelMutation {
  setActiveChannel: SetActiveChannelMutation_setActiveChannel;
}

export interface SetActiveChannelMutationVariables {
  channelId: string;
}
