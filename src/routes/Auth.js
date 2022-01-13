import React from "react";
import { authService, googleAuthProvider, loginWithRedirect } from "fb";

// function Auth({ kakaoAuthUrl }) {
function Auth() {
  const clickSocialLogin = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new googleAuthProvider();
    }

    await loginWithRedirect(authService, provider);
  };

  // const code = new URL(window.location.href).searchParams.get("code");
  return (
    <div>
      {/* <button name="kakao">
        <a href={kakaoAuthUrl}>카카오톡으로 로그인</a>
      </button> */}
      <button name="google" onClick={clickSocialLogin}>
        구글로 로그인
      </button>
    </div>
  );
}

export default Auth;
