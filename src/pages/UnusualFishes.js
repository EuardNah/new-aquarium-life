import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search/Search";
import aquariumPets from "../data/aquariumPets";

const UnusualFishes = () => {
    const _aquarium_pits = aquariumPets();
    return (
        <>
            <Navbar/>
            <Search/>
            <Main aquarium_pits={_aquarium_pits.aquariumPetsUnusual} />
            <Footer/>

        </>
    );
};

export default UnusualFishes;