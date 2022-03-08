import AppHeader from '~/components/partials/AppHeader';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};

export default Layout;
