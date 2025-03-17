import React, { useState, useRef, useMemo } from "react";

//Form Component
import tiktok from './Media/tiktok-logo.png'
import facebook from './Media/facebook-logo.png'
import whatsApp from './Media/whatsapp-logo.png'

//Presentation Component
import videoSrc from "./Media/presentationPhone.mp4";
import videoSrcPc from './Media/presentationPC.mp4'
import abejita from "./Media/abejitaSinSilla.png"

import logo from './Media/logo.png'

import fotoMariela from "./Media/nino-mostrando-hormiga.jpg";
import videoRicardo from "./Media/entrada-al-bosque.mp4";
import fotoDaniel from "./Media/viendo-microscopio-lab.jpg";
import fotoCarla from "./Media/jovenes-sentados.jpg";
import estudiantesNaturaleza from './Media/estudiando-en-naturaleza.jpg';
import estudiantesNaturaleza2 from './Media/estudiando-en-naturaleza-vertical.jpg';
import senorasSentadas from './Media/senoras-sentadas.jpg';
import ninosAbeja from './Media/ninos-abeja-posando.jpg';
import jovenMirando from './Media/joven-viendo-hormigas.jpg';
import ninoEscavando from './Media/nino-escavando.jpg';
import empresaCharla from './Media/empresa-charla.jpg';
import empresaComiendo from './Media/empresa-comiendo.jpg';
import ninosPlantando from './Media/ninos-plantando-semillas.jpg';
import explicandoAbejas from './Media/explicando-abejas.jpg';
import ninosArte from './Media/ninos-arte.jpg';
import ninosViendoFrascos from './Media/ninos-viendo-frasco-miel.jpg';
import ninoCocinando from './Media/nino-cocinando-2.jpg';
import ninosCocinando from './Media/ninos-cocinando.jpg';
import jovenesAlimentando from './Media/jovenes-alimentando-avejas.jpg';
import ninoConejo from './Media/nino-agarrando-conejo.jpg'

const LandingContext = React.createContext();

function LandingProvider({ children }) {
    // Estado y lógica del menú modal
    const [menuVisible, setMenuVisible] = useState(false);
    const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
    const [animateMenuIn, setAnimateMenuIn] = useState(false);

    const [upArrowInvisible, setUpArrowInvisible] = useState(true);
    const [upArrowInvisible2, setUpArrowInvisible2] = useState(true);
    const [upArrowInvisible3, setUpArrowInvisible3] = useState(true);
    const [upArrowInvisible4, setUpArrowInvisible4] = useState(true);

    //Presentation Component States and Functions
    const [loadingPresentation, setLoadingPresentation] = React.useState(true);
    const [errorPresentation, setErrorPresentation] = React.useState(false);
    const [isDesktop, setIsDesktop] = React.useState(false)
    const handleVideoErrorPresentation = () => {
        setLoadingPresentation(false);
        setErrorPresentation(true);
    };

    const setTrue = () => (
        setUpArrowInvisible(true)
    )
    const setFalse = () => (
        setUpArrowInvisible(false)
    )

    const setTrue2 = () => (
        setUpArrowInvisible2(true)
    )
    const setFalse2 = () => (
        setUpArrowInvisible2(false)
    )

    const setTrue3 = () => (
        setUpArrowInvisible3(true)
    )
    const setFalse3 = () => (
        setUpArrowInvisible3(false)
    )

    const setTrue4 = () => (
        setUpArrowInvisible4(true)
    )
    const setFalse4 = () => (
        setUpArrowInvisible4(false)
    )

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

    // Datos para testimonios, experiencias y servicios.
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

    const services = [{
        title: 'Jekuaá Aventureros',
        speech: 'Una experiencia inmersiva de un día donde los estudiantes recorren tres estaciones de aprendizaje en la naturaleza. Incluye actividades recreativas y contenido adaptado a la currícula nacional, brindando un enfoque vivencial y dinámico a la educación.',
        state: upArrowInvisible,
        setStateTrue: setTrue,
        setStateFalse: setFalse,
        img: ninosPlantando,
        img2: explicandoAbejas,
    },
    {
        title: 'Jekuaá Innovadores',
        speech: 'Talleres especializados y personalizados en temáticas de interés para colegios, alineados con la currícula nacional. Estos talleres permiten a los estudiantes profundizar en temas ambientales, científicos y tecnológicos de manera práctica y aplicada.',
        state: upArrowInvisible2,
        setStateTrue: setTrue2,
        setStateFalse: setFalse2,
        img: ninosArte,
        img2: ninosViendoFrascos,
    },
    {
        title: 'Jekuaá Creadores',
        speech: 'Un programa integral que combina una visita a Jekuaá Urubó con un taller de creatividad para la generación de proyectos y emprendimientos ambientales. Culmina con una feria de exposición donde los estudiantes presentan sus iniciativas ante la comunidad educativa y expertos.',
        state: upArrowInvisible3,
        setStateTrue: setTrue3,
        setStateFalse: setFalse3,
        img: ninoCocinando,
        img2: ninosCocinando,
    },
    {
        title: 'Jekuaá Guardianes',
        speech: ' Todos los colegios participantes pueden enviar sus proyectos medioambientales al equipo del bosque escuela. Los mejores serán reconocidos en un evento especial a fin de año, incentivando la innovación y el compromiso con el medio ambiente',
        state: upArrowInvisible4,
        setStateTrue: setTrue4,
        setStateFalse: setFalse4,
        img: jovenesAlimentando,
        img2: ninoConejo,
    },]

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
        services,
        tiktok,
        facebook,
        whatsApp,
        logo,
        videoSrc,
        videoSrcPc,
        abejita,
        loadingPresentation,
        setLoadingPresentation,
        errorPresentation,
        isDesktop,
        setIsDesktop,
        handleVideoErrorPresentation,
    }), [menuVisible, shouldRenderMenu, animateMenuIn, testimonials, experiences, experiences2, isPaused]);

    return (
        <LandingContext.Provider value={contextValue}>
            {children}
        </LandingContext.Provider>
    );
}

export { LandingContext, LandingProvider };
