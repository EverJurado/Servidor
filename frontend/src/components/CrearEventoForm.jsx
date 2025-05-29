
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/crearEvento.css";
import { MapaSelector } from "../components/MapaSelector";


export const CrearEventoForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        titulo: "",
        descripcion: "",
        foto_evento: null,
        hora_inicio: "",
        hora_fin: "",
        fecha: "",
        costo: "",
        modalidad: "",
        ubicacion: "",
        link_reunion: "",
        categoria: "",
        expositores: [],
        patrocinadores: [],
    });

    const [latitud, setLatitud] = useState(null);
    const [longitud, setLongitud] = useState(null);

    const [expositores, setExpositores] = useState([]);
    const [patrocinadores, setPatrocinadores] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/expositores`)
            .then(res => res.json())
            .then(data => setExpositores(data))
            .catch(err => console.error("Error al cargar expositores:", err));

        fetch(`${import.meta.env.VITE_API_URL}/api/patrocinadores`)
            .then(res => res.json())
            .then(data => setPatrocinadores(data))
            .catch(err => console.error("Error al cargar patrocinadores:", err));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, foto_evento: e.target.files[0] });
    };

    const handleMultiSelectChange = (e) => {
        const { name, selectedOptions } = e.target;
        const values = Array.from(selectedOptions).map(option => option.value);
        setFormData({ ...formData, [name]: values });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        // Validación de campos
            if (!formData.titulo || !formData.descripcion || !formData.fecha || !formData.hora_inicio ||
                !formData.hora_fin || !formData.costo || !formData.modalidad || !formData.ubicacion ||
                !formData.link_reunion) {
                    setErrorMessage("Todos los campos requeridos deben estar llenos.");
                    return;
                }

        const eventData = new FormData();
        for (let key in formData) {
            if (key === "expositores" || key === "patrocinadores") {
                formData[key].forEach(id => eventData.append(key, id));
            } else {
                eventData.append(key, formData[key]);
            }
        }

        eventData.append("latitud", latitud);
        eventData.append("longitud", longitud);
        
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/crear-evento`, {
            method: "POST",
            body: eventData, // ✅ usamos FormData directamente
            });

            const result = await response.json();

            if (!response.ok) {
            setErrorMessage("Error: " + result.error);
            return;
            }

            setShowModal(true);
            setTimeout(() => navigate("/"), 2500);
        } catch (error) {
            console.error("Error al crear evento:", error);
            setErrorMessage("Error en el servidor.");
        }
    };

    return (
        <main>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Evento creado 🎉</h2>
                        <p>Serás redirigido a la página de inicio en instantes</p>
                    </div>
                </div>
            )}

            <form className="form" onSubmit={handleSubmit}>
                <p className="form-title">Crear Evento</p>

                <div className="input-container">
                    <input placeholder="Título" type="text" name="titulo" onChange={handleChange} />
                </div>

                <div className="input-container">
                    <textarea placeholder="Descripción" name="descripcion" onChange={handleChange} />
                </div>

                <div className="input-container">
                    <label>Categoría:</label>
                    <select name="categoria" onChange={handleChange}>
                        <option value="">Selecciona categoría</option>
                        <option value="Negocios">Negocios</option>
                        <option value="Comida y bebida">Comida y bebida</option>
                        <option value="Salud">Salud</option>
                        <option value="Música">Música</option>
                        <option value="Automóviles, barcos y aviones">Automóviles, barcos y aviones</option>
                        <option value="Organización benéfica y causas sociales">Organización benéfica y causas sociales</option>
                        <option value="Comunidad">Comunidad</option>
                        <option value="Familia y educación">Familia y educación</option>
                        <option value="Moda">Moda</option>
                        <option value="Cine y medios de comunicación">Cine y medios de comunicación</option>
                        <option value="Aficiones">Aficiones</option>
                        <option value="Hobbies">Hobbies</option>
                        <option value="Hogar y vida">Hogar y vida</option>
                        <option value="Artes escénicas y visuales">Artes escénicas y visuales</option>
                        <option value="Gobierno">Gobierno</option>
                        <option value="Actividades escolares">Actividades escolares</option>
                        <option value="Ciencia y tecnología">Ciencia y tecnología</option>
                        <option value="Vacaciones">Vacaciones</option>
                        <option value="Deportes y bienestar físico">Deportes y bienestar físico</option>
                        <option value="Viajes y actividades al aire libre">Viajes y actividades al aire libre</option>
                        <option value="Otros">Otros</option>
                    </select>
                </div>


                <div className="input-container">
                    <input placeholder="Fecha" type="date" name="fecha" onChange={handleChange} />
                </div>

                <div className="input-container">
                    <input placeholder="Hora de inicio" type="time" name="hora_inicio" onChange={handleChange} />
                </div>

                <div className="input-container">
                    <input placeholder="Hora de fin" type="time" name="hora_fin" onChange={handleChange} />
                </div>

                <div className="input-container">
                    <input placeholder="Costo" type="text" name="costo" onChange={handleChange} />
                </div>

                <div className="input-container">
                    <select name="modalidad" onChange={handleChange}>
                        <option value="">Selecciona modalidad</option>
                        <option value="Presencial">Presencial</option>
                        <option value="Virtual">Virtual</option>
                        <option value="Híbrido">Híbrido</option>
                    </select>
                </div>

                <div className="input-container">
                    <input placeholder="Ubicación" type="text" name="ubicacion" onChange={handleChange} />
                </div>
                <div className="input-container">
                    <label>Selecciona ubicación en el mapa:</label>
                    <MapaSelector
                        latitud={latitud}
                        longitud={longitud}
                        setLatitud={setLatitud}
                        setLongitud={setLongitud}
                    />
                </div>

                <div className="input-container">
                    <input placeholder="Link de reunión" type="text" name="link_reunion" onChange={handleChange} />
                </div>

                <div className="input-container">
                    <label>Foto del Evento:</label>
                    <input type="file" name="foto_evento" onChange={handleFileChange} />
                </div>

                <div className="input-container">
                    <label>Expositores:</label>
                    <select name="expositores" multiple size="5" onChange={handleMultiSelectChange}>
                        {expositores.map((expo) => (
                            <option key={expo.id_expositor} value={expo.id_expositor}>
                                {expo.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="input-container">
                    <label>Patrocinadores:</label>
                    <select name="patrocinadores" multiple size="5" onChange={handleMultiSelectChange}>
                        {patrocinadores.map((pat) => (
                            <option key={pat.id_patrocinador} value={pat.id_patrocinador}>
                                {pat.razon_social}
                            </option>
                        ))}
                    </select>
                </div>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <button className="submit" type="submit">
                    Crear Evento
                </button>
            </form>
        </main>
    );
};
