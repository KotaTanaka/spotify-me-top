import type { LinksFunction } from 'remix';

import styles from './Home.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Home = () => {
  return <div className="container">ホーム画面</div>;
};

export default Home;
