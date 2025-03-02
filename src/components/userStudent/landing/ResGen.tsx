import HeroStudent from "./components/HeroStudent";


const DashboardPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <HeroStudent 
        name="Juan Pérez"
        matriculaCompleta={true}
        pagoCompleto={false}
        fechaExamen="25 de Marzo, 2025"
      />
    </div>
  );
};

export default DashboardPage;