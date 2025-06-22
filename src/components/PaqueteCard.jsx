function PaqueteCard({ envio }) {
  return (
    <div id="printable" className="mt-4 text-sm text-left">
      <p><strong>Calle:</strong> {envio.direccion}</p>
      <p><strong>Ciudad:</strong> {envio.estadoDireccion}</p>
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

      <button
        onClick={() => window.print()}
        className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Imprimir
      </button>
    </div>
  );
}

export default PaqueteCard;
