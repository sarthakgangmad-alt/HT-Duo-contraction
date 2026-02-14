import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, MapPin, Calendar, Ruler, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LiquidMetalButton } from '../components/ui/LiquidMetal';

export default function ProjectLakeside() {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-[#0F2B46]/40 z-10" />
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
                    alt="Lakeside Modern Estate"
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
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Lakeside Modern Estate</h1>
                        <p className="text-xl text-slate-200 uppercase tracking-widest font-light">Toronto, ON</p>
                    </motion.div>
                </div>
            </div>

            {/* Project Specs Grid */}
            <div className="bg-[#0F2B46] text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Project Type', value: 'Residential Build', icon: Building2 },
                            { label: 'Location', value: 'Toronto, ON', icon: MapPin },
                            { label: 'Size', value: '4,500 sq ft', icon: Ruler },
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
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">Redefining Lakeside Luxury</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        The Lakeside Modern Estate stands as a testament to contemporary design harmonizing with natural surroundings.
                        Situated on the shores of Lake Ontario, this 4,500 square foot residence was conceived to blur the boundaries
                        between indoor comfort and the rugged beauty of the waterfront. The project emphasizes clean architectural lines,
                        expansive glazing, and a seamless flow that invites the outdoors in, all while maintaining the structural
                        integrity required for a lakeside environment.
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
                        <h3 className="text-2xl font-bold text-[#0F2B46] mb-4">The Vision</h3>
                        <p className="text-slate-600 mb-6">
                            Our client sought a sanctuary that felt modern yet timeless—a minimalist backdrop for family life that didn't compromise on warmth.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'A distinct modern, minimalist aesthetic',
                                'Maximum natural light via floor-to-ceiling glass',
                                'Deep connection with the surrounding landscape',
                                'Premium finishing materials with long-term durability'
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
                            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
                            alt="Lakeside Modern Interior"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#0F2B46]/10 group-hover:bg-transparent transition-colors duration-700" />
                    </div>
                </motion.section>

                {/* divider */}
                <hr className="border-slate-200" />

                {/* 3. Design & Planning */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-[#0F2B46] mb-6">Design & Engineering Approach</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Achieving the "floating" aesthetic of the cantilevered terraces required advanced structural engineering.
                        We utilized a reinforced steel skeleton integrated with concrete shear walls to support the expansive glass curtain walls without compromising stability.
                        Material selection focused on weathering the lakeside elements: marine-grade stainless steel, treated cedar cladding, and triple-paned thermal glass were chosen for their resilience and performance.
                    </p>
                </motion.section>

                {/* 4. Construction Challenges */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
                >
                    <h3 className="text-2xl font-bold text-[#0F2B46] mb-6">Overcoming Challenges</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-bold text-[#0F2B46] mb-2">Landscape Preservation</h4>
                            <p className="text-sm text-slate-600">
                                Strictly preserved three century-old oaks on the property by hand-digging foundation pilings near critical root zones.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#0F2B46] mb-2">Precision Glazing</h4>
                            <p className="text-sm text-slate-600">
                                Installation of 12-foot glass panels required custom crane logistics to navigate the sloping site terrain safely.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#0F2B46] mb-2">Structural Integration</h4>
                            <p className="text-sm text-slate-600">
                                Seamlessly hiding HVAC and structural columns within the minimalist framework to maintain clean sightlines.
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
                        The Lakeside Modern Estate is more than a home; it is a masterpiece of modern engineering and design.
                        The open-concept layout flows effortlessly from the gourmet kitchen to the double-height living area,
                        spilling out onto the stone terraces. Warm white oak flooring contrasts with cool concrete accents, creating a balance of aesthetics and performance.
                        The project was delivered on schedule, exceeding the client's expectations for both luxury and livability.
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
                            'Custom architectural cantilever design',
                            'High-performance thermal envelope',
                            'Smart home integration (Light, Climate, Security)',
                            'Hydronic radiant floor heating throughout',
                            'Imported Italian cabinetry and millwork',
                            'Sustainable stormwater management system'
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
                        <Building2 size={48} className="mx-auto text-[#C5A059] mb-6" />
                        <h3 className="text-3xl font-bold mb-4">Built with Precision. Delivered with Pride.</h3>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            HT Duo Construction brings this level of dedication and detail to every project we undertake.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/contact">
                                <LiquidMetalButton
                                    size="lg"
                                    icon={<ArrowRight className="w-5 h-5" />}
                                    metalConfig={{ colorBack: '#C5A059', colorTint: '#E5C079' }}
                                    className="font-bold text-lg text-[#0F2B46]"
                                >
                                    Start Your Project
                                </LiquidMetalButton>
                            </Link>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
