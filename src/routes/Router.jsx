import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Lab2 from '../pages/Lab2';
import Details from '../pages/Details';
import NewCharacter from '../pages/NewCharacter';
import EditCharacter from '../pages/EditCharacter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Lab2 />,
  },
  {
    path: '/Lab2',
    element: <Lab2 />,
  },
  {
    path: '/newcharacter',
    element: <NewCharacter />,
  },
  {
    path: '/:id',
    element: <Details />,
  },
  {
    path: '/Lab2/:id',
    element: <Details />,
  },
  {
    path: '/edit/:id',
    element: <EditCharacter />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
