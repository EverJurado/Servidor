import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import "../styles/agenda.css";

export const AgendaEventos = () => {
  const [eventos, setEventos] = useState([]);
  const [mostrarQR, setMostrarQR] = useState(null); // guarda el ID del evento cuyo QR se está mostrando

  const id_usuario = localStorage.getItem("id_usuario");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/agenda/${id_usuario}`)
      .then(res => res.json())
      .then(data => setEventos(data))
      .catch(err => console.error("Error al cargar agenda:", err));
  }, []);

  const generarLinkQR = (id_evento) => {
    return `${import.meta.env.VITE_API_URL}/api/asistencia/${id_evento}`;
  };

  return (
    <main className="agenda-page">
      <h2 className="agenda-title">Mis eventos registrados</h2>
      {eventos.length === 0 ? (
        <p>No tienes eventos en tu agenda</p>
      ) : (
        <ul className="agenda-list">
          {eventos.map(evento => (
            <li key={evento.id_agenda} className="agenda-item">
              <strong>{evento.titulo}</strong>
              <div className="agenda-info">
                {evento.fecha} - {evento.modalidad} -{" "}
                <span className="agenda-cost">Bs. {evento.costo}</span>
              </div>
              <button
                className="btn-asistencia"
                onClick={() => setMostrarQR(mostrarQR === evento.id_evento ? null : evento.id_evento)}
              >
                Código de asistencia
              </button>

              {mostrarQR === evento.id_evento && (
                <div className="qr-container">
                  <QRCode value={generarLinkQR(evento.id_evento)} size={150} />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};
