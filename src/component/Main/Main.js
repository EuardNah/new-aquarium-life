import React from 'react';
import './Main.css'
import Search from "../Search/Search";
import Fish from '../assetes/fighting-fish1.jpg'
import Shrimps from '../assetes/Neocaridina-Blue.jpg'
import Unusual from '../assetes/rope-fish-Erpetoichthys-calabricus.jpg'
import Plants from  '../assetes/Anubias-nana.jpg'

const Main = () => {
    return (
        <>
            <Search/>
            <div className='main-container'>
                <div className='main-content' >
                    <img src={Fish} alt=""/>
                    <h2>FISH</h2>
                </div>
                <div className='main-content' >
                    <img src={Shrimps} alt=""/>
                    <h2>SHRIMPS</h2>
                </div>
                <div className='main-content' >
                    <img src={Unusual} alt=""/>
                    <h2>UNUSUALFISH</h2>
                </div>
                <div className='main-content' >
                    <img src={Plants} alt=""/>
                    <h2>PLANTS</h2>
                </div>
            </div>
        </>

    );
};

export default Main;