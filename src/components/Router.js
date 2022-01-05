import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "routes/Home";
import Food from "routes/Food";
import Auth from "routes/Auth";

function AppRouter({ isLoggedIn }) {
  const REST_API_KEY = `cf1ae7941701d4817a836fa50b23bb5c`;
  const REDIRECT_URI = "https://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
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
