import Home from "./pages/Home";
// import About from "./pages/About";
// import Cart from "./pages/Cart";
import NotFound from './pages/NotFound';

const routes = [
  { path: "/", element: <Home /> },
  //   { path: "/about", element: <About /> },
  //   { path: "/cart", element: <Cart /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
