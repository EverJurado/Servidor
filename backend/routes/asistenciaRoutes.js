// routes/asistenciaRoutes.js
const express = require("express");
const router = express.Router();
const asistenciaController = require("../controllers/asistencia");

router.post("/", asistenciaController.registrarAsistencia);

module.exports = router;
