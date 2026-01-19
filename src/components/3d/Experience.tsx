import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, Float, PresentationControls } from "@react-three/drei";
import { Laptop } from "./Laptop";
import { Suspense } from "react";

export const Experience = () => {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 10], fov: 25 }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />

                {/* Environment for reflections */}
                <Environment preset="city" />

                {/* Center Presentation Controls for subtle mouse interaction */}
                {/* Global off = true disables direct manipulation since we want it as a background */}
                <PresentationControls
                    global
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 4, tension: 1500 }}
                    rotation={[0, 0.3, 0]}
                    polar={[-Math.PI / 6, Math.PI / 6]}
                    azimuth={[-Math.PI / 6, Math.PI / 6]}
                >
                    <Float rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
                        <Laptop />
                    </Float>
                </PresentationControls>

                <ContactShadows position={[0, -1.4, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
            </Suspense>
        </Canvas>
    );
};
