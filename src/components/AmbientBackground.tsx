const AmbientBackground = () => {
    return (
        <div className="fixed inset-0 min-h-screen w-full overflow-hidden pointer-events-none -z-50 bg-background">
            {/* Texture Overlay (Noise) */}
            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Primary Glow - Top Left */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] animate-blob mix-blend-screen" />

            {/* Secondary Glow - Bottom Right */}
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />

            {/* Muted Accent - Center Left */}
            <div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] rounded-full bg-secondary/20 blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />

            {/* Dark Gradient Base for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
        </div>
    );
};

export default AmbientBackground;
