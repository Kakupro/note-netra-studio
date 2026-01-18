import { useRef, useEffect, useState } from 'react';

const GlowSeparator = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full flex justify-center py-12 overflow-hidden pointer-events-none">
            <div
                ref={ref}
                className={`
          relative w-24 h-24 rounded-3xl 
          bg-card/50 backdrop-blur-sm border border-white/10
          shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)]
          transition-all duration-1000 ease-out
          flex items-center justify-center
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
        `}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />
                <div className="w-8 h-8 rounded-full bg-primary/20 blur-xl animate-pulse" />
            </div>
        </div>
    );
};

export default GlowSeparator;
