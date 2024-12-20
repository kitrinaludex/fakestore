import ErrorPage from "./pages/ErrorPage";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import App from "./pages/App";
import Home from "./pages/Home";

const Routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "shop/:categorySelection?",
        element: <Shop />,
        errorElement: <ErrorPage />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <ErrorPage />,
      },
    ],
  },
];

export default Routes;
