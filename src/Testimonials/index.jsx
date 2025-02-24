import React from 'react';
import { LoadAnimation } from '../IconSelector/LoadAnimation';
import './Testimonials.css';
import fotoMariela from "./nino-mostrando-hormiga.jpg";
import videoRicardo from "./entrada-al-bosque.mp4";
import fotoDaniel from "./viendo-microscopio-lab.jpg";

function TestimonialItem({ testimonial }) {
    const [loading, setLoading] = React.useState(!!testimonial.foto || !!testimonial.video);
    const [error, setError] = React.useState(false);

    const handleVideoError = () => {
        setError(true);
        setLoading(false);
    };

    return (
        <article className='testimonial__article'>
            <p className='testimonial__personSpeech'>"{testimonial.speech}"</p>
            <h2 className='testimonial__autor'>-{testimonial.person}</h2>

            {loading && <div className='testimonial__animation'><LoadAnimation /></div>}

            {testimonial.foto && !error && (
                <div className='testimonial__containerMedia'>
                    <img onLoad={() => setLoading(false)} className='testimonial__img' src={testimonial.foto} alt='imagen de testimonio' />
                </div>
            )}

            {error && <p className="errorMessage">No se pudo cargar el video</p>}

            {testimonial.video && !error && (
                <div className='testimonial__containerMedia'>
                    <video
                        onLoadedData={() => setLoading(false)}
                        onError={handleVideoError}
                        controls
                        className='testimonial__video'>
                        <source src={testimonial.video} type="video/mp4" />
                        Tu navegador no soporta la reproducción de video.
                    </video>
                </div>
            )}
        </article>
    );
}

function Testimonials() {
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

    React.useLayoutEffect(() => {
        let animationFrame;
        let scrollSpeed = 1;
        const container = containerRef.current;

        const scrollTestimonials = () => {
            if (!isPaused && container) {
                container.scrollLeft += scrollSpeed;

                // Si llega a la mitad (que es donde empieza la copia), vuelve al inicio
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }

                animationFrame = requestAnimationFrame(scrollTestimonials);
            }
        };

        animationFrame = requestAnimationFrame(scrollTestimonials);

        return () => cancelAnimationFrame(animationFrame);
    }, [isPaused]);
    return (
        <section className='testimonial' id='voces'>
            <h2 className='testimonial__title'>🌿 Voces que Inspiran 🌿</h2>
            <p className='testimonial__speech'>
                Cada visita al Bosque Jekuaá es una experiencia única, llena de aprendizaje, conexión y momentos inolvidables. Aquí, la naturaleza se convierte en maestra y cada estación en una nueva aventura.
            </p>
            <p className='testimonial__speech'>
                Descubre lo que dicen quienes ya han vivido esta experiencia. Sus palabras reflejan la magia del bosque y el impacto que deja en cada persona que lo recorre.
            </p>
            <div ref={containerRef} className='testimonial__article--container' onMouseDown={() => { setIsPaused(true); }} onMouseUp={() => { setIsPaused(false); }} onTouchStart={() => { setIsPaused(true); }} onTouchEnd={() => { setIsPaused(false); }}>
                {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                    <TestimonialItem key={index} testimonial={testimonial} />
                ))}
            </div>
        </section>
    );
}

export { Testimonials };