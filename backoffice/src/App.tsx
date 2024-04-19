import { db } from "./firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

function App() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;

  console.log(user);
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

  const loginEmail = () => {
    return signInWithEmailAndPassword(auth, userId, userPw).then((e) =>
      console.log(e)
    );
  };

  // 최초 마운트 시에 getTest import
  useEffect(() => {
    getTest();
  }, []);
  return (
    <div>
      <input
        value={userId}
        onChange={(e) => setUserId(e.currentTarget.value)}
      />
      <input
        value={userPw}
        onChange={(e) => setUserPw(e.currentTarget.value)}
      />
      <button onClick={() => loginEmail()}>submit</button>
    </div>
  );
}

export default App;
