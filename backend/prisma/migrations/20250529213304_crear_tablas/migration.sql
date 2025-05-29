-- CreateTable
CREATE TABLE "usuarios" (
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

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "eventos" (
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

    CONSTRAINT "eventos_pkey" PRIMARY KEY ("id_evento")
);

-- CreateTable
CREATE TABLE "expositores" (
    "id_expositor" SERIAL NOT NULL,
    "nombre" TEXT,
    "especialidad" TEXT,
    "institucion" TEXT,
    "contacto" TEXT,

    CONSTRAINT "expositores_pkey" PRIMARY KEY ("id_expositor")
);

-- CreateTable
CREATE TABLE "eventos_expositores" (
    "id_evento" INTEGER NOT NULL,
    "id_expositor" INTEGER NOT NULL,

    CONSTRAINT "eventos_expositores_pkey" PRIMARY KEY ("id_evento","id_expositor")
);

-- CreateTable
CREATE TABLE "patrocinadores" (
    "id_patrocinador" SERIAL NOT NULL,
    "razon_social" TEXT,
    "institucion" TEXT,

    CONSTRAINT "patrocinadores_pkey" PRIMARY KEY ("id_patrocinador")
);

-- CreateTable
CREATE TABLE "eventos_patrocinadores" (
    "id_evento" INTEGER NOT NULL,
    "id_patrocinador" INTEGER NOT NULL,

    CONSTRAINT "eventos_patrocinadores_pkey" PRIMARY KEY ("id_evento","id_patrocinador")
);

-- CreateTable
CREATE TABLE "agenda" (
    "id_agenda" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_evento" INTEGER NOT NULL,
    "actividad" TEXT,
    "fecha" TIMESTAMP(3),
    "comentario" TEXT,
    "calificacion" INTEGER,
    "asistio" BOOLEAN,
    "hora_ingreso" TIMESTAMP(3),

    CONSTRAINT "agenda_pkey" PRIMARY KEY ("id_agenda")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "eventos_expositores" ADD CONSTRAINT "eventos_expositores_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "eventos"("id_evento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventos_expositores" ADD CONSTRAINT "eventos_expositores_id_expositor_fkey" FOREIGN KEY ("id_expositor") REFERENCES "expositores"("id_expositor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventos_patrocinadores" ADD CONSTRAINT "eventos_patrocinadores_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "eventos"("id_evento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventos_patrocinadores" ADD CONSTRAINT "eventos_patrocinadores_id_patrocinador_fkey" FOREIGN KEY ("id_patrocinador") REFERENCES "patrocinadores"("id_patrocinador") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agenda" ADD CONSTRAINT "agenda_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agenda" ADD CONSTRAINT "agenda_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "eventos"("id_evento") ON DELETE RESTRICT ON UPDATE CASCADE;
