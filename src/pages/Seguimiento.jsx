import React, { useState } from "react";

function Seguimiento() {
  const [guia, setGuia] = useState("");
  const [envio, setEnvio] = useState(null);
  const [error, setError] = useState("");

  const buscarEnvio = async () => {
    setError("");
    setEnvio(null);

    try {
      const res = await fetch(`https://paqueteria-api.onrender.com/api/envios/${guia}`);

      if (!res.ok) throw new Error("Envío no encontrado");

      const data = await res.json();
      setEnvio(data);
    } catch (err) {
      console.error("Error:", err);
      setError("Error al buscar el envío.");
    }
  };

  const limpiar = () => {
    setGuia("");
    setEnvio(null);
    setError("");
  };

  const imprimir = () => {
    window.print();
  };

  return (
    <div className="text-center">
      <h2 className="text-xl font-bold mb-4">Seguimiento de Envío</h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
        <input
          type="text"
          className="px-4 py-2 rounded text-black"
          placeholder="Número de guía"
          value={guia}
          onChange={(e) => setGuia(e.target.value)}
        />
        <button onClick={buscarEnvio} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          Buscar
        </button>
        <button onClick={limpiar} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
          Limpiar
        </button>
        {envio && (
          <button onClick={imprimir} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Imprimir
          </button>
        )}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {envio && (
        <div className="text-left text-sm bg-gray-800 p-4 rounded mt-4 max-w-md mx-auto">
          <p><strong>Calle:</strong> {envio.calle}</p>
          <p><strong>Ciudad:</strong> {envio.ciudad}</p>
          <p><strong>Colonia:</strong> {envio.colonia}</p>
          <p><strong>CP:</strong> {envio.cp}</p>
          <p><strong>Destino:</strong> {envio.destino}</p>
          <p><strong>Estado (Envío):</strong> {envio.estado}</p>
          <p><strong>Estado (Dirección):</strong> {envio.estadoDireccion}</p>
          <p><strong>Fecha para entrega:</strong> {envio.fechaEntrega}</p>
          <p><strong>Guía:</strong> {envio.numeroGuia}</p>
          <p><strong>Nombre:</strong> {envio.nombre}</p>
          <p><strong>País:</strong> {envio.pais}</p>
          <p><strong>Peso:</strong> {envio.peso}</p>
          <p><strong>Receptor:</strong> {envio.receptor}</p>
        </div>
      )}
    </div>
  );
}

export default Seguimiento;
