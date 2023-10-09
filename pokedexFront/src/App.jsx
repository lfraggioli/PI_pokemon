import "./App.css";
import Detail from "./components/Detail/Detail";
import { Homepage } from "./components/Home/Homepage";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav/Nav";

import { useState } from "react";
import { About } from "./views/About/About";
import Type from "./views/Filters";
import LandingPage from "./views/Landing/Landing";
import Create from "./views/Create";

function App() {
  const { pathname } = useLocation();
  const [isNavRendered, setIsNavRendered] = useState(true);

  return (
    <>
      {isNavRendered && <Nav isRendered={isNavRendered} />}

      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/list" element={<Type />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/create" element={<Create />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
