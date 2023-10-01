import "./App.css";
import Detail from "./components/Detail/Detail";
import AddPokemon from "./components/Form/AddPokemon";
import { Homepage } from "./components/Home/Homepage";
import LandingPage from "./components/Landing/Landing";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import TypeFilter from "./components/Buttons&Filters/Filters/TypeFilter";
import SideBar from "./components/Cards/Sidebar/Sidebar";
import { useState } from "react";
import Order from "./components/Buttons&Filters/Filters/Order/Order";
import { About } from "./views/About/About";
import List from "./views/List/List";
import Origin from "./views/Origin";
import Type from "./views/Filters";

function App() {
  const { pathname } = useLocation();
  const [isNavRendered, setIsNavRendered] = useState(true);

  return (
    <>
      {isNavRendered && pathname !== "/" && <Nav isRendered={isNavRendered} />}
      {pathname === "/list" && <SideBar />}
      {pathname === "/types" && <SideBar />}
      {pathname === "/origin" && <SideBar />}
      {pathname === "/order" && <SideBar />}
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/create" element={<AddPokemon />} />
          <Route path="/types" element={<Type />} />
          <Route path="/origin" element={<Origin />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
