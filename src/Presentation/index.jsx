import React from "react";
import videoSrc from "./presentationPhone.mp4";
import videoSrcPc from './presentationPC.mp4'
import abejita from "./abejitaSinSilla.png"
import './Presentation.css';
import { LoadAnimation } from "../IconSelector/LoadAnimation";

function Presentation() {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [isDesktop, setIsDesktop] = React.useState(false)

    React.useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 800);
        };

        // Ejecutar al montar y al cambiar tamaño
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        // Limpiar evento al desmontar
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const handleVideoError = () => {
        setLoading(false);
        setError(true);
    };
    return (
        <>
            {error && <p className="errorMessage">No se pudo cargar el video</p>}
            {!error && (
                <div className="videoContainer">
                    {loading && <LoadAnimation />}
                    {error && <p className="errorMessage">No se pudo cargar el video</p>}
                    {!error && (
                        <video
                            key={isDesktop ? 'desktop' : 'mobile'}
                            onLoadedData={() => setLoading(false)}
                            onError={handleVideoError}
                            loop
                            autoPlay
                            muted
                            className={`videoContainer__presentationVideo ${loading ? 'hidden' : 'visible'}`}
                        >
                            <source
                                src={isDesktop ? videoSrcPc : videoSrc}
                                type="video/mp4"
                                media={isDesktop ? '(min-width: 800px)' : ''}
                            />
                            <source src={videoSrc} type="video/mp4" />
                            Tu navegador no soporta la reproducción de video.
                        </video>
                    )}
                </div>
            )}
            <div className="presentation" id="presentation">
                <div className="presentation__abejaDiv">
                    <img className="presentation__abejaImg" src={abejita} alt="abejita" />
                </div>
                <p className="presentation__introSpeech">A tan solo 15 minutos de la ciudad, en un rincón mágico rodeado de naturaleza, se encuentra Jekuaá Urubó bosque escuela. Un espacio único donde el canto de las aves, la sombra de los árboles y el aire fresco se convierten en el aula perfecta para aprender, conectar y crecer.</p>
                <h2 className="presentation__title">Quiénes somos</h2>
                <p className="presentation__speech">
                    Somos Jekuaá Urubó bosque escuela, un espacio único diseñado para reconectar a las personas con la naturaleza y entre sí. A través de experiencias al aire libre, ofrecemos oportunidades educativas, recreativas y transformadoras para colegios, familias, empresas y aliados estratégicos.
                </p>
                <h2 className="presentation__title">Nuestro propósito</h2>
                <p className="presentation__speech">
                    Enriquecer la educación tradicional conectando a los niños con la naturaleza, inculcando valores, y motivándolos a cuidar su entorno con empatía y conciencia.
                </p>
            </div>
        </>
    );
}

export { Presentation };
