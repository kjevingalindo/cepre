import React from 'react';

function HomePage() {
  return (
    <div className="container mx-auto p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-orange-700">Bienvenido a CEPRE UNAJMA</h1>
        <p className="mt-2 text-lg text-gray-600">Tu camino al éxito comienza aquí</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center bg-orange-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-orange-700">¿Qué es el CEPRE UNAJMA?</h2>
          <p className="mt-4 text-gray-700">
            El Centro Preuniversitario de la Universidad Nacional José María Arguedas (UNAJMA) ofrece preparación
            académica de calidad para estudiantes que deseen ingresar a la universidad con éxito.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center bg-orange-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-orange-700">Nuestros Servicios</h2>
          <ul className="mt-4 text-gray-700">
            <li>Clases preparatorias personalizadas</li>
            <li>Simulacros de examen</li>
            <li>Asesoramiento académico continuo</li>
          </ul>
        </div>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-orange-700">Únete a Nosotros</h2>
        <p className="mt-4 text-lg text-gray-600">Prepara tu futuro hoy mismo con el mejor centro preparatorio de la región.</p>
        <a
          href="/auth/register"
          className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-orange-600 transition-colors"
        >
          ¡Inscríbete ahora!
        </a>
      </section>
    </div>
  );
}

export default HomePage;
