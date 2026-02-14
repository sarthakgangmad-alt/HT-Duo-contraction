import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    'All Projects',
    'Residential Construction',
    'Residential Renovations',
    'Home Additions',
    'Commercial'
];

const projects = [
    {
        id: 1,
        title: 'Lakeside Modern Estate',
        category: 'Residential Construction',
        location: 'Toronto, ON',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
        size: '4,500 sq ft',
        completion: '2025',
        link: '/project/lakeside-modern'
    },
    {
        id: 2,
        title: 'Urban Office Fit-out',
        category: 'Commercial',
        location: 'Mississauga, ON',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop',
        size: '12,000 sq ft',
        completion: '2024',
        link: '/project/urban-office'
    },
    {
        id: 3,
        title: 'Heritage Home Restoration',
        category: 'Residential Renovations',
        location: 'Oakville, ON',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
        size: '2,800 sq ft',
        completion: '2024',
        link: '/project/heritage-restoration'
    },
    {
        id: 4,
        title: 'Second Story Expansion',
        category: 'Home Additions',
        location: 'Etobicoke, ON',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop',
        size: '1,200 sq ft added',
        completion: '2025',
        link: '/project/expansion'
    },
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('All Projects');

    const filteredProjects = activeCategory === 'All Projects'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-white pt-20 pb-24">
            <div className="bg-[#0F2B46] text-white py-20 mb-12 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-6"
                    >
                        Our <span className="text-[#C5A059]">Work</span>
                    </motion.h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
                        A selection of our recent construction and renovation projects.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat
                                ? 'bg-[#C5A059] text-[#0F2B46] shadow-lg'
                                : 'bg-white text-slate-600 border border-slate-200 hover:border-[#C5A059] hover:text-[#C5A059]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            key={project.id}
                            className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
                        >
                            <Link to={project.link} className="block w-full h-full">
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B46]/90 via-[#0F2B46]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="bg-[#C5A059] w-fit active:bg-[#C5A059] px-3 py-1 rounded text-xs font-bold uppercase text-[#0F2B46] mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {project.category}
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                    <div className="flex items-center text-slate-300 text-sm space-x-4 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                        <span>{project.location}</span>
                                        <span>•</span>
                                        <span>{project.size}</span>
                                        <span>•</span>
                                        <span>{project.completion}</span>
                                    </div>

                                    <div className="flex items-center text-white font-bold uppercase tracking-wider text-sm border-b border-transparent group-hover:border-[#C5A059] w-fit pb-1 transition-all">
                                        View Case Study <ArrowUpRight className="ml-2 w-4 h-4 text-[#C5A059]" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
