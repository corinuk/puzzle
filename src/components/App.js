import { useEffect, useState } from "react";
import AppRouter from "routes/Router";
import { authService, authStateChanged } from "fb";

function App() {
  // const currentUser = authService.currentUser;
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
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
      {loading ? "Loading..." : <AppRouter isLoggedIn={isLoggedIn} />}
      <footer>&copy; myApp {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
