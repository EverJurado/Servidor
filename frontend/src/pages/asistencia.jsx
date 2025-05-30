import { useState } from "react";
import { useParams } from "react-router-dom";

export const Asistencia = () => {
  const { id_evento } = useParams();
  const [formData, setFormData] = useState({
    correo: "",
    password: "",
    comentario: "",
    calificacion: null,
  });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStarClick = (valor) => {
    setFormData((prev) => ({
      ...prev,
      calificacion: prev.calificacion === valor ? null : valor,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validar credenciales
    const resLogin = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        correo: formData.correo,
        password: formData.password,
      }),
    });

    const loginData = await resLogin.json();

    if (!resLogin.ok) {
      return setMensaje("Credenciales inválidas.");
    }

    const { id_usuario } = loginData.usuario;

    // 2. Registrar asistencia
    const resAsistencia = await fetch(`${import.meta.env.VITE_API_URL}/api/asistencia`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_usuario,
        id_evento,
        comentario: formData.comentario || null,
        calificacion: formData.calificacion,
      }),
    });

    const resultado = await resAsistencia.json();

    if (resAsistencia.ok) {
      setMensaje("¡Asistencia registrada exitosamente!");
    } else {
      setMensaje(`Error: ${resultado.error || "Desconocido"}`);
      console.error("Error completo:", resultado);
    }
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "500px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Confirmar asistencia al evento</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          background: "#f8f9fa",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <textarea
          name="comentario"
          placeholder="Comentario (opcional)"
          value={formData.comentario}
          onChange={handleChange}
          rows={3}
        />

        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <label>Calificación:</label>
          {[1, 2, 3, 4, 5].map((valor) => (
            <span
              key={valor}
              onClick={() => handleStarClick(valor)}
              style={{
                cursor: "pointer",
                fontSize: "1.5rem",
                color: formData.calificacion >= valor ? "#ffc107" : "#ccc",
              }}
            >
              ★
            </span>
          ))}
        </div>

        <button
          type="submit"
          style={{
            padding: "0.75rem",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Registrar asistencia
        </button>
      </form>
      {mensaje && (
        <p style={{ marginTop: "1rem", textAlign: "center", color: mensaje.includes("¡") ? "green" : "red" }}>
          {mensaje}
        </p>
      )}
    </main>
  );
};
