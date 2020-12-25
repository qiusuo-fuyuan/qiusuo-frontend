/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Channels
// ====================================================

export interface Channels_channels {
  __typename: "Channel";
  id: string;
  name: string;
}

export interface Channels {
  __typename: "Community";
  channels: (Channels_channels | null)[];
}
