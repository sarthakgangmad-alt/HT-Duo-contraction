import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Ruler, LayoutTemplate, ShieldCheck, Users, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LiquidMetalButton } from '../components/ui/LiquidMetal';

const coreValues = [
    {
        title: "Integrity",
        icon: ShieldCheck,
        description: "We build with honesty. No cut corners, just solid construction that stands the test of time.",
        image: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Precision",
        icon: Ruler,
        description: "Attention to detail is our signature. From framing to finishing, everything is measured and exact.",
        image: "https://images.unsplash.com/photo-1581094794329-cd11965d152a?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Client Focus",
        icon: Users,
        description: "We work for you. Communication is constant, and your vision is our priority.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2690&auto=format&fit=crop"
    }
];

export default function About() {
    const [hoveredValue, setHoveredValue] = useState(null);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-[#0F2B46] text-white py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        About <span className="text-[#C5A059]">HT Duo</span>
                    </motion.h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
                        Premium Residential & Outdoor Construction in Ontario.
                    </p>
                </div>
            </div>

            {/* Introduction */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h4 className="text-[#C5A059] font-bold uppercase tracking-widest text-sm mb-6">Our Story</h4>
                        <h2 className="text-4xl font-bold text-[#0F2B46] mb-8 leading-tight">
                            Building Trust Through Quality Craftsmanship
                        </h2>
                        <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                            <p>
                                <span className="font-bold text-[#0F2B46]">HT Duo Construction</span> is a premier construction firm based in Maple, Ontario.
                                We specialize in high-end backend transformations, structural framing, and custom residential renovations.
                            </p>
                            <p>
                                Founded on the principles of integrity and precision, we treat every project—whether a deck, a patio, or a complete home addition—with the same level of care and professional oversight.
                            </p>
                            <p>
                                Our goal is simple: to create outdoor and indoor living spaces that you will love for years to come.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                        <h3 className="text-2xl font-bold text-[#0F2B46] mb-8">Why Choose HT Duo?</h3>
                        <ul className="space-y-6">
                            {[
                                'Specialized in Luxury Outdoor Living',
                                'Structural Integrity Guarantee',
                                'Transparent Pricing & Timelines',
                                'Fully Licensed & Insured Team',
                                'Serving Maple, Vaughan & GTA'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center">
                                    <CheckCircle2 className="text-[#C5A059] mr-4 flex-shrink-0" size={24} />
                                    <span className="text-slate-800 font-semibold text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 pt-10 border-t border-slate-200">
                            <div className="flex items-center space-x-4">
                                <MapPin className="text-[#C5A059] flex-shrink-0" size={24} />
                                <div className="text-[#0F2B46] font-bold">
                                    <p className="uppercase text-xs tracking-widest text-slate-400 mb-1">Located At</p>
                                    <p className="text-lg">84 Tania Crescent</p>
                                    <p>Maple, ON L6A 2M8</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values with Hover Image Reveal */}
            <div className="bg-[#f8fafc] py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-4">Our Core Values</h2>
                        <div className="w-24 h-1 bg-[#C5A059] mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={index}
                                onMouseEnter={() => setHoveredValue(index)}
                                onMouseLeave={() => setHoveredValue(null)}
                                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:translate-y-[-5px] transition-transform duration-300 relative z-20 cursor-default"
                            >
                                <div className="w-16 h-16 bg-[#0F2B46] rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                                    <value.icon className="text-white" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-[#0F2B46] mb-3">{value.title}</h3>
                                <p className="text-slate-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Floating Image Reveal */}
                {coreValues.map((value, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: hoveredValue === index ? 0.15 : 0,
                            scale: hoveredValue === index ? 1 : 0.8,
                            x: hoveredValue === index ? (index === 0 ? '-20%' : index === 2 ? '20%' : '0%') : 0
                        }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
                    >
                        <img
                            src={value.image}
                            alt={value.title}
                            className="w-full h-full object-cover sm:w-[500px] sm:h-[500px] rounded-full blur-sm"
                        />
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <div className="bg-[#0F2B46] py-20 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Work With The Best</h2>
                    <Link to="/contact">
                        <LiquidMetalButton
                            size="lg"
                            metalConfig={{ colorBack: '#C5A059', colorTint: '#eab308' }}
                            className="font-bold text-[#0F2B46]"
                        >
                            Get Started
                        </LiquidMetalButton>
                    </Link>
                </div>
            </div>
        </div>
    );
}
