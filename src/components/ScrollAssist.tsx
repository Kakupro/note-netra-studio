
import { useEffect, useState } from 'react';

const ScrollAssist = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScrollProgress(Number(scroll));
            setIsVisible(totalScroll > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-8 right-8 z-50 pointer-events-none perspective-500">
            <div
                className="w-12 h-12 relative preserve-3d transition-transform duration-100 ease-out"
                style={{
                    transform: `rotateX(${scrollProgress * 360}deg) rotateY(${scrollProgress * 360}deg)`
                }}
            >
                <div className="absolute inset-0 border-2 border-primary/50 rounded-lg bg-background/20 backdrop-blur-sm"
                    style={{ transform: 'translateZ(24px)' }} />
                <div className="absolute inset-0 border-2 border-primary/50 rounded-lg bg-background/20 backdrop-blur-sm"
                    style={{ transform: 'rotateY(90deg) translateZ(24px)' }} />
                <div className="absolute inset-0 border-2 border-primary/50 rounded-lg bg-background/20 backdrop-blur-sm"
                    style={{ transform: 'rotateX(90deg) translateZ(24px)' }} />
                <div className="absolute inset-0 border-2 border-primary/50 rounded-lg bg-background/20 backdrop-blur-sm"
                    style={{ transform: 'rotateY(180deg) translateZ(24px)' }} />
                <div className="absolute inset-0 border-2 border-primary/50 rounded-lg bg-background/20 backdrop-blur-sm"
                    style={{ transform: 'rotateY(-90deg) translateZ(24px)' }} />
                <div className="absolute inset-0 border-2 border-primary/50 rounded-lg bg-background/20 backdrop-blur-sm"
                    style={{ transform: 'rotateX(-90deg) translateZ(24px)' }} />

                {/* Inner core */}
                <div className="absolute inset-3 bg-primary/80 rounded-full blur-sm animate-pulse"
                    style={{ transform: 'translateZ(0)' }} />
            </div>
        </div>
    );
};

export default ScrollAssist;
