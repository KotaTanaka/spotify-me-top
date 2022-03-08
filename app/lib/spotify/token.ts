import type {
  IGetTokenRequestParam,
  IGetTokenResponse,
} from '~/interfaces/spotify';
import { isAxiosError, spotifyAccountsAxios } from '~/lib/axios';

export const getTokenByAuthorizationCode = async (code: string) =>
  getToken({
    code,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI ?? '',
    grant_type: 'authorization_code',
  });

export const getTokenByRefreshToken = async (refreshToken: string) =>
  getToken({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  });

export const getToken = async (
  params: IGetTokenRequestParam,
): Promise<IGetTokenResponse | null> => {
  const { code, redirect_uri, grant_type, refresh_token } = params;

  const data = new URLSearchParams();
  data.append('grant_type', grant_type);
  if (code) data.append('code', code);
  if (redirect_uri) data.append('redirect_uri', redirect_uri);
  if (refresh_token) data.append('refresh_token', refresh_token);

  const clientId = process.env.SPOTIFY_CLIENT_ID ?? '';
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET ?? '';
  const token =
    'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64');

  try {
    const response = await spotifyAccountsAxios.post<IGetTokenResponse>(
      '/api/token',
      data,
      {
        headers: {
          Authorization: token,
        },
      },
    );

    return response.data;
  } catch (e: any) {
    if (isAxiosError(e)) {
      console.error('[ERROR] POST /api/token:', e.message, e.response?.data);
      return null;
    } else {
      throw e;
    }
  }
};
