import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Entry from "./pages/Entry";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Newgame from "./pages/Newgame";
import Game from "./pages/Game";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Entry />} />
      <Route path="/home" element={<Home />} />
      <Route path="/newgame" element={<Newgame />} />
      <Route path="/game" element={<Game />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Entry />} />
    </Routes>
  </BrowserRouter>
}

export default App;
