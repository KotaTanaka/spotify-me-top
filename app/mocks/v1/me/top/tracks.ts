import type { MockMethods } from 'axios-mock-server';

import type {
  IGetUserTopTracksResponse,
  ITopTrack,
} from '~/interfaces/spotify';
import {
  getRandomAlbumName,
  getRandomArtistName,
  getRandomTrackName,
} from '~/mocks/sample-data';

const baseData: IGetUserTopTracksResponse = {
  items: [
    {
      album: {
        album_type: 'SINGLE',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/{artist_id}',
            },
            href: 'https://api.spotify.com/v1/artists/{artist_id}',
            id: 'artist_id',
            name: 'artist_name',
            type: 'artist',
            uri: 'spotify:artist:{artist_id}',
          },
        ],
        available_markets: ['JP'],
        external_urls: {
          spotify: 'https://open.spotify.com/album/{album_id}',
        },
        href: 'https://api.spotify.com/v1/albums/{album_id}',
        id: 'album_id',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/{image_id}',
            width: 640,
          },
        ],
        name: 'album_name',
        release_date: '2022-01-01',
        release_date_precision: 'day',
        total_tracks: 1,
        type: 'album',
        uri: 'spotify:album:{album_id}',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/{artist_id}',
          },
          href: 'https://api.spotify.com/v1/artists/{artist_id}',
          id: 'artist_id',
          name: 'artist_name',
          type: 'artist',
          uri: 'spotify:artist:{artist_id}',
        },
      ],
      available_markets: ['JP'],
      disc_number: 1,
      duration_ms: 200000,
      explicit: false,
      external_ids: {
        isrc: 'isrc',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/{track_id}',
      },
      href: 'https://api.spotify.com/v1/tracks/{track_id}',
      id: 'track_id',
      is_local: false,
      name: 'track_name',
      popularity: 78,
      preview_url: 'https://p.scdn.co/mp3-preview/{preview_id}?cid={cid}',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:{track_id}',
    },
  ],
  total: 50,
  limit: 10,
  offset: 0,
  previous: null,
  href: 'https://api.spotify.com/v1/me/top/tracks',
  next: 'https://api.spotify.com/v1/me/top/tracks',
};

const mock: MockMethods = {
  get: ({ params }) => {
    const { limit } = params;
    if (!limit) {
      return [200, baseData];
    }

    const items: ITopTrack[] = [...Array(limit)].map((_, i) => {
      const trackName = getRandomTrackName();
      const artistName = getRandomArtistName();
      const albumName = getRandomAlbumName();
      return {
        ...baseData.items[0],
        id: `${i}`,
        name: trackName,
        album: {
          ...baseData.items[0].album,
          name: albumName,
          images: [
            {
              ...baseData.items[0].album.images[0],
              url: `http://placehold.jp/3d4070/ffffff/150x150.png?text=${albumName}`,
            },
          ],
        },
        artists: {
          ...baseData.items[0].artists,
          name: artistName,
        },
      };
    });

    return [200, { ...baseData, items }];
  },
};

export default mock;
