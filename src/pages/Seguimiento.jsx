// src/pages/Seguimiento.jsx
import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

function Seguimiento() {
  const [guia, setGuia] = useState("");
  const [envio, setEnvio] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    setEnvio(null);

    try {
      const q = query(collection(db, "envios"), where("guia", "==", guia));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError("No se encontró ningún envío con esa guía.");
        return;
      }

      const doc = querySnapshot.docs[0].data();
      setEnvio(doc);
    } catch (err) {
      console.error("Error al buscar:", err);
      setError("Error al buscar el envío.");
    }
  };

  const handleClear = () => {
    setGuia("");
    setEnvio(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center text-white px-4">
      <img src="/logo.PNG" alt="Logo Paquetería Águila Calva" className="w-32 mb-4" />
      <h1 className="text-3xl font-bold text-center mb-1">
        Paquetería Águila Calva
      </h1>
      <p className="text-sm text-gray-300 mb-10">Tu envío, en buenas alas.</p>

      <div className="bg-[#2a2a2a] p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Seguimiento de Envío
        </h2>

        <div className="flex items-center gap-2 mb-4">
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

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {envio && (
          <div className="mt-4 space-y-1 text-sm">
            <p><strong>Calle:</strong> {envio.direccion}</p>
            <p><strong>Ciudad:</strong> {envio.ciudad}</p>
            <p><strong>Colonia:</strong> {envio.colonia}</p>
            <p><strong>CP:</strong> {envio.cp}</p>
            <p><strong>Destino:</strong> {envio.destino}</p>
            <p><strong>Estado (Envío):</strong> {envio.estado}</p>
            <p><strong>Estado (Dirección):</strong> {envio.estadoDireccion}</p>
            <p><strong>Fecha para entrega:</strong> {envio.fecha}</p>
            <p><strong>Guía:</strong> {envio.guia}</p>
            <p><strong>Nombre:</strong> {envio.nombre}</p>
            <p><strong>País:</strong> {envio.pais}</p>
            <p><strong>Peso:</strong> {envio.peso}</p>
            <p><strong>Receptor:</strong> {envio.receptor}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Seguimiento;
