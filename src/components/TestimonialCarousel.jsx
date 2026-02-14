import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        rating: "5.0",
        title: "Outstanding Quality!",
        text: "The quality of the work was outstanding. Very professional and easy to communicate with.",
        name: "Karen",
        role: "Homeowner"
    },
    {
        rating: "5.0",
        title: "Amazing Transformation",
        text: "They upgraded our backyard and it looks amazing. Very professional team.",
        name: "Athina Vio",
        role: "Client"
    },
    {
        rating: "5.0",
        title: "Respectful and Skilled",
        text: "Very happy with my project. The guys were respectful and loyal to their trade.",
        name: "Vladimir Osipyan",
        role: "Client"
    },
    {
        rating: "5.0",
        title: "Professional & Reliable",
        text: "HT Duo Construction delivered exactly what was promised. The attention to detail and structural integrity is unmatched.",
        name: "Michael T.",
        role: "Property Manager"
    }
];

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-slide functionality
    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            nextSlide();
        }, 4000); // 4 seconds

        return () => clearInterval(timer);
    }, [currentIndex, isPaused]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    // Swipe handlers
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <div
            className="w-full max-w-4xl mx-auto px-4 relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="relative h-[450px] md:h-[400px] flex items-center justify-center overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                            scale: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                nextSlide();
                            } else if (swipe > swipeConfidenceThreshold) {
                                prevSlide();
                            }
                        }}
                        className="absolute w-full max-w-2xl bg-[#0F2B46]/95 backdrop-blur-sm border border-[#1a3c5e] p-8 md:p-12 rounded-2xl shadow-xl cursor-grab active:cursor-grabbing text-center"
                    >
                        <Quote className="text-[#C5A059]/20 w-16 h-16 absolute top-8 left-8 -z-10" />

                        <div className="flex justify-center space-x-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} fill="#C5A059" className="text-[#C5A059] w-5 h-5" />
                            ))}
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            {testimonials[currentIndex].title}
                        </h3>

                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                            "{testimonials[currentIndex].text}"
                        </p>

                        <div className="border-t border-[#1a3c5e] pt-6 inline-block w-full">
                            <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                            <p className="text-[#C5A059] font-medium text-sm tracking-wider uppercase">{testimonials[currentIndex].role}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 p-3 bg-[#0F2B46] border border-[#1a3c5e] rounded-full text-slate-400 hover:text-white hover:border-[#C5A059] hover:bg-[#1a3c5e] transition-all z-10 hidden md:block"
                aria-label="Previous testimonial"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 p-3 bg-[#0F2B46] border border-[#1a3c5e] rounded-full text-slate-400 hover:text-white hover:border-[#C5A059] hover:bg-[#1a3c5e] transition-all z-10 hidden md:block"
                aria-label="Next testimonial"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-3 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                            ? "bg-[#C5A059] w-8"
                            : "bg-slate-700 hover:bg-slate-500"
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
