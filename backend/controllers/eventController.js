const EventoModel = require("../models/eventoModel");
const UserModel = require("../models/userModel"); // importa el modelo usuario
const nodemailer = require("nodemailer");

const crearEvento = async (req, res) => {
  try {
    const {
      titulo, descripcion, fecha, hora_inicio, hora_fin,
      costo, modalidad, ubicacion, link_reunion, categoria,
      latitud, longitud
    } = req.body;

    const expositores = req.body.expositores || [];
    const patrocinadores = req.body.patrocinadores || [];
    const reunion_iniciada = false;
    const foto_evento = req.file ? req.file.filename : "";

    const nuevoEvento = await EventoModel.crearEvento({
      titulo, descripcion, fecha, hora_inicio, hora_fin,
      costo, modalidad, ubicacion, link_reunion,
      reunion_iniciada, foto_evento, categoria, latitud,
      longitud
    });

    const id_evento = nuevoEvento.id_evento;

    await EventoModel.vincularExpositores(id_evento, expositores);
    await EventoModel.vincularPatrocinadores(id_evento, patrocinadores);

    // Obtener todos los emails de usuarios
    const emails = await UserModel.getAllEmails(); // debe retornar array de strings

    if (emails.length > 0) {
      // Configura el transporter nodemailer (ajusta según tu SMTP o servicio)
      const transporter = nodemailer.createTransport({
        service: "Gmail", // Cambia si usas otro servicio SMTP
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Construye el correo
      const mailOptions = {
        from: process.env.EMAIL_USER,
        bcc: emails, // envía a todos en BCC para privacidad
        subject: `Nuevo evento creado: ${nuevoEvento.titulo}`,
        html: `
          <h1>Se ha creado un nuevo evento</h1>
          <p><strong>Título:</strong> ${nuevoEvento.titulo}</p>
          <p><strong>Fecha:</strong> ${nuevoEvento.fecha}</p>
          <p><strong>Hora de inicio:</strong> ${nuevoEvento.hora_inicio}</p>
          <p><strong>Ubicación:</strong> ${nuevoEvento.ubicacion}</p>
          <p><strong>Descripción:</strong> ${nuevoEvento.descripcion}</p>
          <p>¡No te pierdas este evento!</p>
        `,
      };

      // Envía el correo
      await transporter.sendMail(mailOptions);
    }

    res.status(201).json({ message: "Evento creado exitosamente", evento: nuevoEvento });
  } catch (error) {
    console.error("Error al crear evento:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
};
