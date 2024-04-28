// user:ruhul121980@gmail.com pw:ruhul121980


import React from 'react';
import ReactDOM from 'react-dom'; 

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import NotFound from './components/NotFound';
import AllArt from './components/AllArt';
import AddCraft from './components/AddCraft';
import MyArt from './components/MyArt';
import AllArtDetails from './components/AllArtDetails';
import { getMultiFactorResolver } from 'firebase/auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addCraft',
        element:<PrivateRoute><AddCraft></AddCraft></PrivateRoute>
      },
      {
        path:'/myArt',
        element:<PrivateRoute><MyArt></MyArt></PrivateRoute>,

        loader:()=>fetch('http://localhost:5000/addCraft')
      },
      {
        path:'/allArt',
        element:<AllArt></AllArt>,
        loader:()=>fetch('http://localhost:5000/addCraft')
      },
      {
        path:'/allArtDetails/:id',
        element:<PrivateRoute><AllArtDetails></AllArtDetails></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/addCraft')


      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} /> 
     </AuthProvider>
  </React.StrictMode>
);
