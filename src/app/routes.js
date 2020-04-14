import React from 'react';
import Home from '../feature/Home/Home';
import Products from '../feature/Product/Products';
import DetailProduct from '../feature/Product/DetailProduct';
import Cart from '../feature/Cart/Cart';
import Checkout from '../feature/Checkout/Checkout';
import NotFound from '../feature/NotFound/NotFound';
import Faqs from '../feature/Faqs/Faqs';
import Contact from '../feature/Contact/Contact';
import Manager from '../feature/Manager/Manager';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />,
    },
    {
        path: '/perfumes',
        exact: true,
        main: ({ match }) => <Products match={match} />,
        label: 'Nước Hoa',
    },
    {
        path: '/perfumes/:id',
        exact: false,
        main: ({ match }) => <DetailProduct match={match} />,
    },
    {
        path: '/cart',
        exact: true,
        main: () => <Cart />,
        label: 'Giỏ Hàng',
    },
    {
        path: '/faqs',
        exact: true,
        main: () => <Faqs />,
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />,
    },
    {
        path: '/checkout',
        exact: false,
        main: () => <Checkout />,
    },
    {
        path: '/manager',
        exact: false,
        main: () => <Manager />,
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />,
    },
];

export default routes;
