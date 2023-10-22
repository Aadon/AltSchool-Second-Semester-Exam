import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
 import TestError from './pages/TestError'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Repos from './pages/Repos.jsx';
import RepoDetails from './pages/RepoDetails.jsx';
import RootLayout from './layouts/RootLayout'
import ErrorBoundary from './components/ErrorBoundary';
import Fallback from './components/FallBack';
import NotFound from './components/NotFound';

const routes = [
  {
    element: <ErrorBoundary />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            path: '/',
            element: <Home />
          },
          {
            path: 'testerror',
            element: <TestError />
          },
          {
            path: 'repos',
            children: [
              {
                index: true,
                element: <Repos />,
              },
          
              {
                path: ':repoId',
                element: <RepoDetails />
              },
            ]
          },
        ]
      },
      {
        element: <NotFound />,
        path: "*",
      },
    ]
  }
  
];

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Fallback />}>
   <RouterProvider router={router} />
   </Suspense>
  </React.StrictMode>,
)
