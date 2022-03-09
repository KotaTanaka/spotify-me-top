import AppHeader from '~/components/partials/AppHeader';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <AppHeader />
      <div className="pt-14">{children}</div>
    </>
  );
};

export default Layout;
