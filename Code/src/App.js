import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Cart from "./components/Cart/Cart.js";
import ShimmerUI from "./components/Shimmers/ShimmerUI.js";
import Footer from "./components/Footer.js";
import OrderPlaced from "./components/Cart/OrderPlaced.js";
import Login from "./components/Login.js";
import OrderHistory from "./components/OrderHistory.js";
import Signup from "./components/Signup.js";

const Help = lazy(() => import("./components/Help")); 

// const AppLayout = () => {
//   return (
//     <Provider store={appStore}>
//       <div className="app">
//         <Header />
//         <Outlet />
//         <Footer />
//       </div>
//     </Provider>
//   );
// };


const AppLayoutWithFooter = () => {

  const location = useLocation();

  return (
    <Provider store={appStore}>
      <div className="app">
        {location.pathname !== "/" &&  location.pathname !== "/signup" && <Header />}
        <Outlet/> {/* Pass username as prop */}
        {location.pathname !== "/" && location.pathname !== "/orderdetails" && location.pathname !== "/signup" && (
          <Footer />
        )}
      </div> 
    </Provider>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutWithFooter />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/help",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Help />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <OrderPlaced />,
      },

      {
        path: "/orderhistory",
        element: <OrderHistory />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
