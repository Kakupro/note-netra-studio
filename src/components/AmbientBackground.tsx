const AmbientBackground = () => {
    return (
        <div className="fixed inset-0 min-h-screen w-full overflow-hidden pointer-events-none -z-50 bg-[#050505]">
            {/* Texture Overlay (Static Noise) */}
            <div
                className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Primary Drift - Warm Ivory */}
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-[100%] bg-[#F5F1E8]/5 blur-[120px] animate-drift mix-blend-screen opacity-100" />

            {/* Secondary Drift - Sand/Champagne */}
            <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-[100%] bg-[#E6DECF]/5 blur-[130px] animate-drift animation-delay-2000 mix-blend-screen opacity-100" />

            {/* Deep Center Depth - Beige Text Match */}
            <div className="absolute top-[30%] left-[20%] w-[50%] h-[50%] rounded-[100%] bg-[#EEE8DD]/2 blur-[150px] animate-drift animation-delay-4000 mix-blend-screen opacity-100" />

            {/* Traveling Light Animation - Diagonal Beam */}
            <div className="absolute -top-[50%] -left-[50%] w-[100vw] h-[200vh] bg-gradient-to-r from-transparent via-[#EEE8DD]/[0.03] to-transparent blur-[100px] animate-travel-light pointer-events-none" />

            {/* Radial Vignette to focus center */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
        </div>
    );
};

export default AmbientBackground;
