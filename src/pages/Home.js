import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import aquariumPets from "../data/aquariumPets";

const Home = () => {
    const _aquarium_pits = aquariumPets();

    return (
        <>
            <Navbar/>
            <Main aquarium_pits={_aquarium_pits.aquariumPets} />
            <Footer/>
        </>
    );
};

export default Home;