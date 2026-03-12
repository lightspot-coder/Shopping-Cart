import App from "../../App";
import StorePage from "../storePage/StorePage";
import CartPage from "../cartPage/CartPage";
import HomePage from "../homePage/HomePage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/home-page",
        element: <HomePage />,
      },
      {
        path: "/store-page",
        element: <StorePage />,
      },
      {
        path: "/cart-page",
        element: <CartPage />,
      },
    ],
  },
];

export default routes;
