import React from "react";
import {
  authService,
  // createUser,
  // signIn,
  googleAuthProvider,
  loginWithRedirect,
  getResult,
} from "fb";
// import { useState } from "react";

function Auth({ kakaoAuthUrl }) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [newAccount, setNewAccount] = useState(false);
  // const [error, setError] = useState("");

  // const onChange = (event) => {
  //   const {
  //     target: { name, value },
  //   } = event;
  //   if (name === "email") {
  //     setEmail(value);
  //   } else if (name === "password") {
  //     setPassword(value);
  //   }
  // };
  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     let data;
  //     if (newAccount) {
  //       data = await createUser(authService, email, password);
  //     } else {
  //       data = await signIn(authService, email, password);
  //     }
  //     console.log(data);
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };
  // const toggleAccount = () => setNewAccount((prev) => !prev);
  const clickGoogleLogin = async () => {
    const provider = new googleAuthProvider();
    await loginWithRedirect(authService, provider);
    const result = await getResult(authService);
    if (result) {
      const user = result.user;
      const credential = provider.credentialFromResult(authService, result);
      const token = credential.accessToken;
      console.log("getResult(authService).user = ", user);
      console.log("credential = ", credential);
      console.log("token = ", token);
    }

    const operationType = result.operationType;
    console.log("operationType = ", operationType);
  };

  const code = new URL(window.location.href).searchParams.get("code");
  return (
    <div>
      <div>{code}</div>
      <button name="kakao">
        <a href={kakaoAuthUrl}>카카오톡으로 로그인</a>
      </button>
      <button name="google" onClick={clickGoogleLogin}>
        구글로 로그인
      </button>
    </div>

    // <form onSubmit={onSubmit}>
    //   <input
    //     name="email"
    //     type="email"
    //     placeholder="Email"
    //     value={email}
    //     onChange={onChange}
    //     required
    //   />
    //   <input
    //     name="password"
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={onChange}
    //     required
    //   />
    //   <input
    //     type="submit"
    //     value={newAccount ? "Create new account" : "Log in"}
    //   />
    //   {error}
    // </form>
    // <button onClick={toggleAccount}>
    //   {newAccount ? "로그인" : "계정이 없으신가요?"}
    // </button>
  );
}

export default Auth;
