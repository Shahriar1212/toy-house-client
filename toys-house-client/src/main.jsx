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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/toys')
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
        element: <ToyDetails></ToyDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/toys')
      },
      {
        path: "/mytoys",
        element: <MyToys></MyToys>
      },
      {
        path: "/addtoy",
        element: <AddToy></AddToy>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
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
