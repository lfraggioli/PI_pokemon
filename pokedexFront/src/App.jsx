import "./App.css";
import Detail from "./components/Detail/Detail";
import AddPokemon from "./components/Form/AddPokemon";
import { Homepage } from "./components/Home/Homepage";
import LandingPage from "./components/Landing/Landing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/create" element={<AddPokemon />} />
    </Routes>
  );
}

export default App;
