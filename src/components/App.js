import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService, authStateChanged } from "../fb";

function App() {
  // const currentUser = authService.currentUser;
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authStateChanged(
      authService,
      (user) => {
        if (user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
        setLoading(true);
      },
      (err) => {
        console.error(err);
      },
      (complete) => {
        console.log(complete);
      }
    );
  }, []);

  return (
    <>
      {loading ? <AppRouter isLoggedIn={isLoggedIn} /> : "Loading..."}
      <footer>&copy; myApp {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
