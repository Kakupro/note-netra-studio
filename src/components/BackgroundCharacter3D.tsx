import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// --- Global Mouse Tracker (Fixes "Bottom of page" issue) ---
// We track window coordinates directly to ensure 100% coverage.
const mouse = new THREE.Vector2(0, 0);
if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
        // Normalize: -1 to +1
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });
}

// --- 3D Components ---

const Laptop = ({ groupProps }: { groupProps?: JSX.IntrinsicElements['group'] }) => {
    return (
        <group {...groupProps}>
            {/* Base (Chamfered) */}
            <RoundedBox args={[3.2, 0.2, 2.2]} radius={0.05} smoothness={4} position={[0, -0.5, 0]}>
                <meshStandardMaterial color="#2d2d2d" metalness={0.8} roughness={0.3} />
            </RoundedBox>

            {/* Lid Group */}
            <group position={[0, -0.4, -1]} rotation={[0.25, 0, 0]}>
                {/* Back of Lid */}
                <RoundedBox args={[3.2, 2.1, 0.1]} radius={0.05} smoothness={4} position={[0, 1, 0]}>
                    <meshStandardMaterial color="#333" metalness={0.8} roughness={0.3} />
                </RoundedBox>
                {/* Screen (Glowing) */}
                <mesh position={[0, 1, 0.06]}>
                    <planeGeometry args={[3, 1.9]} />
                    <meshStandardMaterial color="#000" emissive="#5599ff" emissiveIntensity={0.8} toneMapped={false} />
                </mesh>
                {/* Logo */}
                <mesh position={[0, 1, -0.06]} rotation={[0, Math.PI, 0]}>
                    <circleGeometry args={[0.2]} />
                    <meshStandardMaterial color="#555" metalness={1} roughness={0.2} />
                </mesh>
            </group>

            {/* Keyboard Area Light */}
            <pointLight position={[0, 0.5, 0]} color="#4488ff" intensity={2} distance={4} />

            {/* Floating Code Particles */}
            <Sparkles count={20} scale={2} size={2} speed={0.4} opacity={0.5} position={[0, 1, 0]} color="#00FFFF" />
        </group>
    );
};

