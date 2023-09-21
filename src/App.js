import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetail from "./pages/ProductDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      {path: "/products/:productId", element: <ProductDetail />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
