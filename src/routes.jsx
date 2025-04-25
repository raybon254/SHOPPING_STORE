import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Products from "./pages/Products"
import ErrorPage from "./pages/ErrorPage";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/cart", element: <Cart /> },
  { path: "/products", element: <Products /> },
  { path: "*", element: <ErrorPage /> },
];

export default routes;
