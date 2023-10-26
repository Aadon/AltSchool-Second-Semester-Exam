import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Repos from "./pages/Repos.jsx";
import RepoDetails from "./pages/RepoDetails.jsx";
import RootLayout from "./layouts/RootLayout";
import { ErrorBoundary } from "./components/ErrorBoundary";

import NotFound from "./components/NotFound";
import TestError from "./pages/TestError";

const routes = [
  {
    element: <ErrorBoundary />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "testerror",
            element: <TestError />,
          },
          {
            path: "repos",
            children: [
              {
                index: true,
                element: <Repos />,
              },
              {
                path: ":repoId",
                element: <RepoDetails />,
              },
            ],
          },
        ],
      },
      {
        element: <NotFound />,
        path: "*",
      },
    ],
  },
];
const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
