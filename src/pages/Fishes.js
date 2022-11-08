import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import aquariumPets from "../data/aquariumPets";
import Search from "../components/Search/Search";

const Fishes = () => {
    const _aquarium_pits = aquariumPets();
    console.log(_aquarium_pits)
    return (
        <>
            <Navbar/>
            <Search/>
            <Main aquarium_pits={_aquarium_pits.aquariumPetsFishes} />
            <Footer/>

        </>
    );
};

export default Fishes;