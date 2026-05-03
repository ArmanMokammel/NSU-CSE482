import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ContactUs from "../pages/ContactUs/ContactUs";
import Services from "../pages/Services/Services";
import AddProduct from "../pages/AddProduct/AddProduct";
import ProductList from "../pages/ProductList/ProductList";
import EditProduct from "../pages/EditProduct/EditProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/products",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/product-list",
        element: <ProductList></ProductList>,
      },
      {
        path: "/edit-product/:id",
        element: <EditProduct></EditProduct>,
      },
    ],
  },
]);

export default router;
