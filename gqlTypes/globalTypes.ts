/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ChannelType {
  CHAT = "CHAT",
  LIVE_STREAMING = "LIVE_STREAMING",
  QA = "QA",
}

export interface CreateChannelInput {
  communityId: string;
  name: string;
  channelType: ChannelType;
}

export interface CreateCommunityInput {
  ownerId: string;
  title: string;
  description: string;
  tags: (string | null)[];
  avatarUrl?: string | null;
}

export interface JwtRequest {
  username: string;
  password?: string | null;
  phoneNumber?: string | null;
  verificationCode?: string | null;
  usertype: string;
  userId: string;
  avatarUrl: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
