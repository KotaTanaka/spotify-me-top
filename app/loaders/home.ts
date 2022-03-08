import type { LoaderFunction } from 'remix';
import { redirect } from 'remix';

import { cookieSpotifyToken } from '~/cookies';
import { getTokenByRefreshToken } from '~/lib/spotify';

export const loader: LoaderFunction = async ({ request }) => {
  const cookieHeader = request.headers.get('Cookie') ?? '';
  const { accessToken, refreshToken } =
    (await cookieSpotifyToken.parse(cookieHeader)) ?? {};

  if (!accessToken || !refreshToken) {
    throw redirect('/login', 302);
  }

  // TODO: 初期データ取得
  const isTokenExpired = true;

  if (isTokenExpired) {
    const response = await getTokenByRefreshToken(refreshToken);
    if (!response) {
      throw redirect('/login', 302);
    }
  }

  console.log('accessToken', accessToken);
  return {};
};
