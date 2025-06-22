import { useState } from "react";



function App() {
  const [guia, setGuia] = useState("");

  const handleSearch = () => {
    // lógica de búsqueda
  };

  const handleClear = () => {
    setGuia("");
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center text-white px-4">
      <img src="/logo.PNG" alt="Logo Paquetería Águila Calva" className="w-32 mb-4" />



      
      <h1 className="text-3xl font-bold text-center mb-1">Paquetería Águila Calva</h1>
      <p className="text-sm text-gray-300 mb-10">Tu envío, en buenas alas.</p>

      <div className="bg-[#2a2a2a] p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Seguimiento de Envío</h2>

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Número de guía"
            value={guia}
            onChange={(e) => setGuia(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={handleSearch}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            Buscar
          </button>
          <button
            onClick={handleClear}
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
