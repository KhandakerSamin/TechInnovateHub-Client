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
import BrandDetails from "../Pages/BrandDetails";
import ProductDetails from "../Pages/ProductDetails";
import UpdateProduct from "../Pages/UpdateProduct";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('https://tech-innovate-hub-server.vercel.app/brands')
        },
        {
            path:'/addProduct',
            element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
            path:'/cart',
            element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
            loader: () => fetch('https://tech-innovate-hub-server.vercel.app/cartProducts')
        },
        {
            path:'/signIn',
            element:<SignIn></SignIn>
        },
        {
            path:'signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'/brandDetails/:brand',
            element:<BrandDetails></BrandDetails>,
            loader: ({ params }) => fetch(`https://tech-innovate-hub-server.vercel.app/products/${params.brand}`)
        },
        {
          path:'/productDetails/:id',
          element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
          loader: () => fetch('https://tech-innovate-hub-server.vercel.app/products')
        },
        {
          path:'/updateProduct/:id',
          element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
          loader:({params}) => fetch(`https://tech-innovate-hub-server.vercel.app/updateProduct/${params.id}`)
        }
      ]
    },
  ]);


  export default router ;