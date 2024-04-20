import { redirect } from "react-router-dom";

function Home() {
  return (
    <div>
      ?home<div>??</div>
      <button onClick={() => redirect("/signIn")}></button>
    </div>
  );
}

export default Home;
