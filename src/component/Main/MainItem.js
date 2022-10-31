import React from 'react';
import './Main.css'

const MainItem = ({PitsImg, PitsTitle}) => {
    return (

            <div className='main-content' >
                <img src={PitsImg} alt=""/>
                <h2>{PitsTitle}</h2>
            </div>

    );
};

export default MainItem;