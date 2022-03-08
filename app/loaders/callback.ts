import type { LoaderFunction } from 'remix';
import { redirect } from 'remix';

import { cookieSpotifyToken } from '~/cookies';
import { getTokenByAuthorizationCode } from '~/lib/spotify';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  if (!code) {
    throw redirect('/login', 302);
  }

  const response = await getTokenByAuthorizationCode(code);
  if (!response) {
    throw redirect('/login', 302);
  }

  throw redirect('/', {
    headers: {
      'Set-Cookie': await cookieSpotifyToken.serialize({
        accessToken: response.access_token,
        refreshToken: response.refresh_token,
      }),
    },
  });
};
