import { Experience } from "./3d/Experience";

const AmbientBackground = () => {
    return (
        <div className="fixed inset-0 min-h-screen w-full overflow-hidden pointer-events-none bg-[#050505]">
            {/* 3D Live Background Layer */}
            <div className="absolute inset-0 z-0">
                <Experience />
            </div>

            {/* Texture Overlay (Static Noise) */}
            <div
                className="absolute inset-0 opacity-[0.035] mix-blend-overlay z-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Radial Vignette (Layered Behind Animations) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] z-10" />

            {/* Primary Drift - Warm Ivory */}
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-[100%] bg-[#F5F1E8]/5 blur-[120px] animate-drift mix-blend-screen opacity-100 z-10" />

            {/* Secondary Drift - Sand/Champagne */}
            <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-[100%] bg-[#E6DECF]/5 blur-[130px] animate-drift animation-delay-2000 mix-blend-screen opacity-100 z-10" />

            {/* Deep Center Depth - Beige Text Match */}
            <div className="absolute top-[30%] left-[20%] w-[50%] h-[50%] rounded-[100%] bg-[#EEE8DD]/2 blur-[150px] animate-drift animation-delay-4000 mix-blend-screen opacity-100 z-10" />

            {/* Traveling Light Animation - Diagonal Beam (Uppermost) */}
            <div className="absolute -top-[50%] -left-[50%] w-[100vw] h-[200vh] bg-gradient-to-r from-transparent via-[#EEE8DD]/[0.03] to-transparent blur-[100px] animate-travel-light pointer-events-none z-20" />

            {/* Shooting Stars (Subtle, Intermittent) */}
            <div className="absolute top-[10%] left-[5%] h-[2px] w-[100px] bg-gradient-to-r from-transparent via-[#EEE8DD] to-transparent animate-shoot pointer-events-none z-20" style={{ animationDelay: '0s', animationDuration: '10s' }} />
            <div className="absolute top-[35%] left-[65%] h-[2px] w-[140px] bg-gradient-to-r from-transparent via-[#EEE8DD] to-transparent animate-shoot pointer-events-none z-20" style={{ animationDelay: '4s', animationDuration: '14s' }} />
            <div className="absolute top-[75%] left-[25%] h-[2px] w-[120px] bg-gradient-to-r from-transparent via-[#EEE8DD] to-transparent animate-shoot pointer-events-none z-20" style={{ animationDelay: '7s', animationDuration: '12s' }} />
            <div className="absolute top-[15%] left-[85%] h-[2px] w-[110px] bg-gradient-to-r from-transparent via-[#EEE8DD] to-transparent animate-shoot pointer-events-none z-20" style={{ animationDelay: '2s', animationDuration: '17s' }} />
        </div>
    );
};

export default AmbientBackground;
