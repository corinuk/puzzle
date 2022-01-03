import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "routes/Home";
import Food from "routes/Food";
import Auth from "routes/Auth";

function AppRouter({ isLoggedIn }) {
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
            <Route path="/" element={<Auth />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default AppRouter;
