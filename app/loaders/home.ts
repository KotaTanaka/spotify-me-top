import type { LoaderFunction } from 'remix';
import { redirect } from 'remix';

import { cookieSpotifyToken } from '~/cookies';
import {
  getTokenByRefreshToken,
  getUserTopArtists,
  getUserTopTracks,
} from '~/lib/spotify';

export interface IHomeLoader {
  topArtists: any[];
  topTracks: any[];
}

export const loader: LoaderFunction = async ({
  request,
}): Promise<IHomeLoader> => {
  const cookieHeader = request.headers.get('Cookie') ?? '';
  const { accessToken, refreshToken } =
    (await cookieSpotifyToken.parse(cookieHeader)) ?? {};

  if (!accessToken || !refreshToken) {
    throw redirect('/login', 302);
  }

  const topArtistsResponse = await getUserTopArtists(accessToken);
  const topTracksResponse = await getUserTopTracks(accessToken);

  if (!topArtistsResponse || !topTracksResponse) {
    const response = await getTokenByRefreshToken(refreshToken);
    if (response) {
      throw redirect('/', {
        headers: {
          'Set-Cookie': await cookieSpotifyToken.serialize({
            accessToken: response.access_token,
            refreshToken: response.refresh_token,
          }),
        },
      });
    } else {
      throw redirect('/login', 302);
    }
  }

  return {
    topArtists: topArtistsResponse.items,
    topTracks: topTracksResponse.items,
  };
};
