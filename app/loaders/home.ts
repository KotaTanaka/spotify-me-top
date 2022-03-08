import type { LoaderFunction } from 'remix';
import { redirect } from 'remix';

import { cookieSpotifyToken } from '~/cookies';
import {
  IGetUserTopItemsParam,
  ITopArtist,
  ITopTrack,
} from '~/interfaces/spotify';
import {
  getTokenByRefreshToken,
  getUserTopArtists,
  getUserTopTracks,
} from '~/lib/spotify';

export interface IHomeLoader {
  topArtists: ITopArtist[];
  topTracks: ITopTrack[];
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

  const queries = getQueriesFromURL(request.url);
  const topArtistsResponse = await getUserTopArtists(accessToken, queries);
  const topTracksResponse = await getUserTopTracks(accessToken, queries);

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

const getQueriesFromURL = (
  requestUrl: string,
): Partial<IGetUserTopItemsParam> => {
  const url = new URL(requestUrl);
  const queryTerm = url.searchParams.get('term');
  const queryNum = url.searchParams.get('num');
  const queries: Partial<IGetUserTopItemsParam> = {
    time_range: queryTerm ? convertTerm(queryTerm) : undefined,
    limit: queryNum && /^[0-9]+$/.test(queryNum) ? Number(queryNum) : undefined,
  };

  return queries;
};

const convertTerm = (term: string): IGetUserTopItemsParam['time_range'] => {
  switch (term) {
    case 'short':
    case 'medium':
    case 'long':
      return `${term}_term`;
    default:
      return 'short_term';
  }
};
