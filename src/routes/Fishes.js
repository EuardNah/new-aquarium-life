import React from 'react';
import Navbar from "../component/Navbar/Navbar";
import Main from "../component/Main/Main";
import Footer from "../component/Footer/Footer";
import aquariumPets from "../aquariumData/aquariumPets";
import Search from "../component/Search/Search";

const Fishes = () => {
    const _aquarium_pits = aquariumPets();
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