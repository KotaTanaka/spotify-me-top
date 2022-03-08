import { useLoaderData } from 'remix';

import { ILoginLoader } from '~/loaders/login';

const Login = () => {
  const { authorizeUrl } = useLoaderData<ILoginLoader>();

  return (
    <div className="mt-16 text-center">
      <a href={authorizeUrl}>ログイン</a>
    </div>
  );
};

export default Login;
