import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [guia, setGuia] = useState("");
  const [envio, setEnvio] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!guia.trim()) {
      setError("Ingresa un número de guía válido.");
      setEnvio(null);
      return;
    }

    try {
      const querySnapshot = await getDocs(collection(db, "envios"));
      const envioEncontrado = querySnapshot.docs.find(
        (doc) => doc.data().guia === guia
      );

      if (envioEncontrado) {
        setEnvio(envioEncontrado.data());
        setError("");
      } else {
        setEnvio(null);
        setError("No se encontró ningún envío con ese número de guía.");
      }
    } catch (err) {
      console.error("Error al buscar:", err);
      setError("Hubo un error al buscar el envío.");
    }
  };

  const handleClear = () => {
    setGuia("");
    setEnvio(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center text-white px-4">
      <img
        src="/logo.png"
        alt="Logo Paquetería Águila Calva"
        className="w-32 mb-4"
      />

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

        {error && <p className="text-red-400 text-sm">{error}</p>}

        {envio && (
          <div className="mt-6 text-sm space-y-2">
            <p><strong>Calle:</strong> {envio.calle}</p>
            <p><strong>Ciudad:</strong> {envio.ciudad}</p>
            <p><strong>Colonia:</strong> {envio.colonia}</p>
            <p><strong>CP:</strong> {envio.cp}</p>
            <p><strong>Destino:</strong> {envio.destino}</p>
            <p><strong>Dirección:</strong> {envio.direccion}</p>
            <p><strong>Estado (Envío):</strong> {envio.estado}</p>
            <p><strong>Estado (Dirección):</strong> {envio.estadoDireccion}</p>
            <p><strong>Fecha para entrega:</strong> {envio.fechaEntrega}</p>
            <p><strong>Guía:</strong> {envio.guia}</p>
            <p><strong>Nombre:</strong> {envio.nombre}</p>
            <p><strong>País:</strong> {envio.pais}</p>
            <p><strong>Peso:</strong> {envio.peso}</p>
            <p><strong>Receptor:</strong> {envio.receptor}</p>
            <p><strong>Teléfono:</strong> {envio.telefono}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
