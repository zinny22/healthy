import { db } from "./shared/firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  redirect,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";

function App() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;

  const getTest = async () => {
    // db 뒤에 "techInfo"는 정보를 가져올 컬렉션 이름이다.
    const query = await getDocs(collection(db, "item"));

    query.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  };

  const signUpEmail = () => {
    return createUserWithEmailAndPassword(auth, userId, userPw).then((e) =>
      console.log(e)
    );
  };

  console.log(user);
  const router = createBrowserRouter([
    {
      path: "/",
      element: !user ? <Navigate replace={true} to="/logIn" /> : <Home />,
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
