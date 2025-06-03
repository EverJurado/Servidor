require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const eventoRoutes = require("./routes/evenotRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Rutas
app.use("/api", authRoutes);
app.use("/api", chatRoutes);
app.use("/api", usuarioRoutes);
app.use("/api", eventoRoutes);

// Archivos estáticos
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/asistencia", require("./routes/asistenciaRoutes"));


// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
