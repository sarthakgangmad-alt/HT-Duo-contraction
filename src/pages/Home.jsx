import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Ruler, Clock, Star, Hammer, Layers, Layout, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LiquidMetalButton } from '../components/ui/LiquidMetal';
import TestimonialCarousel from '../components/TestimonialCarousel';

export default function Home() {
    const canvasRef = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const totalOriginalFrames = 151;
    const frameStep = 2; // Skip every other frame to reduce load (75 frames total)
    const frameInterval = 60; // Slightly slower to compensate for skipped frames (~16fps)

    // Store loaded images in a ref to avoid re-renders
    const imagesCache = useRef([]);

    // Preload Images
    useEffect(() => {
        let isMounted = true;
        const loadImages = async () => {
            const promises = [];
            // Generate list of frames to load (1, 3, 5, ...)
            for (let i = 1; i <= totalOriginalFrames; i += frameStep) {
                promises.push(new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = `/sequence-2/ezgif-frame-${String(i).padStart(3, '0')}.png`;
                    img.onload = () => resolve({ index: i, img });
                    img.onerror = () => resolve({ index: i, img: null }); // Don't fail all if one fails
                }));
            }

            try {
                const results = await Promise.all(promises);
                if (!isMounted) return;

                // Store in cache: key = frameIndex, value = img object
                // We map loaded frames to a continuous array for easy looping
                const loaded = results
                    .filter(r => r.img !== null)
                    .sort((a, b) => a.index - b.index)
                    .map(r => r.img);

                imagesCache.current = loaded;
                setImagesLoaded(true);
            } catch (err) {
                console.error("Failed to load sequence", err);
            }
        };

        loadImages();
        return () => { isMounted = false; };
    }, []);

    // Animation Loop (Canvas)
    useEffect(() => {
        if (!imagesLoaded || imagesCache.current.length === 0) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        let lastTime = 0;
        let currentFrameIndex = 0; // Index in the REDUCED cache array

        // Set canvas size to match first image (assuming consistant size)
        // Or fit to container
        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
                // Draw current frame immediately after resize
                drawFrame(currentFrameIndex);
            }
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const drawFrame = (index) => {
            const img = imagesCache.current[index];
            if (!img) return;

            // object-cover logic for canvas
            const w = canvas.width;
            const h = canvas.height;
            const imgRatio = img.width / img.height;
            const canvasRatio = w / h;

            let drawW, drawH, curX, curY;
            if (imgRatio > canvasRatio) {
                drawH = h;
                drawW = h * imgRatio;
                curX = (w - drawW) / 2;
                curY = 0;
            } else {
                drawW = w;
                drawH = w / imgRatio;
                curX = 0;
                curY = (h - drawH) / 2;
            }

            ctx.drawImage(img, curX, curY, drawW, drawH);
        };

        const animate = (time) => {
            if (time - lastTime >= frameInterval) {
                currentFrameIndex = (currentFrameIndex + 1) % imagesCache.current.length;
                drawFrame(currentFrameIndex);
                lastTime = time;
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [imagesLoaded]);

    return (
        <div className="bg-white">
            {/* Optimized Canvas Hero Section */}
            <section className="relative h-screen flex items-center bg-[#0F2B46] text-white overflow-hidden">
                <div className="absolute inset-0 z-0 bg-black">
                    {/* 
                       While loading, show static fallback (Frame 1).
                       Once loaded, show Canvas.
                     */}
                    {!imagesLoaded && (
                        <img
                            src="/sequence-2/ezgif-frame-001.png"
                            alt="Loading..."
                            className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm transition-opacity duration-500"
                        />
                    )}

                    <canvas
                        ref={canvasRef}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B46]/95 via-[#0F2B46]/80 to-transparent z-10 mix-blend-multiply" />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center space-x-3 text-[#C5A059] font-bold uppercase tracking-[0.2em] mb-8 text-sm md:text-base">
                            <span className="w-16 h-0.5 bg-[#C5A059]"></span>
                            <span>Premium Outdoor Living</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                            Building Excellence. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#E5C079]">
                                Crafting Luxury.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-light border-l-4 border-[#C5A059] pl-6">
                            Premium Construction & Backyard Transformations in Ontario. We turn outdoor spaces into luxury retreats.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link to="/contact">
                                <LiquidMetalButton
                                    size="lg"
                                    icon={<ArrowRight className="w-5 h-5" />}
                                    metalConfig={{ colorBack: '#C5A059', colorTint: '#E5C079' }}
                                    className="font-bold uppercase tracking-wider"
                                >
                                    Get a Free Quote
                                </LiquidMetalButton>
                            </Link>
                            <Link to="/portfolio" className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-slate-500 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-[#0F2B46] hover:border-white transition-all rounded-sm">
                                View Our Work
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction / About Snippet */}
            <section className="py-24 bg-white relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C5A059]/10 rounded-full z-0"></div>
                            <h2 className="relative z-10 text-4xl md:text-6xl font-black text-[#0F2B46] mb-8 leading-tight">
                                Quality Without Compromise.
                            </h2>
                        </div>
                        <div>
                            <p className="text-xl text-slate-600 leading-relaxed mb-6 font-light">
                                <span className="font-bold text-[#0F2B46]">HT Duo Construction</span> is a premium construction company based in Maple, Ontario, specializing in backyard upgrades, structural builds, and custom outdoor living spaces.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                We are committed to craftsmanship, professionalism, and delivering projects that exceed expectations. Our team ensures precision, structural integrity, and modern design excellence in every build.
                            </p>
                            <Link to="/about" className="text-[#0F2B46] font-bold uppercase tracking-widest border-b-2 border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors">
                                More About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="py-24 bg-slate-50 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 px-2">
                        <span className="text-[#C5A059] font-bold uppercase tracking-wider text-sm">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0F2B46] mt-3">Premium Services</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Backyard Transformations', desc: 'Complete outdoor makeovers involving grading, hardscaping, and design.', icon: Layout },
                            { title: 'Deck & Patio Construction', desc: 'Custom wood and composite decks, stone patios, and entertainment areas.', icon: Layers },
                            { title: 'Structural Framing', desc: 'Solid framework for additions, gazebos, cabanas, and custom structures.', icon: Ruler },
                            { title: 'Custom Outdoor Spaces', desc: 'Luxury outdoor kitchens, fire pits, and living rooms.', icon: HomeIcon },
                            { title: 'Residential Renovations', desc: 'Interior and exterior home improvements executed with precision.', icon: Hammer },
                            { title: 'Concrete & Interlocking', desc: 'Durable and aesthetic driveways, walkways, and retaining walls.', icon: Layout }
                        ].map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-10 bg-white shadow-sm hover:shadow-2xl transition-all duration-300 group border-l-4 border-transparent hover:border-[#C5A059]"
                            >
                                <div className="w-14 h-14 bg-[#0F2B46]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0F2B46] transition-colors">
                                    <service.icon size={28} className="text-[#0F2B46] group-hover:text-[#C5A059]" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#0F2B46] mb-4">{service.title}</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed text-sm">{service.desc}</p>
                                <Link to="/services" className="text-[#C5A059] font-bold text-xs uppercase tracking-wider flex items-center">
                                    View Service <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-[#0F2B46] relative overflow-hidden z-20">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#163b5e] skew-x-12 translate-x-20 opacity-50" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <span className="text-[#C5A059] font-bold uppercase tracking-wider text-sm">Testimonials</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Client Satisfaction</h2>
                        </div>
                        <div className="hidden md:flex flex-col items-end">
                            <div className="flex text-[#C5A059] mb-2">
                                {[...Array(5)].map((_, i) => <Star key={i} fill="#C5A059" size={24} />)}
                            </div>
                            <p className="text-slate-300 font-medium">5.0 Star Rating</p>
                        </div>
                    </div>

                    <TestimonialCarousel />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white text-center z-20">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-black text-[#0F2B46] mb-8">Ready to Build?</h2>
                    <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-light">
                        Contact HT Duo Construction today for a consultation on your premium residential or outdoor project.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/contact">
                            <LiquidMetalButton
                                size="lg"
                                icon={<ArrowRight className="w-5 h-5" />}
                                metalConfig={{ colorBack: '#0F2B46', colorTint: '#4682B4' }}
                                className="font-bold text-lg px-12"
                            >
                                Get a Quote
                            </LiquidMetalButton>
                        </Link>
                    </div>
                    <div className="mt-8 flex justify-center items-center space-x-2 text-slate-400 text-sm uppercase tracking-widest font-bold">
                        <span>Maple</span>
                        <span className="w-1 h-1 bg-[#C5A059] rounded-full"></span>
                        <span>Vaughan</span>
                        <span className="w-1 h-1 bg-[#C5A059] rounded-full"></span>
                        <span>GTA</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

// ... Additional Code (imports etc handled by write_to_file)
