import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, CheckCircle2, LayoutTemplate, Zap, Users, ArrowLeft, MapPin, Ruler, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LiquidMetalButton } from '../components/ui/LiquidMetal';

export default function ProjectUrbanOffice() {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-[#0F2B46]/40 z-10" />
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
                    alt="Urban Office Fit-out"
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
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Urban Office Fit-out</h1>
                        <p className="text-xl text-slate-200 uppercase tracking-widest font-light">Mississauga, ON</p>
                    </motion.div>
                </div>
            </div>

            {/* Project Specs Grid */}
            <div className="bg-[#0F2B46] text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Project Type', value: 'Commercial Fit-out', icon: Briefcase },
                            { label: 'Location', value: 'Mississauga, ON', icon: MapPin },
                            { label: 'Size', value: '12,000 sq ft', icon: Ruler },
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
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B46] mb-6">Modern Workspace Transformation</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        The Urban Office Fit-out project represents a strategic transformation of a standard commercial shell into a
                        dynamic hub for productivity and collaboration. Designed for a growing tech-forward company, the space emphasizes
                        clean lines, functional zoning, and a strong corporate identity. The fit-out integrates modern amenities with
                        strategic acoustic planning to create an environment that supports both focused work and team interaction.
                    </p>
                </motion.section>

                {/* 2. Client Objectives */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h3 className="text-2xl font-bold text-[#0F2B46] mb-4">Client Objectives</h3>
                        <p className="text-slate-600 mb-6">
                            The client required a turnkey solution that balanced aesthetic appeal with operational efficiency, all within a strict timeline.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Create a professional, modern corporate environment',
                                'Maximize space efficiency for 50+ employees',
                                'Minimize disruption to neighboring tenants',
                                'Implement durable, high-traffic finishes',
                                'Integrate advanced IT and electrical infrastructure'
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
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2574&auto=format&fit=crop"
                            alt="Modern Office Interior"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#0F2B46]/10 group-hover:bg-transparent transition-colors duration-700" />
                    </div>
                </motion.section>

                {/* divider */}
                <hr className="border-slate-200" />

                {/* 3. Design & Execution Strategy */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-[#0F2B46] mb-6">Design & Execution Strategy</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Our approach centered on "Zoned Functionality." We situated open-plan work areas near perimeter windows to maximize natural light,
                        while placing meeting rooms and private offices toward the core. Material selection focused on commercial-grade acoustics and durability:
                        double-glazed partitions for privacy, modular carpet tiles for easy maintenance, and integrated LED linear lighting for consistent illumination.
                        Mechanical and electrical systems were extensively reconfigured to support the new high-density layout.
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
                            <h4 className="font-bold text-[#0F2B46] mb-2">Active Building Logistics</h4>
                            <p className="text-sm text-slate-600">
                                Executed noisy work off-hours and utilized dedicated service elevators to ensure zero disruption to other building tenants.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#0F2B46] mb-2">Accelerated Timeline</h4>
                            <p className="text-sm text-slate-600">
                                Employed a staggered trade schedule, allowing framing, electrical, and HVAC teams to work concurrently in different zones.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#0F2B46] mb-2">Supply Chain Constraints</h4>
                            <p className="text-sm text-slate-600">
                                Pre-ordered critical long-lead items like glazing and custom millwork well in advance to prevent schedule slippage.
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
                        The completed office is a sleek, modern workspace that perfectly reflects the client's forward-thinking brand.
                        The layout flows naturally, encouraging collaboration in breakout areas while providing quiet zones for focused tasks.
                        Employee comfort has been significantly improved through ergonomic design and acoustic control. The project
                        was handed over on time and on budget, ready for immediate occupancy.
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
                            'Full turnkey office fit-out',
                            'Intelligent space planning for 50+ staff',
                            'Acoustic glass meeting pods',
                            'High-efficiency LED lighting capability',
                            'Custom reception millwork',
                            'Delivered in 12 weeks'
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
                        <Briefcase size={48} className="mx-auto text-[#C5A059] mb-6" />
                        <h3 className="text-3xl font-bold mb-4">Expert Commercial Solutions.</h3>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            From retail to corporate offices, HT Duo Construction delivers spaces that work for your business.
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
