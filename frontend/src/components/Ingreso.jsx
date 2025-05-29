import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/register.css";

export const Ingreso = () => {
  const captcha = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ correo: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const captchaValue = captcha.current?.getValue() || ""; // <-- puede estar vacío

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          captchaToken: captchaValue // <-- lo mandas igual pero puede ser ""
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || "Credenciales inválidas");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("id_usuario", data.usuario.id_usuario);
      localStorage.setItem("id_rol", data.usuario.id_rol);

      window.location.href =
        data.usuario.id_rol === 3 ? "/dashboard" :
          data.usuario.id_rol === 2 ? "/expositor" :
            "/";
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setErrorMessage("Error en el servidor.");
    }
  };


  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Inicia sesión en tu cuenta</p>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="input-container">
          <input
            placeholder="Ingrese su correo electrónico"
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <input
            placeholder="Introduce tu contraseña"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="ContainerCaptcha">
          <ReCAPTCHA
            ref={captcha}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          />
        </div>

        <button className="submit" type="submit">
          Iniciar sesión
        </button>

        <p className="signup-link">
          ¿Sin cuenta? <Link to="/register">Registrarse</Link>
        </p>
        <p className="recover-password">
          <Link to="/recuperacion">Me olvide mi contraseña</Link>
        </p>
      </form>
    </main>
  );
};
