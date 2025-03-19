import { useEffect, useRef, useState } from "react";

function useIntersectionObserver() {
    const elementRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false); // Estado para controlar si ya animó

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        entry.target.classList.remove("hidden");
                        entry.target.classList.add("animate");
                        setHasAnimated(true);
                        observer.unobserve(entry.target); // Deja de observar después de la primera animación
                    }
                });
            },
            { threshold: 0.3 } // Ajusta según necesites
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [hasAnimated]); // Se ejecuta solo una vez

    return { ref: elementRef };
}

export default useIntersectionObserver