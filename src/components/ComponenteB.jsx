import React, { useState } from "react";
import PropTypes from "prop-types";
import Contacto from "./Contacto";
function ComponenteB(props) {
  const [conectado, setConectado] = useState(props.contacto.conectado);

  function cambiarEstado() {
    setConectado(!conectado);
  }

  return (
    <div>
      <p>
        Nombre: {props.contacto.nombre}
      </p>
      <p>
        Apellido: {props.contacto.apellido}
      </p>
      <p>Email: {props.contacto.email}</p>
      <p>
        Conectado: {conectado ? "Contacto En Línea" : "Contacto No Disponible"}
      </p>
      <button onClick={cambiarEstado}>Cambiar estado</button>
    </div>
  );
}

ComponenteB.propTypes = {
  contacto: PropTypes.instanceOf(Contacto).isRequired,
};

export default ComponenteB;
