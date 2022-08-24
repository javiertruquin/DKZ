export default function BannerConsultaria() {
  return (
    <div>
      <div className="color-azul-oscuro-fondo">
        <img
          className="banner-escritorio"
          src="https://res.cloudinary.com/dlzcbrqax/image/upload/v1661375568/consultoria/bannerconsultoria_1_oltcth.jpg"
          alt="Banner-escritorio"
        />
        <div className="banner-posi-consultoria-escritorio">
          <div className="d-lg-none d-block">
            <p className="tamaño-grande peso-bold-italic text-white text-center espaciado texto-sombra">
              CONSULTORÍA
            </p>
            <p className="tamaño-medio  peso-italic text-white text-center espaciado texto-sombra">
              Nos enfocamos en el requerimiento del cliente, brindando
              soluciones alternativas y eficaces, <br /> que ayuden a consolidar
              el esquema de trabajo y los objetivos internos de una compañía.
            </p>
          </div>
          <div className="d-none d-lg-block">
            <p className="tamaño-mas-grande peso-bold-italic text-white text-center espaciado texto-sombra">
              CONSULTORÍA
            </p>
            <p className="tamaño-grande peso-italic text-white text-center espaciado texto-sombra">
              Nos enfocamos en el requerimiento del cliente, brindando
              soluciones alternativas y eficaces, <br /> que ayuden a consolidar
              el esquema de trabajo y los objetivos internos de una compañía.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
