

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ItemProvider } from "./components/ItemContext";
import WhatsAppButton from "./components/Whatapp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import DashboardOutlet from "./components/DashboardOutlet/DashboardOutlet";

const Login = lazy(() => import("./components/auth/Login"));
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/shop/Shop"));


const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: 
      <Login />
  },
  {
    path: "/",
    element: 
      <DashboardOutlet />,
    children: [
      {
        path: "/",
        element: 
          <Home />
      },
      {
        path: "/orders",
        element: 
          <Shop />
      },
    ],
  },
]);

function App() {
  return (
    <ItemProvider>
      <Suspense fallback={<div className="flex items-center justify-center h-screen text-lg"><FontAwesomeIcon icon={faSpinner} spin /></div>}>
        <RouterProvider router={appRouter} />
      </Suspense>
      <WhatsAppButton />
    </ItemProvider>
  );
}

export default App;
