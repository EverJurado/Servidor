// src/pages/asistencia.jsx
import { useState } from "react";
import { useParams } from "react-router-dom";

export const Asistencia = () => {
  const { id_evento } = useParams();
  const [formData, setFormData] = useState({ correo: "", password: "" });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validar credenciales
    const resLogin = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
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
      body: JSON.stringify({ id_usuario, id_evento }),
    });

    const resultado = await resAsistencia.json();

    if (resAsistencia.ok) {
      setMensaje("¡Asistencia registrada exitosamente!");
    } else {
      // Mostrar el mensaje del backend
      setMensaje(`Error: ${resultado.error || "Desconocido"}`);
      console.error("Error completo:", resultado);
    }
  };


  return (
    <main style={{ padding: "2rem" }}>
      <h2>Confirmar asistencia al evento</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "300px" }}>
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
        <button type="submit">Registrar asistencia</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </main>
  );
};
