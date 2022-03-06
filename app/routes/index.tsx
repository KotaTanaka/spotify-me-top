import type { LinksFunction } from 'remix';

import Home, { links as homeLinks } from '~/containers/Home/Home';

export const links: LinksFunction = () => {
  return [...homeLinks()];
};

export default function Index() {
  return <Home />;
}
