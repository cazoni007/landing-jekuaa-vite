import React from "react";
import fotoMariela from "./nino-mostrando-hormiga.jpg";
import videoRicardo from "./entrada-al-bosque.mp4";
import fotoDaniel from "./viendo-microscopio-lab.jpg";
import fotoCarla from "./jovenes-sentados.jpg"

const LandingContext = React.createContext();

function LandingProvider({ children }) {
    const [modal, setModal] = React.useState(false);

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
    const containerRef = React.useRef(null);
    const [isPaused, setIsPaused] = React.useState(false);

    return (
        <LandingContext.Provider value={{
            modal,
            setModal,
            testimonials,
            containerRef,
            setIsPaused,
            isPaused,
        }}>
            {children}
        </LandingContext.Provider>
    )
}

export { LandingContext, LandingProvider }
