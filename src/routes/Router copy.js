import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "routes/Home";
import Food from "routes/Food";
import Auth from "routes/Auth";

function AppRouter({ isLoggedIn }) {
  const REST_API_KEY = `cf1ae7941701d4817a836fa50b23bb5c`;
  const REDIRECT_URI = "https://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  // return (
  //   <Router>
  //   <div className="App">
  //     <Switch>
  //       <Route exact path="/">
  //         <h1><a href={KAKAO_AUTH_URL}>Kakao Login</a></h1>
  //       </Route>
  //       <Route path="/oauth/kakao/callback">
  //         <Auth />
  //       </Route>
  //     </Switch>
  //   </div>
  //   </Router>
  // );
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<Food />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Auth kakaoAuthUrl={KAKAO_AUTH_URL} />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default AppRouter;
