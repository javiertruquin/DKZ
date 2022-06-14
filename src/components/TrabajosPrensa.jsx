import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Papa from "papaparse";
import axios from "axios";
import { NavLink } from "react-router-dom";

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
        width,
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

export default function TrabajosPrensa() {
    const { width } = useWindowDimensions();
    const [trabajos, setTrabajos] = useState([]);

    useEffect(() => {
        const getTrabajos = async () => {
            const response = await axios.get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWLAKe7hfvcqVVAdHT81qbaUQn_d9ghEPU8i2jJl1Ud9aNcB5OVrP__Rr-0LW3oXGQA_A1QC0phs8h/pub?gid=177918093&single=true&output=csv"
            );

            const imagenes = Papa.parse(response.data, { header: true });

            setTrabajos(imagenes.data);
        };
        getTrabajos();
    }, []);

    return (
        <div className={width <= 800 ? "mt-sm-5 mb-5 mt-2" : "mt-sm-5 mb-5 mt-2 container"}>
            <Swiper spaceBetween={10} slidesPerView={width <= 800 ? 1.85 : 5}>
                {trabajos.map((trabajo) => (
                    <SwiperSlide>
                        <NavLink to={"/prensa/" + trabajo.id}>
                            <div className="p-2 d-flex flex-column justify-content-between ">
                                <img
                                    src={trabajo.imagen1}
                                    alt={trabajo.titulo}
                                />
                            </div>
                        </NavLink>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
