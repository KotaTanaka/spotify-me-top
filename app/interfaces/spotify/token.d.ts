export interface IGetTokenRequestParam {
  code?: string;
  redirect_uri?: string;
  grant_type: 'authorization_code' | 'refresh_token';
  refresh_token?: string;
}

export interface IGetTokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
}
