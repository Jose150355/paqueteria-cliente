function PaqueteCard({ paquete }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-xl mt-6">
      <h2 className="text-xl font-bold mb-2">Información del Envío</h2>
      <p><strong>Remitente:</strong> {paquete.remitente}</p>
      <p><strong>Destinatario:</strong> {paquete.destinatario}</p>
      <p><strong>Origen:</strong> {paquete.origen}</p>
      <p><strong>Destino:</strong> {paquete.destino}</p>
      <p><strong>Estado actual:</strong> {paquete.estado}</p>

      <h3 className="mt-4 font-semibold">Historial:</h3>
      <ul className="list-disc ml-5">
        {paquete.historial?.map((item, idx) => (
          <li key={idx}>{item.fecha} - {item.estado}</li>
        ))}
      </ul>
    </div>
  );
}

export default PaqueteCard;
