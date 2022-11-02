import React from 'react';
import './Main.css'

const MainItem = ({petsImg, petsTitle}) => {
    return (

            <div className='main-content' >
                <img src={petsImg} alt=""/>
                <h2>{petsTitle}</h2>
            </div>

    );
};

export default MainItem;