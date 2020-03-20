import React from "react";
import HeaderMenu from "../../feature/Header/HeaderMenu";
import Footer from "../../feature/Footer/Footer";
import Breadcrumbs from "../../feature/Breadcrumb/Breadcrumbs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "../routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <Router>
      <HeaderMenu />
      <ToastContainer/>
      <Breadcrumbs />
      <Switch>{showRouter(routes)}</Switch>
      <Footer />
    </Router>
  );
};
const showRouter = routes => {
  var result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
  }
  return result;
};
export default App;
