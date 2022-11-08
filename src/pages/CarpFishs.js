import React from 'react';
import aquariumPets from "../data/aquariumPets";
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const CarpFishs = () => {
    const _aquarium_pits = aquariumPets();
    console.log(_aquarium_pits)
    return (
        <>
            <Navbar/>
            <Search/>
            <Main aquarium_pits={_aquarium_pits.aquariumPetsFishesCarpFishs} />
            <Footer/>

        </>
    );
};

export default CarpFishs;