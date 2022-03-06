import type { MetaFunction } from 'remix';
import type { LinksFunction } from 'remix';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';

import globalStyles from '~/styles/global.css';

import Layout, { links as layoutLinks } from './layouts/Layout';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: globalStyles }, ...layoutLinks()];
};

export const meta: MetaFunction = () => {
  return { title: 'Spotify Me Top' };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
