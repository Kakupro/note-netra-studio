import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// --- 3D Components ---

const Laptop = ({ groupProps }: { groupProps?: JSX.IntrinsicElements['group'] }) => {
    return (
        <group {...groupProps}>
            {/* Base */}
            <mesh position={[0, -0.5, 0]}>
                <boxGeometry args={[3, 0.2, 2]} />
                <meshStandardMaterial color="#A0A0A0" metalness={0.9} roughness={0.2} />
            </mesh>
            {/* Screen backing */}
            <mesh position={[0, 0.5, -1]} rotation={[0.2, 0, 0]}>
                <boxGeometry args={[3, 2, 0.1]} />
                <meshStandardMaterial color="#A0A0A0" metalness={0.9} roughness={0.2} />
            </mesh>
            {/* Screen Display (Emissive) */}
            <mesh position={[0, 0.5, -0.94]} rotation={[0.2, 0, 0]}>
                <planeGeometry args={[2.8, 1.8]} />
                <meshStandardMaterial color="#5599ff" emissive="#4488ff" emissiveIntensity={3} toneMapped={false} />
            </mesh>
            {/* Screen Light Glow - Increased Intensity */}
            <pointLight position={[0, 0.5, -0.5]} color="#4488ff" intensity={5} distance={8} decay={2} />
        </group>
    );
};

const Character = () => {
    const headGroup = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!headGroup.current) return;

        // Mouse tracking logic - slightly amplified for background
        const targetX = state.mouse.x * 0.4;
        const targetY = state.mouse.y * 0.4;

        // Smoothly rotate head
        headGroup.current.rotation.y = THREE.MathUtils.lerp(headGroup.current.rotation.y, targetX, 0.1);
        headGroup.current.rotation.x = THREE.MathUtils.lerp(headGroup.current.rotation.x, -targetY, 0.1);
    });

    // Make materials slightly brighter/more reflective for visibility
    const hairMaterial = useMemo(() => new THREE.MeshStandardMaterial({ color: "#3D2B1F", roughness: 0.4, metalness: 0.2 }), []);
    const skinMaterial = useMemo(() => new THREE.MeshStandardMaterial({ color: "#FFE0C4", roughness: 0.3, metalness: 0.1, emissive: "#553322", emissiveIntensity: 0.1 }), []);

    return (
        <group position={[0, -0.8, 0]}>
            {/* --- TORSO/BODY is static --- */}
            <mesh position={[0, -1.8, 0]}>
                <capsuleGeometry args={[0.7, 1.5, 4, 16]} />
                <meshStandardMaterial color="#222" metalness={0.5} roughness={0.5} />
            </mesh>
            {/* Shoulders */}
            <mesh position={[0, -1.5, 0]} scale={[1.8, 0.5, 1]}>
                <sphereGeometry args={[0.7, 32, 32]} />
                <meshStandardMaterial color="#222" metalness={0.5} roughness={0.5} />
            </mesh>

            {/* --- HEAD tracks the mouse --- */}
            <group ref={headGroup} position={[0, 0.2, 0]}>

                {/* Face Shape */}
                <mesh geometry={new THREE.SphereGeometry(1, 64, 64)} material={skinMaterial} />

                {/* --- EYES --- */}
                <group position={[0, 0.1, 0.85]}>
                    <Eye side="left" position={[-0.35, 0, 0]} />
                    <Eye side="right" position={[0.35, 0, 0]} />
                </group>

                {/* Nose - subtle */}
                <mesh position={[0, -0.1, 0.95]} scale={[0.1, 0.1, 0.1]}>
                    <sphereGeometry />
                    <meshStandardMaterial color="#E8C0A0" />
                </mesh>

                {/* Mouth - subtle smile */}
                <mesh position={[0, -0.35, 0.9]} rotation={[0, 0, 0]} scale={[0.2, 0.05, 0.05]}>
                    <capsuleGeometry args={[1, 1, 4]} />
                    <meshStandardMaterial color="#D88" />
                </mesh>

                {/* --- HAIR GENERATION --- */}
                {/* Back of hair */}
                <mesh position={[0, 0.1, -0.2]} scale={[1.1, 1.1, 1.1]} material={hairMaterial}>
                    <sphereGeometry args={[1, 32, 32]} />
                </mesh>
                {/* Bangs / Side Hair details */}
                <group position={[0, 0, 0]}>
                    <mesh position={[-0.9, 0, 0.2]} scale={[0.3, 1.2, 0.5]} material={hairMaterial}><sphereGeometry /></mesh>
                    <mesh position={[0.9, 0, 0.2]} scale={[0.3, 1.2, 0.5]} material={hairMaterial}><sphereGeometry /></mesh>
                    <mesh position={[0, 1, 0.2]} scale={[1.1, 0.4, 0.8]} material={hairMaterial}><sphereGeometry /></mesh>
                </group>

            </group>

            {/* Laptop in front */}
            <Laptop groupProps={{ position: [0, -1.2, 1.5], rotation: [-0.3, 0, 0], scale: 0.6 }} />
        </group>
    );
};

const Eye = ({ position, side }: { position: [number, number, number], side: 'left' | 'right' }) => {
    return (
        <group position={position}>
            {/* Eye White */}
            <mesh>
                <sphereGeometry args={[0.25, 32, 32]} />
                <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.2} />
            </mesh>
            {/* Iris/Pupil - slightly forward */}
            <mesh position={[0, 0, 0.22]} scale={[1, 1, 0.2]}>
                <sphereGeometry args={[0.12, 32, 32]} />
                <meshStandardMaterial color="#422" />
            </mesh>
            {/* Pupil Highlight */}
            <mesh position={[0.05, 0.05, 0.25]}>
                <sphereGeometry args={[0.04]} />
                <meshBasicMaterial color="white" />
            </mesh>
        </group>
    )
}

const BackgroundCharacter3D = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen">
            <Canvas camera={{ position: [0, 0, 6], fov: 40 }} gl={{ alpha: true }}>
                {/* Increased ambient light for general visibility */}
                <ambientLight intensity={0.8} />

                {/* Strong SpotLight for character definition */}
                <spotLight position={[5, 10, 5]} intensity={2} angle={0.5} penumbra={1} />

                {/* Warm fill light */}
                <pointLight position={[-5, 5, 5]} intensity={1} color="#ffdcb4" />

                {/* Strong Rim Light to separate from dark background */}
                <pointLight position={[0, 2, -5]} intensity={5} color="#a020f0" distance={15} />
                <pointLight position={[0, -2, -5]} intensity={3} color="#4488ff" distance={15} />

                <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.1}>
                    <group position={[0, -0.5, 0]} scale={0.95}>
                        <Character />
                    </group>
                </Float>
            </Canvas>
        </div>
    );
};

export default BackgroundCharacter3D;
