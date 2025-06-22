import { useState } from "react";
import { db } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";

function Seguimiento() {
  const [guia, setGuia] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResultado(null);

    try {
      const q = query(collection(db, "envios"), where("guia", "==", guia));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError("No se encontró ninguna guía con ese número.");
      } else {
        querySnapshot.forEach((doc) => setResultado(doc.data()));
      }
    } catch (err) {
      setError("Hubo un error al buscar la guía.");
    }
  };

  const handleClear = () => {
    setGuia("");
    setResultado(null);
    setError("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Seguimiento de Envío</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap justify-center mb-4">
        <input
          type="text"
          placeholder="Número de guía"
          value={guia}
          onChange={(e) => setGuia(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md text-black"
        />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          Buscar
        </button>
        <button type="button" onClick={handleClear} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
          Limpiar
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {resultado && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md w-full max-w-md text-left">
          <h2 className="text-xl font-bold mb-4 text-center">Resultado</h2>
          <p><strong>Guía:</strong> {resultado.guia}</p>
          <p><strong>Estado:</strong> {resultado.estado}</p>
          <p><strong>Destino:</strong> {resultado.destino}</p>
          <p><strong>Fecha de Envío:</strong> {resultado.fecha}</p>
          <button
            onClick={() => window.print()}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Imprimir comprobante
          </button>
        </div>
      )}
    </div>
  );
}

export default Seguimiento;
