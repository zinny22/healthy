import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/logIn",
      element: <LogIn />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
