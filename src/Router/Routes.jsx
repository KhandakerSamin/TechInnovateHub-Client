import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Root from "../Root/Root";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoutes";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addProduct',
            element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
            path:'/cart',
            element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
            path:'/signIn',
            element:<SignIn></SignIn>
        },
        {
            path:'signUp',
            element:<SignUp></SignUp>
        }
      ]
    },
  ]);


  export default router ;