const Headphones = () => {
    return (
        <group position={[0, 0.2, 0]}>
            {/* Band */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.6, 0]}>
                <torusGeometry args={[1.1, 0.1, 16, 32, Math.PI]} />
                <meshStandardMaterial color="#1a1a1a" roughness={0.4} />
            </mesh>
            {/* Ear Cups */}
            <mesh position={[-1.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
                <meshStandardMaterial color="#111" />
            </mesh>
            <mesh position={[-1.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
                <meshStandardMaterial color="#111" />
            </mesh>
            {/* Glowing Ring on Ear Cup */}
            <mesh position={[-1.16, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                <ringGeometry args={[0.15, 0.2, 32]} />
                <meshStandardMaterial color="#00ffcc" emissive="#00ffcc" emissiveIntensity={2} toneMapped={false} />
            </mesh>

            <mesh position={[1.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
                <meshStandardMaterial color="#111" />
            </mesh>
            <mesh position={[1.16, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <ringGeometry args={[0.15, 0.2, 32]} />
                <meshStandardMaterial color="#00ffcc" emissive="#00ffcc" emissiveIntensity={2} toneMapped={false} />
            </mesh>
        </group>
    )
}

const Character = () => {
    const headGroup = useRef<THREE.Group>(null);
    const bodyGroup = useRef<THREE.Group>(null);

    useFrame(() => {
        if (headGroup.current) {
            // Updated Tracking Logic uses global 'mouse' variable
            // Dampen the movement for smooth, natural feel
            const targetX = mouse.x * 0.6; // Increased range
            const targetY = mouse.y * 0.5;

            headGroup.current.rotation.y = THREE.MathUtils.lerp(headGroup.current.rotation.y, targetX, 0.08);
            headGroup.current.rotation.x = THREE.MathUtils.lerp(headGroup.current.rotation.x, -targetY, 0.08);
        }
    });

    // Aesthetic Materials
    const skinMat = useMemo(() => new THREE.MeshStandardMaterial({
        color: "#ffdbac",
        roughness: 0.4,
        metalness: 0.1
    }), []);

    const hoodieMat = useMemo(() => new THREE.MeshStandardMaterial({
        color: "#18181b", // Zinc-900 like
        roughness: 0.9,
        metalness: 0.1
    }), []);

    const hairMat = useMemo(() => new THREE.MeshStandardMaterial({
        color: "#6b2d5c", // Deep Magenta/Purple Hair
        roughness: 0.5
    }), []);

    return (
        <group position={[0, -0.6, 0]}>
            {/* --- BODY (Hoodie Style) --- */}
            <group ref={bodyGroup} position={[0, -1.6, 0]}>
                {/* Torso */}
                <RoundedBox args={[1.4, 1.8, 0.8]} radius={0.4} smoothness={4} position={[0, 0, 0]}>
                    <primitive object={hoodieMat} />
                </RoundedBox>
                {/* Arms (Resting on table/laptop) */}
                <RoundedBox args={[0.5, 1.2, 0.5]} radius={0.2} position={[-0.8, 0.2, 0.5]} rotation={[0.5, 0, -0.2]}>
                    <primitive object={hoodieMat} />
                </RoundedBox>
                <RoundedBox args={[0.5, 1.2, 0.5]} radius={0.2} position={[0.8, 0.2, 0.5]} rotation={[0.5, 0, 0.2]}>
                    <primitive object={hoodieMat} />
                </RoundedBox>
            </group>

            {/* --- HEAD GROUP --- */}
            <group ref={headGroup} position={[0, 0.1, 0]}>

                {/* Head Shape */}
                <mesh material={skinMat}>
                    <boxGeometry args={[1.1, 1.3, 1]} />
                    {/* Using Box with subdivision modifier or just Sphere - sticking to Sphere for smoothness */}
                    <sphereGeometry args={[0.85, 32, 32]} />
                </mesh>

                {/* --- FACE DETAILS --- */}
                {/* Detailed Anime Eyes (Not just spheres) */}
                <group position={[0, 0, 0.75]}>
                    <Eye position={[-0.3, 0.05, 0]} />
                    <Eye position={[0.3, 0.05, 0]} />
                </group>

                {/* Blush */}
                <mesh position={[-0.45, -0.15, 0.65]} rotation={[0, -0.2, 0]}>
                    <circleGeometry args={[0.12]} />
                    <meshBasicMaterial color="#ffaaaa" transparent opacity={0.3} />
                </mesh>
                <mesh position={[0.45, -0.15, 0.65]} rotation={[0, 0.2, 0]}>
                    <circleGeometry args={[0.12]} />
                    <meshBasicMaterial color="#ffaaaa" transparent opacity={0.3} />
                </mesh>

                {/* Glasses / Visor */}
                <mesh position={[0, 0.05, 0.75]}>
                    <torusGeometry args={[0.32, 0.02, 16, 32]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
                <mesh position={[-0.3, 0.05, 0.75]}>
                    <ringGeometry args={[0.15, 0.18, 32]} />
                    <meshStandardMaterial color="#000" />
                </mesh>
                <mesh position={[0.3, 0.05, 0.75]}>
                    <ringGeometry args={[0.15, 0.18, 32]} />
                    <meshStandardMaterial color="#000" />
                </mesh>
                {/* Bridge of glasses */}
                <mesh position={[0, 0.05, 0.78]}>
                    <boxGeometry args={[0.2, 0.02, 0.01]} />
                    <meshStandardMaterial color="#111" />
                </mesh>


                {/* --- HAIR SYSTEM --- */}
                {/* Main bulk */}
                <mesh position={[0, 0.1, -0.1]} material={hairMat}>
                    <sphereGeometry args={[0.92, 32, 32]} />
                </mesh>
                {/* Bangs (Procedurally placed rounded boxes) */}
                <RoundedBox args={[0.3, 0.6, 0.1]} radius={0.1} position={[-0.6, 0.3, 0.7]} rotation={[0, 0, 0.2]} material={hairMat} />
                <RoundedBox args={[0.3, 0.6, 0.1]} radius={0.1} position={[0.6, 0.3, 0.7]} rotation={[0, 0, -0.2]} material={hairMat} />
                <RoundedBox args={[1.0, 0.4, 0.2]} radius={0.1} position={[0, 0.75, 0.5]} rotation={[0.2, 0, 0]} material={hairMat} />

                {/* Accessories */}
                <Headphones />
            </group>

            {/* Laptop in front */}
            <Laptop groupProps={{ position: [0, -1.2, 1.5] }} />
        </group>
    );
};

const Eye = ({ position }: { position: [number, number, number] }) => {
    return (
        <group position={position}>
            {/* White Sclera - flattened slightly */}
            <mesh scale={[1, 0.8, 0.5]}>
                <sphereGeometry args={[0.22, 32, 32]} />
                <meshStandardMaterial color="white" />
            </mesh>
            {/* Iris */}
            <mesh position={[0, 0, 0.1]} scale={[1, 1, 0.1]}>
                <circleGeometry args={[0.14, 32]} />
                <meshBasicMaterial color="#331144" />
            </mesh>
            {/* Pupil */}
            <mesh position={[0, 0, 0.11]} scale={[1, 1, 0.1]}>
                <circleGeometry args={[0.07, 32]} />
                <meshBasicMaterial color="black" />
            </mesh>
            {/* Highlight (Vital for 'anime' look) */}
            <mesh position={[0.06, 0.06, 0.12]}>
                <circleGeometry args={[0.04, 32]} />
                <meshBasicMaterial color="white" />
            </mesh>
        </group>
    )
}

const BackgroundCharacter3D = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-90 mix-blend-normal">
            {/* Mix blend normal to ensure colors popped. Opacity high. */}
            <Canvas camera={{ position: [0, 0, 6.5], fov: 35 }} gl={{ alpha: true }}>
                {/* --- CINEMATIC LIGHTING --- */}
                <ambientLight intensity={0.6} />

                {/* Key Light (Warm Face) */}
                <spotLight position={[2, 2, 5]} intensity={1.5} angle={0.5} penumbra={1} color="#ffecd1" />

                {/* Rim Light (Cool/Cyberpunk - Left) */}
                <spotLight position={[-5, 2, 2]} intensity={5} color="#00ffff" distance={10} angle={0.6} />

                {/* Rim Light (Magenta - Right) */}
                <spotLight position={[5, 0, -2]} intensity={4} color="#ff00ff" distance={10} angle={0.6} />

                {/* Laptop Glow Fill */}
                <pointLight position={[0, -1, 3]} intensity={2} color="#5599ff" distance={5} />

                <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.1} floatingRange={[-0.05, 0.05]}>
                    <group position={[0, -0.6, 0]} scale={0.9}>
                        <Character />
                    </group>
                </Float>
            </Canvas>
        </div>
    );
};

export default BackgroundCharacter3D;
