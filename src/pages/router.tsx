import { createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import News from './News';
import Profile from './Profile';
import { Layout } from '../templates';
import Home from './Home';
const token = localStorage.getItem('authToken');
export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: token ? <Profile /> : <Home /> },
        {
          path: 'news',
          element: <News />,
        },
        {
          path: 'profile',
          element: <Profile />,
        },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);
