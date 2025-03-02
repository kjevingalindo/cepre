import HeroStudent from "./components/HeroStudent";

const DashboardPage = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <HeroStudent 
        name="Juan Pérez"
        matriculaCompleta={true}
        pagoCompleto={false}
        fechaExamen="25 de Marzo, 2025"
      />
    </main>
  );
};

export default DashboardPage;