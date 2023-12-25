import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Outlet,
  RouterProvider,
  Link,
  Router,
  Route,
  RootRoute,
} from '@tanstack/react-router';
import './index.css';
import UserForm from './components/UserForm';
import Users from './components/Users';
import { fetchUsers } from './lib/fetchUsers';

const rootRoute = new RootRoute({
  component: () => (
    <>
      <div className='p-2 flex gap-2'>
        <Link to='/' className='[&.active]:font-bold border p-2'>
          Home
        </Link>{' '}
        <Link to='/user-form' className='[&.active]:font-bold border p-2'>
          React Hook Form test
        </Link>
        <Link to='/users' className='[&.active]:font-bold border p-2'>
          Get Users (via Tanstack Router)
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return (
      <div className='flext flex-col  gap-4 p-4'>
        <h3>Welcome Home!</h3>
        <h3>Small test for React hook form and Tanstack router</h3>
      </div>
    );
  },
});

const userFormRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/user-form',
  component: function UserLogin() {
    return <UserForm />;
  },
});

export const usersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: function UsersRoute() {
    return <Users />;
  },
  loader: ({ abortController }) => fetchUsers(abortController),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  userFormRoute,
  usersRoute,
]);

const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
