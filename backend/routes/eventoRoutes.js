const express = require("express");
const { crearEvento, getEventos, getTodos, getEventosConStats } = require("../controllers/eventController");

const router = express.Router();

router.post("/crear-evento", crearEvento);
router.get("/eventos", getEventos);
router.get("/eventos-todos", getTodos);
router.get("/eventos-con-stats", getEventosConStats); // <== Aquí agregas la nueva ruta

module.exports = router;
