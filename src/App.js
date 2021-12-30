import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Food from "./routes/Food";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/food" element={<Food />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
