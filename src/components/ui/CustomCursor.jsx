import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Add class to hide default cursor safely
        document.body.classList.add('custom-cursor-active');

        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
            setIsVisible(true);

            // Check if hovering over clickable element
            const target = e.target;
            const isClickable = target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer');
            setIsHovering(!!isClickable);
        };

        const mouseLeave = () => setIsVisible(false);
        const mouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseleave', mouseLeave);
        window.addEventListener('mouseenter', mouseEnter);

        return () => {
            document.body.classList.remove('custom-cursor-active');
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseleave', mouseLeave);
            window.removeEventListener('mouseenter', mouseEnter);
        };
    }, []);

    // Helper for variants
    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            opacity: 1,
        },
        hover: {
            x: mousePosition.x - 32, // larger offset for larger size
            y: mousePosition.y - 32,
            opacity: 1,
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: 1
        },
        hover: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: 0 // hide dot on hover if we want ring to become the focus? Or keep it.
            // Let's keep dot, but maybe ring expands
        }
    };

    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null; // Don't render on touch devices
    }

    return (
        <>
            {/* Main Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
                style={{
                    width: isHovering ? 64 : 32,
                    height: isHovering ? 64 : 32,
                    backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    borderColor: isHovering ? 'transparent' : 'white',
                    mixBlendMode: 'difference'
                }}
            />
            {/* Center Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
                variants={dotVariants}
                animate="default"
                transition={{
                    type: "spring",
                    stiffness: 1000,
                    damping: 50
                }}
            />
        </>
    );
}
