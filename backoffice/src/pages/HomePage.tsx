import { redirect } from "react-router-dom";

function HomePage() {
  return (
    <div>
      ?HomePage<div>??</div>
      <button onClick={() => redirect("/signIn")}></button>
    </div>
  );
}

export default HomePage;
