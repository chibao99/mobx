import React from "react";
import Home from "../feature/Home/Home";
import Products from "../feature/Product/Products";
import DetailProduct from "../feature/Product/DetailProduct";
import Cart from "../feature/Cart/Cart";
import Checkout from "../feature/Checkout/Checkout";
import NotFound from "../feature/NotFound/NotFound";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/perfumes",
    exact: true,
    main: ({ match }) => <Products match={match} />
  },
  {
    path: "/perfumes/:id",
    exact: false,
    main: ({ match }) => <DetailProduct match={match} />
  },
  {
    path: "/cart",
    exact: true,
    main: () => <Cart />
  },
  {
    path: "/checkout",
    exact: false,
    main: () => <Checkout />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />
  }
];

export default routes;
