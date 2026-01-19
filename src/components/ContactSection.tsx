import { Mail, Linkedin } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const ContactSection = () => {
    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EEE8DD]/5 rounded-full blur-[120px]" />
            </div>

            <div className="container-main relative z-10 flex flex-col items-center">
                <RevealOnScroll>
                    <div className="flex flex-col items-center text-center mb-12">
                        <h2 className="heading-section mb-4 text-[#EEE8DD]">Get in Touch</h2>
                        <p className="text-body max-w-lg mx-auto">
                            Open to collaboration, inquiries, or just a conversation about engineered systems.
                        </p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={200} className="w-full max-w-2xl">
                    {/* Glass Card Container */}
                    <div className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-white/10 to-transparent">
                        {/* Soft Glow Background behind card */}
                        <div className="absolute inset-0 bg-white/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        {/* Inner Card */}
                        <div className="relative rounded-3xl bg-[#0A0A0A]/80 backdrop-blur-xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">

                            {/* Email Button */}
                            <a
                                href="mailto:hello@kenet.tech"
                                className="group/btn relative flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-105"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/btn:border-[#EEE8DD]/50 group-hover/btn:shadow-[0_0_20px_rgba(238,232,221,0.15)] transition-all duration-300">
                                    <Mail className="w-7 h-7 text-[#E6DECF] group-hover/btn:text-[#EEE8DD] transition-colors" />
                                </div>
                                <span className="text-sm font-medium text-muted-foreground group-hover/btn:text-[#EEE8DD] transition-colors">Email</span>
                            </a>

                            {/* Divider (Hidden on mobile) */}
                            <div className="hidden md:block w-px h-16 bg-white/10" />

                            {/* X (Twitter) Button */}
                            <a
                                href="https://x.com/KenetTech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn relative flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-105"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/btn:border-[#EEE8DD]/50 group-hover/btn:shadow-[0_0_20px_rgba(238,232,221,0.15)] transition-all duration-300">
                                    {/* X Logo SVG */}
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#E6DECF] group-hover/btn:text-[#EEE8DD] transition-colors">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-muted-foreground group-hover/btn:text-[#EEE8DD] transition-colors">X / Twitter</span>
                            </a>

                            {/* Divider (Hidden on mobile) */}
                            <div className="hidden md:block w-px h-16 bg-white/10" />

                            {/* LinkedIn Button */}
                            <a
                                href="https://www.linkedin.com/company/kenet-technologies"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn relative flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-105"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/btn:border-[#EEE8DD]/50 group-hover/btn:shadow-[0_0_20px_rgba(238,232,221,0.15)] transition-all duration-300">
                                    <Linkedin className="w-7 h-7 text-[#E6DECF] group-hover/btn:text-[#EEE8DD] transition-colors" />
                                </div>
                                <span className="text-sm font-medium text-muted-foreground group-hover/btn:text-[#EEE8DD] transition-colors">LinkedIn</span>
                            </a>

                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default ContactSection;
