
import { useEffect, useState } from 'react';

const Pointer3D = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointerVisible, setIsPointerVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsPointerVisible(true);
        };

        const handleMouseLeave = () => {
            setIsPointerVisible(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    if (!isPointerVisible) return null;

    return (
        <div
            className="fixed z-[100] pointer-events-none perspective-500"
            style={{
                left: position.x,
                top: position.y,
                transform: 'translate(-50%, -50%)'
            }}
        >
            <div className="relative w-8 h-8 preserve-3d animate-spin-slow">
                {/* Pyramid/Cone shape simulation using CSS borders/transforms */}
                <div className="absolute inset-0 bg-primary/80 blur-md rounded-full" />
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-primary transform rotate-45" />
            </div>
        </div>
    );
};

export default Pointer3D;
