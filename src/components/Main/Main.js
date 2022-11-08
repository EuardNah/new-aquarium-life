import React from 'react';
import {Link} from "react-router-dom";
import MainItem from "./MainItem";


const Main = ({aquarium_pits}) => {
    return (

            <div className='main-container'>
                {
                    aquarium_pits.map((pet) => {
                        const {id, img, type} = pet;
                        return(
                            <Link key={id} className='classLink' to={`/${type}`}>
                                <MainItem key={id} petsImg={img} petsTitle={type} />
                            </Link>

                        )
                    })
                }
            </div>


    );
};

export default Main;