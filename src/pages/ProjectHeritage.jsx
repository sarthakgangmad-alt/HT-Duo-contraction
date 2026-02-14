import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, MapPin, Calendar, Ruler, Building2, ArrowRight, PaintBucket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LiquidMetalButton } from '../components/ui/LiquidMetal';

export default function ProjectHeritage() {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-[#0F2B46]/40 z-10" />
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
                    alt="Heritage Home Restoration"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end pb-16 px-4 sm:px-6 lg:px-8 z-20 max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link to="/portfolio" className="inline-flex items-center text-white/80 hover:text-white mb-6 uppercase tracking-wider text-sm font-bold transition-colors">
                            <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Heritage Home Restoration</h1>
                        <p className="text-xl text-slate-200 uppercase tracking-widest font-light">Oakville, ON</p>
                    </motion.div>
                </div>
            </div>

            {/* Project Specs Grid */}
            <div className="bg-[#0F2B46] text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Project Type', value: 'Restoration', icon: PaintBucket },
                            { label: 'Location', value: 'Oakville, ON', icon: MapPin },
                            { label: 'Size', value: '2,800 sq ft', icon: Ruler },
                            { label: 'Completion', value: '2024', icon: Calendar },
                        ].map((spec, i) => (
                            <motion.div
                                key={spec.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center md:items-start md:text-left border-l border-[#1a3c5e] pl-6"
                            >
                                <spec.icon className="text-[#C5A059] mb-3" size={24} />
                                <span className="text-slate-400 text-sm uppercase tracking-wider mb-1">{spec.label}</span>
                                <span className="text-lg font-bold">{spec.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-20">

                {/* 1. Project Overview */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#C5A059] font-bold uppercase tracking-wider text-sm block mb-3">Overview</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">Preserving History, Enhancing Life</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        The Heritage Home Restoration project involved the sensitive rehabilitation of a century-old residence in Oakville's historic district.
                        Our mission was to preserve the building's architectural soul—its masonry, intricate woodwork, and character—while subtly integrating
                        modern structural reinforcements and state-of-the-art building systems. The result is a seamless blend of old-world charm and contemporary comfort.
                    </p>
                </motion.section>

                {/* 2. Client Goals */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h3 className="text-2xl font-bold text-[#0F2B46] mb-4">Client Goals</h3>
                        <p className="text-slate-600 mb-6">
                            The homeowners cherished the property's history but required modern functionality for their growing family.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Restore original masonry and woodwork details',
                                'Open up cramped interiors for better flow',
                                'Modernize electrical, plumbing, and HVAC systems',
                                'Ensure structural stability for another 100 years',
                                'Update kitchen and baths without clashing styles'
                            ].map((req, i) => (
                                <li key={i} className="flex items-start">
                                    <div className="bg-[#C5A059]/20 p-1 rounded-full mr-3 mt-1">
                                        <CheckCircle2 size={16} className="text-[#C5A059]" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="h-[400px] rounded-2xl overflow-hidden relative shadow-lg group">
                        <img
                            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2574&auto=format&fit=crop"
                            alt="Restored Heritage Interior"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#0F2B46]/10 group-hover:bg-transparent transition-colors duration-700" />
                    </div>
                </motion.section>

                {/* divider */}
                <hr className="border-slate-200" />

                {/* 3. Restoration Approach */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-[#0F2B46] mb-6">Restoration Approach</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        We adopted a philosophy of "invisible intervention." Structural steel beams were carefully inserted to replace load-bearing walls,
                        creating an open-concept living area without altering the exterior footprint. Original hardwood floors were salvaged, repaired, and refinished.
                        Where new materials were introduced, such as in the chef's kitchen, we chose natural stones and classic profiles that pay homage to the home's era
                        while offering modern durability.
                    </p>
                </motion.section>

                {/* 4. Challenges & Craftsmanship */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
                >
                    <h3 className="text-2xl font-bold text-[#0F2B46] mb-6">Challenges & Craftsmanship</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-bold text-[#0F2B46] mb-2">Structural Stabilization</h4>
                            <p className="text-sm text-slate-600">
                                Shored up sagging floor joists and reinforced the original stone foundation to correct decades of settling.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#0F2B46] mb-2">Matching Historic Trim</h4>
                            <p className="text-sm text-slate-600">
                                Our master carpenters custom-milled new baseboards and crown molding to perfectly match profiles from 1920.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#0F2B46] mb-2">Systems Integration</h4>
                            <p className="text-sm text-slate-600">
                                Retrofitted high-velocity HVAC and smart wiring into existing wall cavities to minimize damage to original plaster.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* 5. Final Result */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-[#0F2B46] mb-6">The Result</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        The restored home stands as a proud example of Oakville's heritage. It now functions as a fully modern residence,
                        warm and energy-efficient, yet it retains the creak of authentic floors and the grandeur of high ceilings.
                        The owners have a space that honors the past while fully embracing the comforts of the present.
                    </p>
                </motion.section>

                {/* 6. Key Highlights (grid) */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-bold text-[#0F2B46] mb-6 uppercase tracking-wider">Project Highlights</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            'Heritage facade restoration',
                            'Custom millwork reproduction',
                            'Open-concept structural modification',
                            'Energy-efficient window upgrade (historic profile)',
                            'Foundation waterproofing and reinforcement',
                            'Restored original hardwood flooring'
                        ].map((highlight, i) => (
                            <div key={i} className="flex items-center bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                <div className="w-2 h-2 bg-[#C5A059] rounded-full mr-3" />
                                <span className="text-slate-700 font-medium">{highlight}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Closing */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#0F2B46] text-white p-12 rounded-3xl text-center mt-12 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.2),transparent_50%)]" />
                    <div className="relative z-10">
                        <PaintBucket size={48} className="mx-auto text-[#C5A059] mb-6" />
                        <h3 className="text-3xl font-bold mb-4">Respect for the Past. Built for the Future.</h3>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            Trust HT Duo Construction with your complex renovation and restoration projects.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/contact">
                                <LiquidMetalButton
                                    size="lg"
                                    icon={<ArrowRight className="w-5 h-5" />}
                                    metalConfig={{ colorBack: '#C5A059', colorTint: '#E5C079' }}
                                    className="font-bold text-lg text-[#0F2B46]"
                                >
                                    Schedule a Consultation
                                </LiquidMetalButton>
                            </Link>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
