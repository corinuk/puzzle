import {
  authService,
  createUser,
  signIn,
  googleAuthProvider,
  loginWithRedirect,
  getResult,
} from "fb";
import { useState } from "react";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await createUser(authService, email, password);
        //create a new account
      } else {
        data = await signIn(authService, email, password);
        // log in
      }
      console.log(data);
    } catch (err) {
      setError(err.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const clickSocialLogin = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new googleAuthProvider();
    }
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

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          required
        />
        <input
          type="submit"
          value={newAccount ? "Create new account" : "Log in"}
        />
        {error}
      </form>
      <button onClick={toggleAccount}>
        {newAccount ? "로그인" : "계정이 없으신가요?"}
      </button>
      <button name="google" onClick={clickSocialLogin}>
        continue with google
      </button>
    </div>
  );
}

export default Auth;
