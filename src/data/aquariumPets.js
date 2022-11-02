import React from 'react';
import _fish from '../assetes/images/aquariumFishImg/allFishesImg/fighting-fish1.jpg'
import _shrimp from '../assetes/images/aquariumPetsImg/Neocaridina-Blue.jpg'
import _unusual from '../assetes/images/aquariumPetsImg/rope-fish-Erpetoichthys-calabricus.jpg'
import _plant from '../assetes/images/aquariumPetsImg/Anubias-nana.jpg'
import _goldFishs from '../assetes/images/aquariumFishImg/allFishesImg/goldfish1.jpg'
import _cichlidsFishs from '../assetes/images/aquariumFishImg/allFishesImg/30-2.discus-fish.jpg'
import _viviparouFishs from '../assetes/images/aquariumFishImg/allFishesImg/01-1.Guppies.jpg'
import _carpFishs from '../assetes/images/aquariumFishImg/allFishesImg/TIGOVI BARBUS1.jpg'
import _catFishs from '../assetes/images/aquariumFishImg/allFishesImg/Corydoras-melini-ST-8.jpg'
import _glass from '../assetes/images/aquariumShrimpImg/grass_shrimp_8.jpg'
import _atiopsis from '../assetes/images/aquariumShrimpImg/Atyopsis-moluccensis20.jpg'
import _cherry from '../assetes/images/aquariumShrimpImg/2-1.jpg'
import _amano from '../assetes/images/aquariumShrimpImg/28-3.Caridina-multidentata.jpg'
import _caridina from '../assetes/images/aquariumShrimpImg/67954.jpg'
import _marble from '../assetes/images/aquariumShrimpImg/marmorskrabbe1.jpg'
import _blackKnife from '../assetes/images/aquariumUnusualImg/05-1-Apteronotus-albifrons.jpg'
import _makrognatus from '../assetes/images/aquariumUnusualImg/20-3-Macrognathus-aculeatus.jpg'
import _butterflyFish from '../assetes/images/aquariumUnusualImg/gjfx1.jpg'
import _reedFish from '../assetes/images/aquariumUnusualImg/rope-fish-Erpetoichthys-calabricus.jpg'
import _silverArowana from '../assetes/images/aquariumUnusualImg/6hfd-300x200.jpg'
import _fishElephant from '../assetes/images/aquariumUnusualImg/Elephant-Nose-Fish-800x445.jpg'
import _ferns from '../assetes/images/aquariumPlantImg/allPlantsImg/01-1.crystalwort.jpg'
import _rosette from '../assetes/images/aquariumPlantImg/allPlantsImg/01-3.Alternanthera-liliacina.jpg'
import _stalked from '../assetes/images/aquariumPlantImg/allPlantsImg/07-3.Anubias-nana.jpg'


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