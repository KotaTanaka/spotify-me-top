export interface IGetUserTopItemsParam {
  limit?: number;
  offset?: number;
  time_range?: 'long_term' | 'medium_term' | 'short_term';
}

export interface IGetUserTopItemsResponse {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
}

export interface IGetUserTopItemsResponse {
  items: ITopArtist[] | ITopTrack[];
  total: number;
  limit: number;
  offset: number;
  href: string;
  previous: string | null;
  next: string | null;
}

export interface IGetUserTopArtistsResponse extends IGetUserTopItemsResponse {
  items: ITopArtist[];
}

export interface IGetUserTopTracksResponse extends IGetUserTopItemsResponse {
  items: ITopTrack[];
}

export interface ITopArtist {
  external_urls: {
    [key: string]: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface ITopTrack {
  album: {
    album_type: string;
    artists: {
      external_urls: {
        [key: string]: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }[];
    available_markets: string[];
    external_urls: {
      [key: string]: string;
    };
    href: string;
    id: string;
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  };
  artists: {
    external_urls: {
      [key: string]: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    [key: string]: string;
  };
  external_urls: {
    [key: string]: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  ur: string;
}
