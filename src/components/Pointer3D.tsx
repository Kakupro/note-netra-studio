
import { useEffect, useRef, useState } from 'react';

const Pointer3D = () => {
    const [isPointerVisible, setIsPointerVisible] = useState(false);

    // Use refs for performance to avoid re-renders on every frame
    const cursorRef = useRef<HTMLDivElement>(null);
    const position = useRef({ x: 0, y: 0 });
    const targetPosition = useRef({ x: 0, y: 0 });
    const velocity = useRef({ x: 0, y: 0 });
    const rotation = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            targetPosition.current = { x: e.clientX, y: e.clientY };
            setIsPointerVisible(true);
        };

        const handleMouseLeave = () => {
            setIsPointerVisible(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        // Animation loop for smooth physics and tilt
        let rafId: number;
        const animate = () => {
            // Lerp position for smooth "trailing" feel
            const lerpFactor = 0.15;
            const prevX = position.current.x;
            const prevY = position.current.y;

            position.current.x += (targetPosition.current.x - position.current.x) * lerpFactor;
            position.current.y += (targetPosition.current.y - position.current.y) * lerpFactor;

            // Calculate velocity
            velocity.current.x = position.current.x - prevX;
            velocity.current.y = position.current.y - prevY;

            // Calculate tilt based on velocity (max 30 degrees)
            // Moving right (velX > 0) -> Rotate Y positive (right side goes back?) -> actually visual tilt standard
            // Moving Down (velY > 0) -> Rotate X negative (top comes forward)

            const tiltStrength = 2;
            rotation.current.x = -velocity.current.y * tiltStrength;
            rotation.current.y = velocity.current.x * tiltStrength;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) rotateX(${rotation.current.x}deg) rotateY(${rotation.current.y}deg)`;
            }

            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(rafId);
        };
    }, []);

    if (!isPointerVisible) return null;

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 z-[100] pointer-events-none perspective-500 will-change-transform"
            style={{
                // Initial offset to center the "point"
                marginTop: '-12px',
                marginLeft: '-12px'
            }}
        >
            <div className="relative w-8 h-8 preserve-3d">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/60 blur-md rounded-full transform translate-z-[-10px]" />

                {/* Pointer Shape - Flipped to point Top-Left (Standard) */}
                {/* Original was rotate-45 (Top-Right). We want Top-Left. 
            Standard div border-triangle points up. 
            Rotate -45 deg to point Top-Left. 
        */}
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[24px] border-b-primary transform -rotate-45 drop-shadow-lg" />
            </div>
        </div>
    );
};

export default Pointer3D;
