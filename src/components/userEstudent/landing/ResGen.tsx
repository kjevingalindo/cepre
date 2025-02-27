import React from 'react';
import HeroStudent from './components/HeroStudent';





function HomeDashboard(){
    return (
        <>
            <HeroStudent 
            name="Juan Pérez"
            matriculaCompleta={true}
            pagoCompleto={false}
            fechaExamen="25 de Marzo, 2025"/>
        </>
    );
}

export default HomeDashboard;

