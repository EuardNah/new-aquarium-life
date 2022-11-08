import React from 'react';
import aquariumPets from "../data/aquariumPets";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const Rosette = () => {
    const _aquarium_pits = aquariumPets();
    return (
        <>
            <Navbar/>
            <Main aquarium_pits={_aquarium_pits.aquariumPetsPlantsRosette} />
            <Footer/>
        </>
    );
};

export default Rosette;