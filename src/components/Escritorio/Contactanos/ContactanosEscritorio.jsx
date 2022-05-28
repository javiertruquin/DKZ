import "./contactanos.css";
import FooterEscritorio from "../FooterEscritorio";
import NavEscritorio from "../NavEscritorio";
import FormularioContactoEscritorio from "./FormularioContactoEscritorio";
import NavbarReact from "../../../components/NavbarReact";

export default function ContactanosEscritorio() {
  return (
    <div>
      <div className="d-none d-lg-block">
        <NavEscritorio />
      </div>
      <div className="d-lg-none d-block">
        <NavbarReact />
      </div>

      <FormularioContactoEscritorio />
      <FooterEscritorio />
    </div>
  );
}
