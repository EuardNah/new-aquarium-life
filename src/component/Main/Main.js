import React from 'react';
import {Link} from "react-router-dom";
import MainItem from "./MainItem";


const Main = ({aquarium_pits}) => {
    return (
        <>
            <div className='main-container'>
                {
                    aquarium_pits.map((pit) => {
                        return(
                            <Link className='classLink' to={`/${pit.type}`}>
                                <MainItem key={pit.id} PitsImg={pit.img} PitsTitle={pit.type} />
                            </Link>
                        )
                    })
                }
            </div>



        </>

    );
};

export default Main;