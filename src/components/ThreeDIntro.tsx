import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Stars, MeshDistortMaterial, PerspectiveCamera, Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { ArrowRight } from 'lucide-react';

// --- Global Mouse Tracker ---
const mouse = new THREE.Vector2(0, 0);
if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
        // Normalize: -1 to +1
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });
}

interface ThreeDIntroProps {
    onEnter: () => void;
}

const LiquidChrome = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Smooth Rotation
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;

            // Smooth Position Tracking (Follows Cursor)
            // We multiply by a factor (e.g., 2) to give it enough range to move across the screen
            const targetX = mouse.x * 3;
            const targetY = mouse.y * 1.5;

            // Lerp for smooth, lag-free movement
            // 0.1 is the 'smoothness' factor. Higher = snappier, Lower = floatier.
            meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.1);
            meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.1);
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
            {/* Reduced floating range so it doesn't fight the mouse tracking too much */}
            <mesh ref={meshRef} scale={2.2}>
                {/* Sphere with high subdivision for smooth liquid effect */}
                <sphereGeometry args={[1, 128, 128]} />
                <MeshDistortMaterial
                    color="#aaaaaa" // Light silver/chrome base
                    attach="material"
                    distort={0.5} // High distortion for "liquid" look
                    speed={2}
                    roughness={0} // Perfectly smooth like chrome
                    metalness={1} // Fully metallic
                    bumpScale={0.005} // Subtle surface detail
                />
            </mesh>
        </Float>
    );
};

const ThreeDIntro = ({ onEnter }: ThreeDIntroProps) => {
    const [hovered, setHovered] = useState(false);
    const [exiting, setExiting] = useState(false);

    const handleEnter = () => {
        setExiting(true);
        setTimeout(() => {
            onEnter();
        }, 1000);
    };

    return (
        <div className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden transition-opacity duration-1000 ${exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>

            {/* 3D Scene */}
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                    <ambientLight intensity={0.2} />
                    {/* Dramatic rim lighting */}
                    <pointLight position={[10, 10, 10]} intensity={1.5} color="#fff" />
                    <pointLight position={[-10, -10, -10]} intensity={1} color="#C0B8A0" />
                    <group position={[0, 0, 0]}>
                        <LiquidChrome />
                    </group>
                    {/* Floating particles like in the screenshots */}
                    <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.5} color="#C0B8A0" />
                    <Environment preset="studio" />
                </Canvas>
            </div>

            {/* Overlay Content - Mixed 3D/Text Layout */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none select-none">

                {/* Central Typographic Lockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center z-20 mix-blend-exclusion"
                >
                    <h1 className="text-7xl md:text-9xl lg:text-[12rem] leading-none font-bold tracking-tighter text-[#EEE8DD] font-serif text-center drop-shadow-2xl">
                        KENET
                    </h1>
                    <div className="h-px w-24 md:w-48 bg-[#EEE8DD]/50 my-6" />
                    <h2 className="text-xl md:text-3xl font-light tracking-[0.8em] text-[#EEE8DD] uppercase whitespace-nowrap pl-2">
                        TECHNOLOGIES
                    </h2>
                </motion.div>

                {/* Enter Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12 pointer-events-auto"
                >
                    <button
                        onClick={handleEnter}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className="group relative px-8 py-3 bg-transparent text-white/80 rounded-none uppercase tracking-widest text-[10px] sm:text-xs font-medium transition-all duration-300 hover:text-white hover:tracking-[0.3em]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Enter Experience
                            <span className={`h-px w-8 bg-white/50 transition-all duration-300 ${hovered ? 'w-12 bg-white' : ''}`} />
                        </span>
                    </button>
                </motion.div>
            </div>

            {/* Corners decorative text */}
            <div className="absolute top-8 left-8 text-[10px] text-white/30 uppercase tracking-widest font-mono hidden md:block">
                EST. 2026
            </div>
            <div className="absolute top-8 right-8 text-[10px] text-white/30 uppercase tracking-widest font-mono hidden md:block">
                /001
            </div>
        </div>
    );
};

export default ThreeDIntro;
