import React from 'react';
import { LoadAnimation } from '../IconSelector/LoadAnimation';
import { LandingContext } from '../LandingContext';
import './Testimonials.css';

function TestimonialItem({ testimonial }) {
    const [loading, setLoading] = React.useState(!!testimonial.foto);
    const [error, setError] = React.useState(false);

    return (
        <>
            <article className='testimonial__article'>
                <div className='testimonial__text'>
                    <p className='testimonial__personSpeech'>"{testimonial.speech}"</p>
                    <h2 className='testimonial__autor'>-{testimonial.person}</h2>
                </div>
                {loading && <div className='testimonial__animation'><LoadAnimation /></div>}
                {error && <p className="errorMessage">No se pudo cargar la imagen</p>}
                {testimonial.foto && !error && (
                    <div className='testimonial__mediaContainer'>
                        {testimonial.hexagons}
                        <div className='testimonial__imgContainer'>
                            <img onLoad={() => setLoading(false)} className='testimonial__img' src={testimonial.foto} alt='imagen de testimonio' />
                        </div>
                    </div>
                )}
            </article>
        </>
    );
}

function Testimonials() {
    const { testimonials, containerRef, setIsPaused, isPaused } = React.useContext(LandingContext);
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