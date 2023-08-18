import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import AppLayout from './pages/appLayout/AppLayout';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Account from './pages/Account';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';

import './styles/global.css';
import './styles/_variables.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <PageNotFound />,
      children: [
        { path: '/', element: <Navigate replace to="/dashboard" /> },
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/bookings', element: <Bookings /> },
        { path: '/cabins', element: <Cabins /> },
        { path: '/users', element: <Users /> },
        { path: '/settings', element: <Settings /> },
        { path: '/account', element: <Account /> },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
};

export default App;
