import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Products from "./pages/Products"
import ErrorPage from "./pages/ErrorPage";
import UserLoginPage from "./pages/Login Pages/UserLoginPage";
import AdminLoginPage from "./pages/Login Pages/AdminLoginPage";
import CreateUserPage from "./pages/CreateUser";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/cart", element: <Cart /> },
  { path: "/products", element: <Products /> },
  { path: "/user-login", element: <UserLoginPage /> },
  { path: "/admin-login", element: <AdminLoginPage /> },
  { path: "/create-user", element: <CreateUserPage /> },
  { path: "*", element: <ErrorPage /> },
];

export default routes;
