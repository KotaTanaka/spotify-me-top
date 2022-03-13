import { useLoaderData } from 'remix';

import { ILoginLoader } from '~/loaders/login';

const Login = () => {
  const { authorizeUrl } = useLoaderData<ILoginLoader>();

  return (
    <div className="flex justify-center mt-16">
      <div className="shadow-xl w-104 daisy-card bg-neutral">
        <div className="text-center daisy-card-body">
          <p className="mb-6 leading-loose">
            あなたが Spotify で最も聴いている
            <br />
            曲とアーティストのランキングを閲覧できます
          </p>
          <div className="justify-center daisy-card-actions">
            <a
              className="daisy-btn daisy-btn-wide daisy-btn-primary"
              href={authorizeUrl}
            >
              Spotify アカウントでログイン
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
