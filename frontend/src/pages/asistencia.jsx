import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Asistencia = () => {
  const { id_evento } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const id_usuario = localStorage.getItem("id_usuario");

    if (!id_usuario) {
      // Guardar evento temporalmente y redirigir al login
      sessionStorage.setItem("evento_a_guardar", id_evento);
      navigate("/login"); // Asegúrate de tener esta ruta
      return;
    }

    // Usuario ya logueado
    registrarAsistencia(id_evento, id_usuario);
  }, []);

  const registrarAsistencia = async (id_evento, id_usuario) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/asistencia`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_evento, id_usuario })
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Asistencia registrada correctamente");
      } else {
        alert("⚠️ " + data.error);
      }
    } catch (err) {
      alert("❌ Error al registrar asistencia");
    }
  };

  return <h2>Verificando asistencia...</h2>;
};
