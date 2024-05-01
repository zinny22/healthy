import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { To } from "router/router";
import { useAuth } from "service/AuthService";

function HomePage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) return navigate(To.LogIn);
  }, [isLoggedIn]);

  return <div>HOMEPAGE</div>;
}

export default HomePage;
