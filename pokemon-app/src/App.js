import "./App.css";
import Detail from "./components/Detail/Detail";
import { Homepage } from "./components/Home/Homepage";
import LandingPage from "./components/Landing/Landing";
// eslint-disable-next-line
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/home" element={<Homepage />}></Route>
      <Route path="/detail/:id" element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
