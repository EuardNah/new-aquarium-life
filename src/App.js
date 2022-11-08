import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Fishes from "./pages/Fishes";
import Plants from "./pages/Plants";
import Shrimps from "./pages/Shrimps";
import UnusualFishes from "./pages/UnusualFishes";
import Ferns from "./pages/Ferns";
import Rosette from "./pages/Rosette";
import Stalked from "./pages/Stalked";
import Labyrinth from "./pages/Labyrinth";
import GoldFishes from "./pages/GoldFishes";
import CatFishs from "./pages/CatFishs";
import CarpFishs from "./pages/CarpFishs";
import ViviparouFishes from "./pages/ViviparouFishes";
import CichlidsFishes from "./pages/CichlidsFishes";

function App() {
  return (
    <>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/fishes' element={<Fishes />} />
            <Route path='/plants' element={<Plants />} />
            <Route path='/shrimps' element={<Shrimps />} />
            <Route path='/unusual' element={<UnusualFishes />} />
            <Route path='/ferns' element={<Ferns />} />
            <Route path='/rosette' element={<Rosette />} />
            <Route path='/stalked' element={<Stalked />} />
            <Route path='/labyrinth' element={<Labyrinth />} />
            <Route path='/goldfish' element={<GoldFishes />} />
            <Route path='/catfish' element={<CatFishs />} />
            <Route path='/carp' element={<CarpFishs />} />
            <Route path='/viviparous' element={<ViviparouFishes />} />
            <Route path='/cichlids' element={<CichlidsFishes />} />
        </Routes>
    </>
  );
}

export default App;
