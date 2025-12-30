"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";

export function AnimatedGrain({ opacity = 0.05 }: { opacity?: number }) {
    return (
        <div
            className="absolute inset-0 z-[1] pointer-events-none mix-blend-overlay"
            style={{ opacity }}
        >
            <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-[0.4]" />
        </div>
    );
}

export function AnimatedBackground() {
    const mouseY = useMotionValue(0);
    const mouseX = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = clientX / innerWidth;
        const y = clientY / innerHeight;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <div
            className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#0a0e27] via-[#0f1429] to-[#0a0e27]"
            onMouseMove={handleMouseMove}
        >
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern
                            id="grid"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                        >
                            <circle cx="2" cy="2" r="1.5" fill="white" opacity="0.4">
                                <animate
                                    attributeName="opacity"
                                    values="0.2;0.6;0.2"
                                    dur="3s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Animated Grid Lines */}
            <div className="absolute inset-0 opacity-20">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                    }}
                    animate={{
                        backgroundPosition: ['0px 0px', '40px 40px'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            </div>

            {/* Animated Dots Pattern */}
            <div className="absolute inset-0">
                {Array.from({ length: 100 }).map((_, i) => {
                    const x = (i * 7.5) % 100;
                    const y = Math.floor((i * 7.5) / 100) * 7.5;
                    return (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                                left: `${x}%`,
                                top: `${y}%`,
                            }}
                            animate={{
                                opacity: [0.2, 0.6, 0.2],
                                scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                                duration: 2 + (i % 3),
                                repeat: Infinity,
                                delay: (i * 0.1) % 3,
                                ease: 'easeInOut',
                            }}
                        />
                    );
                })}
            </div>

            {/* Dark Blue Gradient Overlays */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1a1f3a]/50 via-transparent to-[#0f1429]/50"
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Subtle Animated Orbs */}
            <motion.div
                className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full blur-[100px] bg-blue-500/10"
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, -30, 30, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full blur-[80px] bg-purple-500/10"
                animate={{
                    x: [0, -40, 40, 0],
                    y: [0, 40, -40, 0],
                    scale: [1, 0.8, 1.1, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
}

function Orb({ mouseX, mouseY }: { mouseX: any, mouseY: any }) {
    // Subtle parallax effect based on mouse position
    const x = useTransform(mouseX, [0, 1], [-50, 50]);
    const y = useTransform(mouseY, [0, 1], [-50, 50]);

    return (
        <motion.div
            className="absolute top-1/2 left-1/2 w-[40vw] h-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] opacity-20 bg-gradient-to-r from-brand-red to-brand-navy mix-blend-overlay pointer-events-none"
            style={{ x, y }}
        />
    );
}
