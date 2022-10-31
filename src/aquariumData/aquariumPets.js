import React from 'react';
import _fish from '../component/assetes/aquariumFishImg/allFishesImg/fighting-fish1.jpg'
import _shrimp from '../component/assetes/aquariumPetsImg/Neocaridina-Blue.jpg'
import _unusual from '../component/assetes/aquariumPetsImg/rope-fish-Erpetoichthys-calabricus.jpg'
import _plant from '../component/assetes/aquariumPetsImg/Anubias-nana.jpg'
import _goldFishs from '../component/assetes/aquariumFishImg/allFishesImg/goldfish1.jpg'
import _cichlidsFishs from '../component/assetes/aquariumFishImg/allFishesImg/30-2.discus-fish.jpg'
import _viviparouFishs from '../component/assetes/aquariumFishImg/allFishesImg/01-1.Guppies.jpg'
import _carpFishs from '../component/assetes/aquariumFishImg/allFishesImg/TIGOVI BARBUS1.jpg'
import _catFishs from '../component/assetes/aquariumFishImg/allFishesImg/Corydoras-melini-ST-8.jpg'
import _glass from '../component/assetes/aquariumShrimpImg/grass_shrimp_8.jpg'
import _atiopsis from '../component/assetes/aquariumShrimpImg/Atyopsis-moluccensis20.jpg'
import _cherry from '../component/assetes/aquariumShrimpImg/2-1.jpg'
import _amano from '../component/assetes/aquariumShrimpImg/28-3.Caridina-multidentata.jpg'
import _caridina from '../component/assetes/aquariumShrimpImg/67954.jpg'
import _marble from '../component/assetes/aquariumShrimpImg/marmorskrabbe1.jpg'
import _blackKnife from '../component/assetes/aquariumUnusualImg/05-1-Apteronotus-albifrons.jpg'
import _makrognatus from '../component/assetes/aquariumUnusualImg/20-3-Macrognathus-aculeatus.jpg'
import _butterflyFish from '../component/assetes/aquariumUnusualImg/gjfx1.jpg'
import _reedFish from '../component/assetes/aquariumUnusualImg/rope-fish-Erpetoichthys-calabricus.jpg'
import _silverArowana from '../component/assetes/aquariumUnusualImg/6hfd-300x200.jpg'
import _fishElephant from '../component/assetes/aquariumUnusualImg/Elephant-Nose-Fish-800x445.jpg'
import _ferns from '../component/assetes/aquariumPlantImg/allPlantsImg/01-1.crystalwort.jpg'
import _rosette from '../component/assetes/aquariumPlantImg/allPlantsImg/01-3.Alternanthera-liliacina.jpg'
import _stalked from '../component/assetes/aquariumPlantImg/allPlantsImg/07-3.Anubias-nana.jpg'


const AquariumPets = () => {
    const   aquariumPets =[
        {id:1, type:'fishes',  img:_fish},
        {id:2, type:'shrimps', img:_shrimp},
        {id:3, type:'unusual',  img:_unusual},
        {id:4, type:'plants',  img:_plant}
    ]
    const aquariumPetsFishes = [
        {id:1,  type:'labyrinth', img:_fish},
        {id:2,  type:'goldfish', img:_goldFishs},
        {id:3,  type:'cichlids', img:_cichlidsFishs},
        {id:4,  type:'viviparous', img:_viviparouFishs},
        {id:5,  type:'carp', img:_carpFishs},
        {id:6,  type:'catfish', img:_catFishs}
    ]
    const aquariumPetsShrimps = [
        {id:1,type:'glass', img:_glass},
        {id:2,type:'atiopsis', img:_atiopsis},
        {id:3,type:'cherry', img:_cherry},
        {id:4,type:'amano', img:_amano},
        {id:5,type:'caridina', img:_caridina},
        {id:6,type:'marble', img:_marble}
    ]
    const aquariumPetsUnusual = [
        {id:1,type:'blackKnife', img:_blackKnife},
        {id:2,type:'makrognatus', img:_makrognatus},
        {id:3,type:'butterflyFish', img:_butterflyFish},
        {id:4,type:'reedFish', img:_reedFish},
        {id:5,type:'silverArowana', img:_silverArowana},
        {id:6,type:'fishElephant', img:_fishElephant}
    ]
    const aquariumPetsPlants = [
        {id:1,type:'ferns', img:_ferns},
        {id:2,type:'rosette', img:_rosette},
        {id:3,type:'stalked', img:_stalked},

    ]
    const allAquariumPets = {
        aquariumPets,
        aquariumPetsFishes,
        aquariumPetsShrimps,
        aquariumPetsUnusual,
        aquariumPetsPlants
    }



    return (
        allAquariumPets
    );
};

export default AquariumPets;