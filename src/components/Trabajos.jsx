import Tada from "react-reveal/Tada";

export default function Trabajos() {
  return (
    <div className="color-azul-oscuro-fondo d-flex justify-content-center mt-5">
      <div className="peso-italic text-white">
        Mirá algunos de nuestros trabajos <br />
        y descubrí lo que somos capaces de <br />
        hacer con tu marca.
        <div>
          <Tada>
            {" "}
            <div className="d-flex justify-content-center mt-4 boton-morado border-0 borde-boton-morado mb-5 container">
                Mind Blown
            </div>
          </Tada>
        </div>
      </div>
    </div>
  );
}
