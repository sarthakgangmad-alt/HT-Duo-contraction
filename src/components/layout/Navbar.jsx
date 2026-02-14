import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 items-center">
                    {/* Brand Logo */}
                    <Link to="/" className="flex flex-col">
                        <span className="text-2xl md:text-3xl font-extrabold tracking-tighter text-[#0F2B46] uppercase leading-none">
                            HT Duo
                        </span>
                        <span className="text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase leading-none mt-1">
                            Construction
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="text-slate-600 hover:text-[#0F2B46] font-semibold transition-colors text-sm tracking-widest uppercase relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C5A059] transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-[#0F2B46] text-white px-7 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#C5A059] transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-[#0F2B46] p-2 hover:bg-gray-50 rounded-md transition-colors">
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full top-24 left-0 shadow-2xl z-40">
                    <div className="px-6 py-8 space-y-6 flex flex-col">
                        {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="text-xl text-[#0F2B46] font-bold uppercase tracking-wide border-b border-gray-50 pb-2 hover:text-[#C5A059] transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-[#0F2B46] text-white text-center py-4 text-lg font-bold uppercase tracking-wider hover:bg-[#C5A059] transition-colors mt-4"
                        >
                            Get a Free Quote
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
