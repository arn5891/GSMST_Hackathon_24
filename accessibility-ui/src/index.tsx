import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import AccessibilityFixPage from './routes/AccessibilityFixPage';
import SearchPage from './routes/SearchPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage></SearchPage>,
  },
  {
    path: "/fix-issues",
    element: <AccessibilityFixPage></AccessibilityFixPage>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
