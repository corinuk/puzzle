import { useEffect, useState } from "react";
import AppRouter from "routes/Router";
// import { authService, authStateChanged } from "fb";

function App() {
  const [loading, setLoading] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  // useEffect(() => {
  //   authStateChanged(
  //     authService,
  //     (user) => {
  //       if (user) {
  //         setIsLoggedIn(true);
  //       } else {
  //         setIsLoggedIn(false);
  //       }
  //       setLoading(false);
  //     },
  //     (err) => {
  //       console.error(err);
  //     },
  //     (complete) => {
  //       console.log(complete);
  //     }
  //   );
  // }, []);

  //로그인 없이 바로 홈화면 띄우기
  const isLoggedIn = true;
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? "Loading..." : <AppRouter isLoggedIn={isLoggedIn} />}
      <footer
        style={{
          fontSize: "10px",
          fontWeight: "300",
          fontStyle: "italic",
          marginTop: "5px",
          marginLeft: "15px",
          borderTop: "1px black solid",
          margin: "1px 17px 0px 17px",
        }}
      >
        &copy; Puzzle {new Date().getFullYear()}
      </footer>
    </>
  );
}

export default App;
