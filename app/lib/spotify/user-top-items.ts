import {
  IGetUserTopItemsParam,
  IGetUserTopItemsResponse,
} from '~/interfaces/spotify';
import { isAxiosError, spotifyApiAxios } from '~/lib/axios';

export const getUserTopArtists = async (
  accessToken: string,
  queries?: Partial<IGetUserTopItemsParam>,
) => getUserTopItems('artists', accessToken, queries);

export const getUserTopTracks = async (
  accessToken: string,
  queries?: Partial<IGetUserTopItemsParam>,
) => getUserTopItems('tracks', accessToken, queries);

/**
 * Get User's Top Items
 * @refs https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks
 */
export const getUserTopItems = async (
  type: 'artists' | 'tracks',
  accessToken: string,
  queries?: Partial<IGetUserTopItemsParam>,
) => {
  const path = `/v1/me/top/${type}`;
  const params: IGetUserTopItemsParam = {
    limit: queries?.limit ?? 10,
    offset: queries?.offset ?? 0,
    time_range: queries?.time_range ?? 'short_term',
  };

  try {
    const response = await spotifyApiAxios.get<IGetUserTopItemsResponse>(path, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params,
    });

    return response.data;
  } catch (e: any) {
    if (isAxiosError(e)) {
      console.error(`[ERROR] GET ${path}:`, e.message, e.response?.data);
      return null;
    } else {
      throw e;
    }
  }
};
