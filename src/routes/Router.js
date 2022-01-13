import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "routes/Home";
import Food from "routes/Food";
import UploadPage from "routes/UploadPage";
import Auth from "routes/Auth";
import CompleteReserv from "./CompleteReserv";

function AppRouter({ isLoggedIn }) {
  // const REST_API_KEY = `cf1ae7941701d4817a836fa50b23bb5c`;
  // const REDIRECT_URI = "https://localhost:3000/oauth/kakao/callback";
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/food" element={<Food />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/success" element={<CompleteReserv />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Auth />} />
            {/* <Route path="/" element={<Auth kakaoAuthUrl={KAKAO_AUTH_URL} />} /> */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default AppRouter;
