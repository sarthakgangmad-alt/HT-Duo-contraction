import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { LiquidMetalButton } from '../components/ui/LiquidMetal';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',

        phone: '',
        projectType: '',
        location: '',
        startDate: '',
        description: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { error } = await supabase
                .from('leads')
                .insert([
                    {
                        name: formState.name,

                        phone: formState.phone,
                        project_type: formState.projectType,
                        location: formState.location,
                        start_date: formState.startDate,
                        description: formState.description
                    }
                ]);

            if (error) throw error;

            setIsSubmitting(false);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert(`Error submitting form: ${error.message || error}`);
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const projectTypes = [
        "Residential Construction",
        "Residential Renovation",
        "Home Addition",
        "Commercial Project",
        "Design Services",
        "Other"
    ];

    const startDates = [
        "Within 3 months",
        "3-6 months",
        "6-12 months",
        "Planning phase"
    ];



    return (
        <div className="min-h-screen bg-stone-50 pt-20 pb-24">
            {/* Header */}
            <div className="bg-stone-900 text-white py-20 mb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Get Started
                    </motion.h1>
                    <p className="text-stone-400 text-lg max-w-2xl mx-auto">
                        Ready to bring your vision to life? Submit your project details below, and we will conduct a preliminary assessment before connecting.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Contact Info Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-1 space-y-8"
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
                            <h3 className="text-xl font-bold text-stone-900 mb-6 uppercase tracking-wider">Contact Info</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center shrink-0 mt-1">
                                        <MapPin size={20} />
                                    </div>
                                    <div className="ml-4">
                                        <p className="font-bold text-stone-900 text-sm uppercase mb-1">Office</p>
                                        <p className="text-stone-600">111 Riverview Ave<br />Woodbridge, Ontario, Canada</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center shrink-0 mt-1">
                                        <Phone size={20} />
                                    </div>
                                    <div className="ml-4">
                                        <p className="font-bold text-stone-900 text-sm uppercase mb-1">Phone</p>
                                        <p className="text-stone-600">+1 416-660-3255</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center shrink-0 mt-1">
                                        <Clock size={20} />
                                    </div>
                                    <div className="ml-4">
                                        <p className="font-bold text-stone-900 text-sm uppercase mb-1">Business Hours</p>
                                        <p className="text-stone-600 text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
                                        <p className="text-stone-600 text-sm">Saturday: 9:00 AM - 4:00 PM</p>
                                        <p className="text-stone-600 text-sm">Sunday: Closed</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center shrink-0 mt-1">
                                        <MapPin size={20} />
                                    </div>
                                    <div className="ml-4">
                                        <p className="font-bold text-stone-900 text-sm uppercase mb-1">Website</p>
                                        <p className="text-stone-600">
                                            <a href="http://www.artinacontracting.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
                                                artinacontracting.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-stone-900 text-stone-300 p-8 rounded-2xl">
                            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Service Area</h3>
                            <p className="leading-relaxed mb-4">
                                Toronto | GTA | Ontario
                                <br />
                                Projects outside this radius are evaluated on a case-by-case basis.
                            </p>
                        </div>

                        <div className="rounded-2xl overflow-hidden shadow-sm border border-stone-200 h-64 md:h-80 relative mt-8">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=111%20Riverview%20Ave%2C%20Woodbridge%2C%20Ontario%2C%20Canada+(Artina%20Contracting%20Inc)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                title="Artina Contracting Inc Location"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Inquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2"
                    >
                        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-stone-100">
                            <h2 className="text-2xl font-bold text-stone-900 mb-8 border-b border-stone-100 pb-4">Project Inquiry</h2>

                            <div className="grid grid-cols-1 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                        placeholder="John Doe"
                                        value={formState.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                        placeholder="(555) 123-4567"
                                        value={formState.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">Project Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        required
                                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                        placeholder="City, Neighborhood"
                                        value={formState.location}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">Project Type</label>
                                    <div className="relative">
                                        <select
                                            name="projectType"
                                            required
                                            className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                                            value={formState.projectType}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Select Type...</option>
                                            {projectTypes.map(type => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-stone-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">Estimated Start Date</label>
                                    <div className="relative">
                                        <select
                                            name="startDate"
                                            required
                                            className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                                            value={formState.startDate}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Select Timeline...</option>
                                            {startDates.map(date => (
                                                <option key={date} value={date}>{date}</option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-stone-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">Project Details to Help Us Prepare</label>
                                <textarea
                                    name="description"
                                    required
                                    rows={5}
                                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Tell us about your project specifics, square footage, design style, or any specific requirements..."
                                    value={formState.description}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex justify-center md:justify-start w-full">
                                <LiquidMetalButton
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full md:w-auto"
                                    borderWidth={3}
                                    size="lg"
                                    icon={isSubmitting ? (
                                        <svg className="animate-spin h-5 w-5 text-stone-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : <Send className="w-5 h-5" />}
                                    metalConfig={{
                                        colorBack: '#ea580c',
                                        colorTint: '#fb923c',
                                        speed: 0.5,
                                        repetition: 4
                                    }}
                                >
                                    {isSubmitting ? 'Processing...' : 'Submit Inquiry'}
                                </LiquidMetalButton>
                            </div>

                            <p className="mt-4 text-xs text-stone-500">
                                By submitting this form, you agree to our privacy policy. Your information is kept strictly confidential.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {isSubmitted && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsSubmitted(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center border border-stone-100 overflow-hidden"
                        >
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 size={32} />
                            </div>
                            <h2 className="text-2xl font-bold text-stone-900 mb-3">Submitted Successfully</h2>
                            <p className="text-stone-600 mb-8 leading-relaxed text-sm">
                                Thank you for contacting Artina Contracting Inc. We have received your project details and will respond shortly.
                            </p>

                            <div className="flex justify-center">
                                <LiquidMetalButton
                                    onClick={() => setIsSubmitted(false)}
                                    borderWidth={3}
                                    size="md"
                                    metalConfig={{
                                        colorBack: '#ea580c',
                                        colorTint: '#fb923c',
                                        speed: 0.5,
                                        repetition: 4
                                    }}
                                >
                                    Awesome
                                </LiquidMetalButton>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
