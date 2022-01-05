import React from "react";
import {
  authService,
  // createUser,
  // signIn,
  googleAuthProvider,
  facebookAuthProvider,
  loginWithRedirect,
  // getResult,
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

  //소셜 로그인 (구글, 페이스북, 카카오톡)
  const clickSocialLogin = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new googleAuthProvider();
    } else if (name === "facebook") {
      provider = new facebookAuthProvider();
    }

    await loginWithRedirect(authService, provider);
    // const result = await getResult(authService);
    // if (result) {
    //   const user = result.user;
    //   const credential = provider.credentialFromResult(authService, result);
    //   const token = credential.accessToken;
    //   const operationType = result.operationType;
    //   console.log("getResult(authService).user = ", user);
    //   console.log("credential = ", credential);
    //   console.log("token = ", token);
    //   console.log("operationType = ", operationType);
    // }
  };

  const code = new URL(window.location.href).searchParams.get("code");
  return (
    <div>
      <div>{code}</div>
      <button name="kakao">
        <a href={kakaoAuthUrl}>카카오톡으로 로그인</a>
      </button>
      <button name="google" onClick={clickSocialLogin}>
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
