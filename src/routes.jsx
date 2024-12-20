import ErrorPage from "./ErrorPage";
import Shop from "./Shop";
import Cart from "./Cart";
import App from "./App";
import Home from "./Home";

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
