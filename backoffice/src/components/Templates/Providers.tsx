import { Outlet } from "react-router-dom";
import { AuthProvider } from "service/AuthService";

function Providers() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}

export default Providers;
