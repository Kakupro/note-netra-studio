
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface ThreeDIntroProps {
    onEnter: () => void;
}

const ThreeDIntro = ({ onEnter }: ThreeDIntroProps) => {
    const [hovered, setHovered] = useState(false);
    const [exiting, setExiting] = useState(false);

    const handleEnter = () => {
        setExiting(true);
        setTimeout(() => {
            onEnter();
        }, 800);
    };

    return (
        <div className={`fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-1000 ${exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(#C0B8A0 1px, transparent 1px), linear-gradient(90deg, #C0B8A0 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        transform: 'perspective(500px) rotateX(60deg) scale(2)',
                        transformOrigin: '50% 100%'
                    }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative z-10 text-center perspective-1000"
            >
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        rotateX: [0, 5, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="mb-8"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#EEE8DD] mb-2 drop-shadow-2xl">
                        NOTE NETRA
                    </h1>
                    <h2 className="text-xl md:text-2xl font-light tracking-[0.5em] text-[#C0B8A0] uppercase">
                        Studio
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-[#E6DECF]/60 max-w-md mx-auto mb-12 text-sm md:text-base leading-relaxed"
                >
                    Crafting Elite Digital Experiences. <br />
                    Freelancing. 3D Web. Scalable Systems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                >
                    <button
                        onClick={handleEnter}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className="group relative px-8 py-4 bg-transparent border border-[#C0B8A0]/30 text-[#EEE8DD] rounded-none uppercase tracking-widest text-xs font-medium overflow-hidden transition-all duration-300 hover:border-[#C0B8A0]/80"
                    >
                        <span className="relative z-10 flex items-center gap-4">
                            Enter Experience
                            <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${hovered ? 'translate-x-1' : ''}`} />
                        </span>
                        <div className={`absolute inset-0 bg-[#C0B8A0]/10 transform origin-left transition-transform duration-500 ease-out ${hovered ? 'scale-x-100' : 'scale-x-0'}`} />
                    </button>
                </motion.div>
            </motion.div>

            {/* Decorative Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C0B8A0]/5 rounded-full blur-[100px] pointer-events-none" />
        </div>
    );
};

export default ThreeDIntro;
