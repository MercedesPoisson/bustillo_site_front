import React from 'react';
import CarouselPic from '../components/carousel';
import Description from '../components/description';
import GrillaInicio from '../components/grillaInicio';

function Inicio() {
    return(
        <div className='mt-4 '>
            <CarouselPic />
            <Description />
            <GrillaInicio />          
           
            
        </div>
    )
}

export default Inicio;