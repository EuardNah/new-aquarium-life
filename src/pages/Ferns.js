import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import aquariumPets from "../data/aquariumPets";

const Ferns = () => {
    const _aquarium_pits = aquariumPets();
    return (
        <>
            <Navbar/>
            <Main aquarium_pits={_aquarium_pits.aquariumPetsPlantsFerns} />
            <Footer/>
        </>
    );
};

export default Ferns;