import { useLoaderData } from '@remix-run/react';

interface LoginLoader {
  authorizeUrl: string;
}

export const loader = (): LoginLoader => {
  return {
    authorizeUrl:
      'https://accounts.spotify.com/authorize?' +
      new URLSearchParams({
        response_type: 'code',
        client_id: process.env.SPOTIFY_CLIENT_ID ?? '',
        scope: 'user-top-read',
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI ?? '',
        state: 'state',
      }).toString(),
  };
};

const Login = () => {
  const data = useLoaderData<LoginLoader>();

  return (
    <div className="mt-16 text-center">
      <a href={data.authorizeUrl}>ログイン</a>
    </div>
  );
};

export default Login;
