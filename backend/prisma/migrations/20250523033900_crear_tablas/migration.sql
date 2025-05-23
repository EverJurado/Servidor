-- CreateTable
CREATE TABLE "Usuarios" (
    "id_usuario" SERIAL NOT NULL,
    "rol" TEXT,
    "nombre" TEXT,
    "apellidopaterno" TEXT,
    "apellidomaterno" TEXT,
    "email" TEXT,
    "contrasena" TEXT,
    "foto" TEXT,
    "telefono" INTEGER,
    "pais" TEXT,
    "ciudad" TEXT,
    "genero" TEXT,
    "fechacreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "verificado" BOOLEAN,
    "reset_token" TEXT,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Eventos" (
    "id_evento" SERIAL NOT NULL,
    "titulo" TEXT,
    "descripcion" TEXT,
    "foto_evento" TEXT,
    "hora_inicio" TEXT,
    "hora_fin" TEXT,
    "fecha" TIMESTAMP(3),
    "costo" TEXT,
    "modalidad" TEXT,
    "ubicacion" TEXT,
    "link_reunion" TEXT,
    "reunion_iniciada" BOOLEAN,

    CONSTRAINT "Eventos_pkey" PRIMARY KEY ("id_evento")
);

-- CreateTable
CREATE TABLE "Expositores" (
    "id_expositor" SERIAL NOT NULL,
    "nombre" TEXT,
    "especialidad" TEXT,
    "institucion" TEXT,
    "contacto" TEXT,

    CONSTRAINT "Expositores_pkey" PRIMARY KEY ("id_expositor")
);

-- CreateTable
CREATE TABLE "Eventos_Expositores" (
    "id_evento" INTEGER NOT NULL,
    "id_expositor" INTEGER NOT NULL,

    CONSTRAINT "Eventos_Expositores_pkey" PRIMARY KEY ("id_evento","id_expositor")
);

-- CreateTable
CREATE TABLE "Patrocinadores" (
    "id_patrocinador" SERIAL NOT NULL,
    "razon_social" TEXT,
    "institucion" TEXT,

    CONSTRAINT "Patrocinadores_pkey" PRIMARY KEY ("id_patrocinador")
);

-- CreateTable
CREATE TABLE "Eventos_Patrocinadores" (
    "id_evento" INTEGER NOT NULL,
    "id_patrocinador" INTEGER NOT NULL,

    CONSTRAINT "Eventos_Patrocinadores_pkey" PRIMARY KEY ("id_evento","id_patrocinador")
);

-- CreateTable
CREATE TABLE "Agenda" (
    "id_agenda" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_evento" INTEGER NOT NULL,
    "actividad" TEXT,
    "fecha" TIMESTAMP(3),
    "comentario" TEXT,
    "calificacion" INTEGER,
    "asistio" BOOLEAN,
    "hora_ingreso" TIMESTAMP(3),

    CONSTRAINT "Agenda_pkey" PRIMARY KEY ("id_agenda")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- AddForeignKey
ALTER TABLE "Eventos_Expositores" ADD CONSTRAINT "Eventos_Expositores_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "Eventos"("id_evento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eventos_Expositores" ADD CONSTRAINT "Eventos_Expositores_id_expositor_fkey" FOREIGN KEY ("id_expositor") REFERENCES "Expositores"("id_expositor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eventos_Patrocinadores" ADD CONSTRAINT "Eventos_Patrocinadores_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "Eventos"("id_evento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eventos_Patrocinadores" ADD CONSTRAINT "Eventos_Patrocinadores_id_patrocinador_fkey" FOREIGN KEY ("id_patrocinador") REFERENCES "Patrocinadores"("id_patrocinador") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agenda" ADD CONSTRAINT "Agenda_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agenda" ADD CONSTRAINT "Agenda_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "Eventos"("id_evento") ON DELETE RESTRICT ON UPDATE CASCADE;
