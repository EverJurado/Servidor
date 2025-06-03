import { useState, useEffect } from "react";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarOperacion() {
  const operadores = ["+", "-", "*"];
  const op = operadores[randomInt(0, operadores.length - 1)];
  const a = randomInt(1, 10);
  const b = randomInt(1, 10);

  let resultado;
  switch (op) {
    case "+": resultado = a + b; break;
    case "-": resultado = a - b; break;
    case "*": resultado = a * b; break;
  }

  return { a, b, op, resultado };
}

export default function CaptchaMatematico({ onValid }) {
  const [operacion, setOperacion] = useState(null);
  const [opciones, setOpciones] = useState([]);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    generarCaptcha();
  }, []);

  function generarCaptcha() {
    const { a, b, op, resultado } = generarOperacion();

    let falsas = new Set();
    while (falsas.size < 2) {
      let falso = resultado + randomInt(-5, 5);
      if (falso !== resultado && falso >= 0) falsas.add(falso);
    }

    const opcionesMezcladas = [...falsas, resultado]
      .sort(() => Math.random() - 0.5);

    setOperacion({ a, b, op, resultado });
    setOpciones(opcionesMezcladas);
    setMensaje("");
  }

  function comprobarRespuesta(opcion) {
    if (opcion === operacion.resultado) {
      setMensaje("¡Correcto!");
      if (onValid) onValid(true);
    } else {
      setMensaje("Respuesta incorrecta, intenta de nuevo.");
      if (onValid) onValid(false);
    }
  }

  if (!operacion) return null;

  return (
    <div style={{ margin: "1em 0" }}>
      <p>
        Resuelve: <strong>{operacion.a} {operacion.op} {operacion.b}</strong>
      </p>
      <div>
        {opciones.map((opcion, i) => (
          <button
            key={i}
            onClick={() => comprobarRespuesta(opcion)}
            style={{ marginRight: "0.5em", padding: "0.5em 1em" }}
          >
            {opcion}
          </button>
        ))}
      </div>
      {mensaje && <p>{mensaje}</p>}
      <button onClick={generarCaptcha} style={{ marginTop: "1em" }}>
        Nueva operación
      </button>
    </div>
  );
}
