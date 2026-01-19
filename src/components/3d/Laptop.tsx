import { useMemo } from "react";
import { motion } from "framer-motion-3d";
import * as THREE from "three";

// Materials
const darkMetal = new THREE.MeshStandardMaterial({
    color: "#1a1a1a",
    metalness: 0.8,
    roughness: 0.2,
});

const lightMetal = new THREE.MeshStandardMaterial({
    color: "#2a2a2a",
    metalness: 0.7,
    roughness: 0.3,
});

const accentMaterial = new THREE.MeshStandardMaterial({
    color: "#333",
    emissive: "#111",
    metalness: 0.9,
    roughness: 0.1,
});

const screenMaterial = new THREE.MeshStandardMaterial({
    color: "#050505",
    metalness: 0.5,
    roughness: 0.1,
});

// Components
const Base = ({ delay = 0 }: { delay?: number }) => (
    <motion.group
        initial={{ y: -5, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay, type: "spring", stiffness: 50, damping: 20 }}
    >
        {/* Chassis */}
        <mesh material={darkMetal} position={[0, -0.1, 0]}>
            <boxGeometry args={[3, 0.2, 2.2]} />
        </mesh>

        {/* Touchpad */}
        <mesh material={lightMetal} position={[0, 0.01, 0.7]}>
            <boxGeometry args={[1, 0.02, 0.6]} />
        </mesh>
    </motion.group>
);

const Keyboard = ({ delay = 0 }: { delay?: number }) => {
    // Generate keys
    const keys = useMemo(() => {
        const k = [];
        const rows = 4;
        const cols = 10;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                k.push({
                    x: (j - cols / 2) * 0.25 + 0.125,
                    z: (i - rows / 2) * 0.25 - 0.2,
                });
            }
        }
        return k;
    }, []);

    return (
        <motion.group
            initial={{ y: 2, z: -1, opacity: 0 }}
            animate={{ y: 0, z: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay, type: "spring", stiffness: 40 }}
        >
            {/* Keybed */}
            <mesh material={accentMaterial} position={[0, 0.01, -0.3]}>
                <boxGeometry args={[2.6, 0.02, 1.1]} />
            </mesh>

            {/* Individual Keys */}
            {keys.map((k, i) => (
                <mesh key={i} material={lightMetal} position={[k.x, 0.03, k.z]}>
                    <boxGeometry args={[0.2, 0.02, 0.2]} />
                </mesh>
            ))}
        </motion.group>
    );
};

const Screen = ({ delay = 0 }: { delay?: number }) => (
    <motion.group
        initial={{ y: 5, rotateX: -Math.PI / 2 }}
        animate={{ y: 0.1, rotateX: -0.2 }} // Slightly open
        transition={{ duration: 1.8, delay, type: "spring", stiffness: 30 }}
        position={[0, 0.1, -1.0]} // Hinge position
    >
        {/* Hinge Point Group */}
        <group position={[0, 0, 0]}> {/* Pivot at bottom */}
            {/* Lid */}
            <mesh material={darkMetal} position={[0, 1.1, 0]}>
                <boxGeometry args={[3, 2.2, 0.1]} />
            </mesh>

            {/* Panel */}
            <mesh material={screenMaterial} position={[0, 1.1, 0.06]}>
                <boxGeometry args={[2.8, 2, 0.01]} />
            </mesh>

            {/* Camera */}
            <mesh material={accentMaterial} position={[0, 2.05, 0.07]}>
                <circleGeometry args={[0.03, 32]} />
            </mesh>
        </group>
    </motion.group>
);


export const Laptop = () => {
    return (
        <group rotation={[0.4, -0.4, 0]} position={[0, -0.5, 0]}>
            <Base delay={0.2} />
            <Keyboard delay={0.6} />
            <Screen delay={1.0} />
        </group>
    );
};
