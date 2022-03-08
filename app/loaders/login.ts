import type { LoaderFunction } from 'remix';

import { SPOTIFY_ACCOUNTS_URL } from '~/constants/url';

export interface ILoginLoader {
  authorizeUrl: string;
}

export const loader: LoaderFunction = (): ILoginLoader => {
  return {
    authorizeUrl:
      `${SPOTIFY_ACCOUNTS_URL}/authorize?` +
      new URLSearchParams({
        response_type: 'code',
        client_id: process.env.SPOTIFY_CLIENT_ID ?? '',
        scope: 'user-top-read',
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI ?? '',
        state: 'state',
      }).toString(),
  };
};
