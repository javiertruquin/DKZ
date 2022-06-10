import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Conocenos from "./pages/Conocenos";
import Servicios from "./pages/Servicios";
import Prensa from "./pages/Prensa";
import MindBlown from "./pages/MindBlown";
import Contactanos from "./pages/Contactanos";
import MarketingDigital from "./pages/MarketingDigital";
import Eventos from "./pages/Eventos";
import SitiosWeb from "./pages/SitiosWeb";
import Consultoria from "./pages/Consultoria";
import MarketingContenidos from "./pages/MarketingContenidos";
import AudioVisuales from "./pages/AudioVisuales";
import PaginaNoExiste from "./pages/PaginaNoExiste";
import ScrollToTop from "./components/ScrollToTop";
import TrabajosAVDetalle from "./pages/TrabajosAVDetalle";
import NavbarReact from "./components/NavbarReact";
import Footer from "./components/Footer";
import FooterEscritorio from "./components/Escritorio/FooterEscritorio";
import NavEscritorio from "./components/Escritorio/NavEscritorio";
import Iconos from "./components/Iconos";
import TrabajosEventosDetalle from "./pages/TrabajosEventosDetalle";

function App() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <BrowserRouter>
                <ScrollToTop />
                <div className="d-none d-lg-block">
                    <NavEscritorio />
                </div>
                <div className="d-lg-none d-block">
                    <NavbarReact />
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Conocenos" element={<Conocenos />} />
                    <Route path="/Servicios" element={<Servicios />} />
                    <Route path="/Prensa" element={<Prensa />} />
                    <Route path="/MindBlown" element={<MindBlown />} />
                    <Route path="/Contactanos" element={<Contactanos />} />
                    <Route
                        path="/MarketingDigital"
                        element={<MarketingDigital />}
                    />
                    <Route path="/Eventos" element={<Eventos />} />
                    <Route
                        path="/Eventos/:id"
                        element={<TrabajosEventosDetalle />}
                    />
                    <Route path="/Audiovisual" element={<AudioVisuales />} />
                    <Route
                        path="/Audiovisual/:id"
                        element={<TrabajosAVDetalle />}
                    />
                    <Route path="/SitiosWeb" element={<SitiosWeb />} />
                    <Route path="/Consultoria" element={<Consultoria />} />
                    <Route
                        path="/MarketingContenidos"
                        element={<MarketingContenidos />}
                    />
                    <Route path="*" element={<PaginaNoExiste />} />
                </Routes>
                <div className="color-azul-oscuro-fondo d-sm-none d-block">
                    <Iconos />
                    <hr className="bg-white" />
                    <Footer />
                </div>
                <div className="color-azul-oscuro-fondo d-none d-sm-block">
                    <FooterEscritorio />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
