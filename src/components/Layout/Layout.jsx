import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { Navigation, LayoutContainer } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutContainer>
      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Navigation>

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </LayoutContainer>
  );
};

export default Layout;
