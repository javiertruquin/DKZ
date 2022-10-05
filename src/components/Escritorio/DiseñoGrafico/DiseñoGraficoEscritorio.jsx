import BotonContactanos from "../../BotonContactanos";
import TrabajosDiseñoGrafico from "../../TrabajosDiseñoGrafico";
import BannerDG from "./BannerDG";
import TextoDG from "./TextoDG";

export default function DiseñoGraficoEscritorio() {
    return (
        <div>
            <div className="color-azul-oscuro-fondo">
                <BannerDG />
                <TextoDG />
                <TrabajosDiseñoGrafico />
                <BotonContactanos />
            </div>
        </div>
    );
}
