import React from 'react';
import Navbar from "../component/Navbar/Navbar";
import Main from "../component/Main/Main";
import Footer from "../component/Footer/Footer";
import aquariumPets from "../aquariumData/aquariumPets";

const Plants = () => {
    const _aquarium_pits = aquariumPets();
    return (
        <>
            <Navbar/>
            <Main aquarium_pits={_aquarium_pits.aquariumPetsPlants} />
            <Footer/>
        </>
    );
};

export default Plants;