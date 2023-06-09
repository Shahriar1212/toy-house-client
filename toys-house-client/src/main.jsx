import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import ToyDetails from './Components/ToyDetails/ToyDetails.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import AllToys from './Components/AllToys/AllToys';
import MyToys from './Components/MyToys/MyToys';
import AddToy from './Components/AddToy/AddToy';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoutes from './routes/PrivateRoutes';
import UpdateMyToy from './Components/MyToys/UpdateMyToy';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://toy-house-server-cyan.vercel.app/toys')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/toys/:id",
        element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://toy-house-server-cyan.vercel.app/toys/${params.id}`)
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch('https://toy-house-server-cyan.vercel.app/toys')
      },
      {
        path: "/mytoys",
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
      },
      {
        path: "/addtoy",
        element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/updatetoy/:id",
        element: <UpdateMyToy></UpdateMyToy>,
        loader: ({params}) => fetch(`https://toy-house-server-cyan.vercel.app/toys/${params.id}`)
      }
    ]
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </React.StrictMode>,
  </div>
)
