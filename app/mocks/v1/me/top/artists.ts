import type { MockMethods } from 'axios-mock-server';

import type {
  IGetUserTopArtistsResponse,
  ITopArtist,
} from '~/interfaces/spotify';
import { getRandomArtistName } from '~/mocks/sample-data';

const baseData: IGetUserTopArtistsResponse = {
  items: [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/{artist_id}',
      },
      followers: {
        href: null,
        total: 100,
      },
      genres: ['j-pop', 'j-rock'],
      href: 'https://api.spotify.com/v1/artists/{artist_id}',
      id: 'artist_id',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/{image_id}',
          width: 640,
        },
      ],
      name: 'name',
      popularity: 50,
      type: 'artist',
      uri: 'spotify:artist:{artist_id}',
    },
  ],
  total: 50,
  limit: 1,
  offset: 0,
  previous: null,
  href: 'https://api.spotify.com/v1/me/top/artists',
  next: 'https://api.spotify.com/v1/me/top/artists',
};

const mock: MockMethods = {
  get: ({ params }) => {
    const { limit } = params;
    if (!limit) {
      return [200, baseData];
    }

    const items: ITopArtist[] = [...Array(limit)].map((_, i) => {
      const artistName = getRandomArtistName();
      return {
        ...baseData.items[0],
        id: `${i}`,
        name: artistName,
        images: [
          {
            ...baseData.items[0].images[0],
            url: `http://placehold.jp/3d4070/ffffff/150x150.png?text=${artistName}`,
          },
        ],
      };
    });

    return [200, { ...baseData, items }];
  },
};

export default mock;
