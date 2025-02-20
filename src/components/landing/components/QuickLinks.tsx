const QuickLinks = () => {
    return (
      <div>
        <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
        <ul className="space-y-2">
          <li><a href="/carreras" className="text-gray-100 hover:text-white hover:underline transition-all duration-200">Carreras</a></li>
          <li><a href="/precios" className="text-gray-100 hover:text-white hover:underline transition-all duration-200">Precios</a></li>
          <li><a href="/login" className="text-gray-100 hover:text-white hover:underline transition-all duration-200">Iniciar Sesión</a></li>
        </ul>
      </div>
    );
  };
  
  export default QuickLinks;
  