import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import logo from '../assets/logo.png';

const Seguimiento = () => {
  const [guia, setGuia] = useState('');
  const [datos, setDatos] = useState(null);

  const buscarGuia = async () => {
    const querySnapshot = await getDocs(collection(db, 'envios'));
    let encontrado = null;

    querySnapshot.forEach((doc) => {
      if (doc.data().guia === guia) {
        encontrado = doc.data();
      }
    });

    setDatos(encontrado);
  };

  const limpiar = () => {
    setGuia('');
    setDatos(null);
  };

  const imprimir = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      {/* Logo para vista normal (no impresión) */}
      <img src={logo} alt="Logo" className="w-24 h-24 mb-4 print-hidden" />

      <h1 className="text-3xl font-bold mb-2 text-center">Paquetería Águila Calva</h1>
      <p className="mb-6 text-center">Tu envío, en buenas alas.</p>

      <div className="bg-[#0d162c] p-6 rounded-lg w-full max-w-md printable">
        {/* Logo solo para impresión */}
        <img src={logo} alt="Logo" className="w-20 h-20 mx-auto mb-4 logo print-only hidden" />

        <h2 className="text-xl font-bold mb-4 text-center">Seguimiento de Envío</h2>

        <div className="flex mb-4 gap-2">
          <input
            type="text"
            placeholder="Número de Guía"
            value={guia}
            onChange={(e) => setGuia(e.target.value)}
            className="text-black p-2 rounded w-full"
          />
          <button onClick={buscarGuia} className="bg-black text-white px-4 py-2 rounded">Buscar</button>
          <button onClick={limpiar} className="bg-gray-500 text-white px-4 py-2 rounded">Limpiar</button>
          <button onClick={imprimir} className="bg-blue-600 text-white px-4 py-2 rounded">Imprimir</button>
        </div>

        {datos && (
          <div className="mt-4 space-y-1">
            <h3 className="text-lg font-semibold mb-2">Detalles del Envío</h3>
            <p><strong>Nombre:</strong> {datos.nombre}</p>
            <p><strong>Receptor:</strong> {datos.receptor}</p>
            <p><strong>Destino:</strong> {datos.destino}</p>
            <p><strong>Dirección:</strong> {datos.direccion}</p>
            <p><strong>Colonia:</strong> {datos.colonia}</p>
            <p><strong>Ciudad:</strong> {datos.ciudad}</p>
            <p><strong>Estado Dirección:</strong> {datos.estadoDireccion}</p>
            <p><strong>Estado del envío:</strong> {datos.estado}</p>
            <p><strong>CP:</strong> {datos.cp}</p>
            <p><strong>País:</strong> {datos.pais}</p>
            <p><strong>Peso:</strong> {datos.peso}</p>
            <p><strong>Fecha:</strong> {datos.fecha}</p>
            <p><strong>Guía:</strong> {datos.guia}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Seguimiento;
