import React from "react";
import BotonContactanos from "../../BotonContactanos";

export default function BannerConsultaria() {
  return (
    <div>
      <div className="color-azul-oscuro-fondo">
        <img
          className="banner-escritorio"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1653692828/Home/banner-escritorio_fndswh.png"
          alt="Banner-escritorio"
        />
        <div className="banner-posi-consultoria-escritorio">
          <div className="d-lg-none d-block">
            <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
              CONSULTORÍA
            </p>
            <p className="tamaño-mas-grande peso-italic text-white text-center espaciado texto-sombra">
              Nos enfocamos en el requerimiento del cliente, brindando
              <br /> soluciones alternativas y eficaces, que ayuden a consolidar
              el
              <br />
              esquema de trabajo y los objetivos internos de una compañía.
            </p>
          </div>
          <div className="d-none d-lg-block">
            <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
              CONSULTORÍA
            </p>
            <p className="tamaño-mas-grande peso-italic text-white text-center espaciado texto-sombra">
            Nos enfocamos en el requerimiento del cliente, brindando
              <br /> soluciones alternativas y eficaces, que ayuden a consolidar
              el
              <br />
              esquema de trabajo y los objetivos internos de una compañía.
            </p>
          </div>
          <BotonContactanos />
        </div>
      </div>
    </div>
  );
}
