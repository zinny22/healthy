import Layout from "components/Templates/Layout";
import Providers from "components/Templates/Providers";
import BodyTypeCreatePage from "pages/BodyTypeCreatePage";
import BodyTypeDetailPage from "pages/BodyTypeDetailPage";
import BodyTypeListPage from "pages/BodyTypeListPage";
import HomePage from "pages/HomePage";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Path } from "router/router";
import LogInPage from "./pages/LogInPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Providers />,
      children: [
        { path: Path.LogIn, element: <LogInPage /> },
        {
          id: "layout",
          path: Path.Home,
          element: <Layout />,
          children: [
            {
              path: Path.Home,
              element: <Outlet />,
              children: [
                { path: Path.Home, element: <HomePage /> },
                {
                  path: Path.BodyTypeList,
                  element: <Outlet />,
                  handle: { crumb: "체질 관리" },
                  children: [
                    {
                      path: Path.BodyTypeList,
                      element: <Outlet />,
                      handle: { crumb: "재고 관리" },
                      children: [
                        { index: true, element: <BodyTypeListPage /> },
                        {
                          path: Path.BodyTypeDetail,
                          element: <BodyTypeDetailPage />,
                          handle: { crumb: "체질 상세" },
                        },
                        {
                          path: Path.BodyTypeCreate,
                          element: <BodyTypeCreatePage />,
                          handle: { crumb: "체질 생성" },
                        },
                      ],
                    },
                  ],
                },
              ],
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
