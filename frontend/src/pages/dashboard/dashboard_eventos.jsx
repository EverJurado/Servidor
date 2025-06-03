import React, { useEffect, useState } from "react";
import MenuDashboard from "./menu_dashboard";

export default function DashboardEventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/eventos-con-stats`)
      .then((res) => res.json())
      .then((data) => setEventos(data))
      .catch((err) => console.error("Error al obtener eventos:", err));
  }, []);

  return (
    <div className="dashboard-wrapper">
      <MenuDashboard />
      <main className="main-content">
        <h1>Eventos</h1>
        {eventos.map((evento, i) => (
          <div key={i} className="evento-card">
            <h2>
              {evento.titulo}{" "}
              {evento.popular && <span className="popular">⭐ Popular</span>}
            </h2>
            <p>
              <strong>Fecha:</strong> {evento.fecha} - <strong>Hora:</strong>{" "}
              {evento.hora_inicio}
            </p>
            <p>
              <strong>Lugar:</strong> {evento.ubicacion}
            </p>
            <p>{evento.descripcion}</p>

            <p>
              <strong>Inscritos:</strong> {evento.total_inscritos || 0}
            </p>
            <p>
              <strong>Asistentes:</strong> {evento.total_asistentes || 0}
            </p>

            <div className="bloque-detalle">
              <h3>🎤 Expositores:</h3>
              <ul>
                {evento.expositores?.map((ex, j) => (
                  <li key={j}>{ex.nombre}</li>
                ))}
              </ul>
            </div>

            <div className="bloque-detalle">
              <h3>🏢 Patrocinadores:</h3>
              <ul>
                {evento.patrocinadores?.map((pa, j) => (
                  <li key={j}>{pa.nombre}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
