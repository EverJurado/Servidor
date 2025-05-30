// controllers/asistencia.js
exports.registrarAsistencia = async (req, res) => {
  const { id_usuario, id_evento, comentario, calificacion } = req.body;

  try {
    await db.query(
      `INSERT INTO agenda (id_usuario, id_evento, actividad, fecha, asistio, comentario, calificacion)
       VALUES ($1, $2, 'Asistencia QR', CURRENT_DATE, true, $3, $4)`,
      [id_usuario, id_evento, comentario, calificacion]
    );
    res.status(200).json({ mensaje: "Asistencia guardada" });
  } catch (error) {
    console.error("Error al registrar asistencia:", error);
    res.status(500).json({ error: "Error interno" });
  }
};
