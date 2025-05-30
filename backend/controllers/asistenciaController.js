// controllers/asistencia.js
exports.registrarAsistencia = async (req, res) => {
  const db = require("../config/db");
  const { id_usuario, id_evento } = req.body;

  try {
    await db.query(
      `INSERT INTO agenda (id_usuario, id_evento, actividad, fecha, asistio)
       VALUES ($1, $2, 'Asistencia QR', CURRENT_DATE, true)`,
      [id_usuario, id_evento]
    );
    res.status(200).json({ mensaje: "Asistencia guardada" });
  } catch (error) {
    console.error("Error al registrar asistencia:", error);
    res.status(500).json({ error: "Error interno" });
  }
};
