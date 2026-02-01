import { createHashRouter, RouterProvider } from 'react-router';
import Home from '@renderer/pages/home';

export default function Router() {
  const router = createHashRouter([
    {
      path: '/',
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
}