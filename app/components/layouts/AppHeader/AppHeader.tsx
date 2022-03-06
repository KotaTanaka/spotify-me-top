import type { LinksFunction } from 'remix';

import styles from './AppHeader.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

const AppHeader: React.FC = () => {
  return <header className="header">Spotify Me Top</header>;
};

export default AppHeader;
