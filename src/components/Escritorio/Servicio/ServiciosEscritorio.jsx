import "./servicios.css";
import BannerServicios from "./BannerServicios";
import CartasEscritorio from "../HomeEscritorio/CartasEscritorio";
import BotonContactanos from "../../BotonContactanos";

export default function ServiciosEscritorio() {
    return (
        <div className="color-azul-oscuro-fondo">
            <BannerServicios />
            <div className="pt-5">
            <CartasEscritorio />
            </div>
     
            <BotonContactanos />
        </div>
    );
}
