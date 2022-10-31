import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Fishes from "./routes/Fishes";
import Plants from "./routes/Plants";
import Shrimps from "./routes/Shrimps";
import UnusualFishes from "./routes/UnusualFishes";

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
