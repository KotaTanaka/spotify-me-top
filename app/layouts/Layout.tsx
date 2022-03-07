import AppHeader from '~/components/layouts/AppHeader';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};

export default Layout;
