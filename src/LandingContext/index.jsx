import React, { useState, useRef, useMemo } from "react";
import fotoMariela from "./nino-mostrando-hormiga.jpg";
import videoRicardo from "./entrada-al-bosque.mp4";
import fotoDaniel from "./viendo-microscopio-lab.jpg";
import fotoCarla from "./jovenes-sentados.jpg";
import estudiantesNaturaleza from './estudiando-en-naturaleza.jpg';
import estudiantesNaturaleza2 from './estudiando-en-naturaleza-vertical.jpg';
import senorasSentadas from './senoras-sentadas.jpg';
import ninosAbeja from './ninos-abeja-posando.jpg';
import jovenMirando from './joven-viendo-hormigas.jpg';
import ninoEscavando from './nino-escavando.jpg';
import empresaCharla from './empresa-charla.jpg';
import empresaComiendo from './empresa-comiendo.jpg';

const LandingContext = React.createContext();

function LandingProvider({ children }) {
    // Estado y lógica del menú modal
    const [menuVisible, setMenuVisible] = useState(false);
    const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
    const [animateMenuIn, setAnimateMenuIn] = useState(false);

    const openMenu = () => {
        setMenuVisible(true);
        setShouldRenderMenu(true);
        setTimeout(() => setAnimateMenuIn(true), 50);
    };

    const closeMenu = () => {
        setAnimateMenuIn(false);
        setTimeout(() => {
            setMenuVisible(false);
            setShouldRenderMenu(false);
        }, 500);
    };

    const toggleMenu = () => {
        if (menuVisible) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    // Datos para testimonios, experiencias, etc.
    const testimonials = [
        {
            person: "Cristhian Camacho",
            speech: "Fue una experiencia increíble para mis hijos. No solo aprendieron sobre la naturaleza, sino que realmente se sintieron parte de ella. Verlos correr entre los árboles, descubrir insectos y emocionarse con cada estación fue algo mágico. Definitivamente volveremos.",
            foto: fotoMariela,
        },
        {
            person: "Ricardo Salvatierra, profesor de ciencias",
            speech: "Llevar a mis estudiantes al Bosque Jekuaa fue una de las mejores decisiones que tomé este año. Aprendieron más en un solo día de lo que podrían haber aprendido en semanas de teoría. La interacción con la naturaleza les abrió los ojos a la importancia del medioambiente de una manera práctica y emocionante.",
            video: videoRicardo,
        },
        {
            person: "Carla Méndez",
            speech: "Nos encantó la experiencia en familia. Fue un día lleno de conexión y aprendizaje, lejos del ruido de la ciudad. Los niños estaban fascinados con las estaciones y la interacción con los guías fue excelente. Aprendimos juntos y nos llevamos recuerdos inolvidables.",
            foto: fotoCarla,
        },
        {
            person: "Luis Arce, amante del ecoturismo",
            speech: "No imaginé encontrar un lugar tan especial tan cerca de la ciudad. Cada estación del bosque es una aventura distinta, llena de detalles que te hacen reflexionar sobre el equilibrio de la naturaleza. Se siente como una expedición real, pero con la comodidad de un recorrido bien organizado. ¡Recomendadísimo!",
        },
        {
            person: "Daniel Rojas",
            speech: "Como estudiante de biología, este lugar fue un paraíso. Las estaciones están diseñadas para que realmente puedas observar, tocar y experimentar lo que aprendes en libros. Me encantó la experiencia y la recomiendo a cualquiera que quiera acercarse más a la naturaleza.",
            foto: fotoDaniel,
        },
    ];

    const experiences = [{
        title: 'Educación al aire libre para colegios',
        speech: 'Explora y aprende con actividades diseñadas para complementar el currículo escolar, potenciando la creatividad, el trabajo en equipo y la conexión con la naturaleza. Cada actividad está pensada para que los estudiantes se sumerjan en un entorno vivo y se involucren activamente en su proceso educativo.',
        img: estudiantesNaturaleza,
        img2: estudiantesNaturaleza2,
    },
    {
        title: 'Experiencias familiares en el bosque',
        speech: 'Disfruta momentos inolvidables en familia con talleres creativos, caminatas guiadas y actividades que fomentan el aprendizaje y el bienestar. Un día en el bosque se transforma en una experiencia de unión, donde cada miembro descubre la magia de la naturaleza.',
        img: senorasSentadas,
        img2: ninosAbeja,
    },]

    const experiences2 = [
        {
            title: 'Bienestar Corporativo y Universitario en la Naturaleza',
            speech: 'Renueva a tu equipo o grupo de estudiantes con dinámicas al aire libre que promueven la colaboración, el liderazgo y la conexión. En un entorno natural único, las actividades fortalecen el espíritu de equipo y estimulan la creatividad para enfrentar desafíos.',
            img: ninoEscavando,
            img2: jovenMirando,
        },
        {
            title: 'Alianzas estratégicas y experiencias personalizadas',
            speech: 'Trabajemos juntos para diseñar experiencias a medida que generen impacto social y ambiental, alineadas con los valores de tu organización.Cada proyecto se adapta a tus necesidades, creando soluciones innovadoras y transformadoras en contacto directo con la naturaleza.',
            img: empresaComiendo,
            img2: empresaCharla,
        },
    ]

    // Incluimos containerRef para la sección de testimonios
    const containerRef = useRef(null);

    const [isPaused, setIsPaused] = useState(false);

    const contextValue = useMemo(() => ({
        // Lógica del menú modal
        menuVisible,
        shouldRenderMenu,
        animateMenuIn,
        openMenu,
        closeMenu,
        toggleMenu,
        // Otros datos
        testimonials,
        containerRef,
        isPaused,
        setIsPaused,
        experiences,
        experiences2,
    }), [menuVisible, shouldRenderMenu, animateMenuIn, testimonials, experiences, experiences2, isPaused]);

    return (
        <LandingContext.Provider value={contextValue}>
            {children}
        </LandingContext.Provider>
    );
}

export { LandingContext, LandingProvider };
