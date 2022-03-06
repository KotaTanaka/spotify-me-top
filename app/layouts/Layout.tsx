import type { LinksFunction } from 'remix';

import AppHeader, {
  links as appHeaderLinks,
} from '~/components/layouts/AppHeader/AppHeader';

export const links: LinksFunction = () => {
  return [...appHeaderLinks()];
};

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};

export default Layout;
