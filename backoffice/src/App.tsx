import Layout from "components/Templates/Layout";
import HomePage from "pages/HomePage";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { To } from "router/router";
import LogInPage from "./pages/LogInPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Outlet />
        </>
      ),
      children: [
        { path: To.LogIn, element: <LogInPage /> },
        {
          id: "layout",
          path: To.Home,
          element: <Layout />,
          children: [
            {
              path: To.Home,
              element: <HomePage />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
