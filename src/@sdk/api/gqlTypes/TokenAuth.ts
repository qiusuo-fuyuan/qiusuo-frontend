/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { JwtRequest } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: TokenAuth
// ====================================================

export interface TokenAuth_createJwtToken {
  __typename: "JwtResponse";
  jwtToken: string;
}

export interface TokenAuth {
  createJwtToken: TokenAuth_createJwtToken;
}

export interface TokenAuthVariables {
  authInput: JwtRequest;
}
