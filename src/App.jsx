import React from "react";
import Seguimiento from "./pages/Seguimiento";

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center p-4">
      <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md w-full max-w-lg">
        <div className="text-center mb-6">
          <img src="/logo.png" alt="Logo" className="mx-auto mb-2 w-20" />
          <h1 className="text-3xl font-bold">Paquetería Águila Calva</h1>
          <p className="text-gray-300">Tu envío, en buenas alas.</p>
        </div>
        <Seguimiento />
      </div>
    </div>
  );
}

export default App;
