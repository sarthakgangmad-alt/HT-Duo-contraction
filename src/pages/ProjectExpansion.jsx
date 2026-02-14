import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, MapPin, Calendar, Ruler, Building2, ArrowRight, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LiquidMetalButton } from '../components/ui/LiquidMetal';

export default function ProjectExpansion() {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-[#0F2B46]/40 z-10" />
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
                    alt="Second Story Expansion"
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
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Second Story Expansion</h1>
                        <p className="text-xl text-slate-200 uppercase tracking-widest font-light">Etobicoke, ON</p>
                    </motion.div>
                </div>
            </div>

            {/* Project Specs Grid */}
            <div className="bg-[#0F2B46] text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Project Type', value: 'Expansion', icon: Hammer },
                            { label: 'Location', value: 'Etobicoke, ON', icon: MapPin },
                            { label: 'Area Added', value: '1,200 sq ft', icon: Ruler },
                            { label: 'Completion', value: '2025', icon: Calendar },
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
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">Elevating Scale, Expanding Possibilities</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        The Second Story Expansion project was a technically complex structural undertaking designed to double the
                        liveable square footage of an existing bungalow. The goal was to transform a modest single-story home into
                        a spacious, modern two-story residence without compromising the structural integrity of the original foundation
                        or disrupting the home's aesthetic continuity within the neighborhood.
                    </p>
                </motion.section>

                {/* 2. Client Requirements */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h3 className="text-2xl font-bold text-[#0F2B46] mb-4">Client Requirements</h3>
                        <p className="text-slate-600 mb-6">
                            The clients needed significant additional space for a growing family but did not want to sacrifice their backyard by building outward.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Add a full second floor with 3 bedrooms and 2 baths',
                                'Ensure seamless visual integration with the existing floor',
                                'Modernize the interior design and finishes',
                                'Maximize ceiling height on the new upper level',
                                'Maintain occupancy during initial phases if possible'
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
                            src="https://images.unsplash.com/photo-1512918760513-95f192972701?q=80&w=2670&auto=format&fit=crop"
                            alt="Modern Staircase Addition"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#0F2B46]/10 group-hover:bg-transparent transition-colors duration-700" />
                    </div>
                </motion.section>

                {/* divider */}
                <hr className="border-slate-200" />

                {/* 3. Engineering & Construction Approach */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-[#0F2B46] mb-6">Engineering & Construction Approach</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Before vertical construction could begin, we performed a comprehensive underpinning of the existing foundation to support the increased load.
                        We utilized engineered LVL (Laminated Veneer Lumber) beams and steel columns to create a robust exoskeleton.
                        The roof was surgically removed, and a prefabricated wall system was craned into place to reduce weather exposure and accelerate the framing schedule.
                        This precision-first approach ensured that the new addition sat perfectly atop the existing structure.
                    </p>
                </motion.section>

                {/* 4. Challenges & Solutions */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
                >
                    <h3 className="text-2xl font-bold text-[#0F2B46] mb-6">Challenges & Solutions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-bold text-[#0F2B46] mb-2">Load Bearing Limits</h4>
                            <p className="text-sm text-slate-600">
                                Existing walls couldn't support a second floor. We integrated steel posts within existing walls to transfer loads directly to new footings.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#0F2B46] mb-2">Weather Protection</h4>
                            <p className="text-sm text-slate-600">
                                With the roof removed, we utilized a custom scaffolding and tarp system to keep the main floor dry and protected during storms.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#0F2B46] mb-2">Staircase Integration</h4>
                            <p className="text-sm text-slate-600">
                                Designed a compact, open-riser staircase that acts as a sculptural element, connecting floors without eating up valuable floor space.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* 5. Final Outcome */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-[#0F2B46] mb-6">The Result</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        The transformation is unrecognizable in the best way possible. The home now boasts a commanding street presence and a light-filled interior
                        that feels completely brand new. The transition between the old and new floors is seamless, united by consistent flooring and trim work.
                        The addition has not only doubled the family's living space but also significantly increased the property value.
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
                            '1,200 sq ft added vertical space',
                            'Structural steel reinforcement',
                            'Seamless exterior siding integration',
                            'New HVAC zones for upper levels',
                            'Custom open-riser oak staircase',
                            'Increased ceiling height to 9 feet'
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
                        <Hammer size={48} className="mx-auto text-[#C5A059] mb-6" />
                        <h3 className="text-3xl font-bold mb-4">Expand Up. Build Smart.</h3>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            Add value and space to your home with HT Duo Construction's expert addition services.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/contact">
                                <LiquidMetalButton
                                    size="lg"
                                    icon={<ArrowRight className="w-5 h-5" />}
                                    metalConfig={{ colorBack: '#C5A059', colorTint: '#E5C079' }}
                                    className="font-bold text-lg text-[#0F2B46]"
                                >
                                    Request an Estimate
                                </LiquidMetalButton>
                            </Link>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
