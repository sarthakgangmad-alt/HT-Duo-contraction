import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Hammer, Ruler, Layers, Layout, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LiquidMetalButton } from '../components/ui/LiquidMetal';

const services = [
    {
        title: 'Backyard Transformations',
        icon: Layout,
        description: 'Complete overhaul of your outdoor space, including grading, design, hardscaping, and planting integration for a luxury finish.',
    },
    {
        title: 'Deck & Patio Construction',
        icon: Layers,
        description: 'Custom-designed decks using premium pressure-treated wood, cedar, or composite materials. Stone patio installations.',
    },
    {
        title: 'Residential Renovations',
        icon: Home,
        description: 'Full-service home improvements, from basement finishing to kitchen and bathroom upgrades.',
    },
    {
        title: 'Structural Framing',
        icon: Ruler,
        description: 'Expert framing for new builds, additions, load-bearing wall removal, and outdoor structures like cabanas.',
    },
    {
        title: 'Custom Outdoor Living',
        icon: Home,
        description: 'Create your dream outdoor retreat with custom kitchens, fire features, pergolas, and privacy screens.',
    },
    {
        title: 'Concrete & Interlocking',
        icon: Layout,
        description: 'High-quality concrete work for driveways and walkways. Precision interlocking stone installation.',
    }
];

export default function Services() {
    const sequenceRef = useRef(null);
    const [currentFrame, setCurrentFrame] = useState(1);
    const totalFrames = 26; // Using the provided 26 frames in /public/sequence/

    useEffect(() => {
        let animationFrameId;
        const interval = 80; // Control speed (lower = faster)
        let lastTime = 0;

        const animate = (time) => {
            if (time - lastTime >= interval) {
                setCurrentFrame((prev) => (prev >= totalFrames ? 1 : prev + 1));
                lastTime = time;
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [totalFrames]);

    // Format frame number to match file naming (e.g., 001, 002... 026)
    const getFramePath = (frame) => {
        const paddedIndex = String(frame).padStart(3, '0');
        // Assuming path is /sequence/ezgif-frame-XXX.png based on previous file listing
        return `/sequence/ezgif-frame-${paddedIndex}.png`;
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Image Sequence */}
            <div className="relative h-screen w-full overflow-hidden bg-black">
                {/* Image Sequence Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={getFramePath(currentFrame)}
                        alt="Service Animation"
                        className="w-full h-full object-cover opacity-60"
                    />
                    {/* Preload images to prevent flickering */}
                    <div className="hidden">
                        {[...Array(totalFrames)].map((_, i) => (
                            <img key={i} src={getFramePath(i + 1)} alt="preload" />
                        ))}
                    </div>
                </div>

                <div className="absolute inset-0 bg-[#0F2B46]/80 mix-blend-multiply z-10" />

                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                        >
                            Our <span className="text-[#C5A059]">Expertise</span>
                        </motion.h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                            Delivering precision, durability, and luxury in every project we undertake.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 p-10 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-slate-100 group-hover:border-[#C5A059]/30 transition-colors">
                                <service.icon size={32} className="text-[#0F2B46] group-hover:text-[#C5A059] transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0F2B46] mb-4 group-hover:text-[#C5A059] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <Link to="/contact" className="inline-flex items-center text-[#0F2B46] font-bold uppercase tracking-wider text-sm hover:text-[#C5A059] transition-colors">
                                Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 py-24 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have a Project in Mind?</h2>
                    <p className="text-slate-400 mb-10 text-lg">
                        Let's discuss how HT Duo Construction can bring your vision to life.
                    </p>
                    <Link to="/contact">
                        {/* 
                            Explicitly setting text color to ensure visibility on all backgrounds.
                            If LiquidMetalButton text-inherit is causing issues, this className will override or provide context.
                        */}
                        <LiquidMetalButton
                            size="lg"
                            metalConfig={{ colorBack: '#C5A059', colorTint: '#fb923c' }}
                            className="font-bold text-[#0F2B46]"
                        >
                            Contact Us Today
                        </LiquidMetalButton>
                    </Link>
                </div>
            </div>
        </div>
    );
}
