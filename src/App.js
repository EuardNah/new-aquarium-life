import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Fishes from "./pages/Fishes";
import Plants from "./pages/Plants";
import Shrimps from "./pages/Shrimps";
import UnusualFishes from "./pages/UnusualFishes";

function App() {
  return (
    <>

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/fishes' element={<Fishes/>} />
            <Route path='/plants' element={<Plants/>} />
            <Route path='/shrimps' element={<Shrimps/>} />
            <Route path='/unusual' element={<UnusualFishes/>} />
        </Routes>
    </>
  );
}

export default App;
