import React from 'react';
import HeroStudent from './components/HeroStudent';

function HomeDashboard() {
    return (
        <main className="min-h-screen">
            <HeroStudent 
                name="Juan Pérez"
                matriculaCompleta={true}
                pagoCompleto={false}
                fechaExamen="25 de Marzo, 2025"
            />
            {/* Se recomienda agregar más contenido del dashboard aquí */}
        </main>
    );
}

export default HomeDashboard;