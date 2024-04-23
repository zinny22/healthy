import { redirect } from "react-router-dom";

function HomePage() {
  return (
    <div>
      HOMEPAGE
      <button onClick={() => redirect("/signIn")}></button>
    </div>
  );
}

export default HomePage;
