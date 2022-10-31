import React from 'react';
import Navbar from "../component/Navbar/Navbar";
import Main from "../component/Main/Main";
import Footer from "../component/Footer/Footer";
import Search from "../component/Search/Search";
import aquariumPets from "../aquariumData/aquariumPets";

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