"use client";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


const rotatingTexts = [

    {
        title: "Ai-Powered Solutions",
        description: "Transform your daily business processes with intelligent AI solutions designed to streamline operations and drive measurable results."
    },
    {
        title: "Business Intelligence",
        description: "Leverage AI to gain deep insights into your business, make data-driven decisions, and optimize revenue streams with intelligent analytics."
    },
    {
        title: "Digital Future",
        description: "Forgelabs is the all-in-one creative foundry for brand elevation, strategic design, and decentralized future-proofing."
    }
];

function getTitleAnimation(direction: "in" | "out", index: number, total: number) {
    const delay = direction === "out" ? (total - index - 1) * 0.03 : index * 0.04;

    // Drop down when exiting, come from top when entering
    return {
        initial: { opacity: 0, y: direction === "out" ? 0 : -50 },
        animate: { opacity: direction === "out" ? 0 : 1, y: direction === "out" ? 50 : 0 },
        transition: { duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] as const }
    };
}

function AnimatedText({ text, className, direction = "in" }: { readonly text: string; readonly className?: string; readonly direction?: "in" | "out" }) {
    const letters = text.split("");

    return (
        <span className={`inline-block ${className}`}>
            {letters.map((letter, index) => {
                const anim = getTitleAnimation(direction, index, letters.length);
                return (
                    <motion.span
                        key={`${text}-${index}-${direction}`}
                        className="inline-block"
                        initial={anim.initial}
                        animate={anim.animate}
                        transition={anim.transition}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                );
            })}
        </span>
    );
}

function AnimatedDescription({ text, className, direction = "in" }: { readonly text: string; readonly className?: string; readonly direction?: "in" | "out" }) {
    // Simple fade in/out for description
    return (
        <motion.span
            className={`inline-block ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: direction === "out" ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
            {text}
        </motion.span>
    );
}

export function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const startExit = () => setIsTransitioning(true);
        const updateIndex = () => {
            setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
        };
        const endTransition = () => setIsTransitioning(false);

        const handleTransition = () => {
            startExit();
            setTimeout(() => {
                updateIndex();
                setTimeout(endTransition, 100);
            }, 600);
        };

        const interval = setInterval(handleTransition, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-32 pb-20 bg-surface-50">
            {/* Radial Gradient overlay for subtle center brightness */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)] pointer-events-none z-0" />

            {/* Background Gradients (Subtle Light Version) */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px] mix-blend-multiply z-0" />
            <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-brand-navy/5 rounded-full blur-[100px] mix-blend-multiply z-0" />

            <Container className="relative z-10 pt-10">
                <div className="flex flex-col items-center text-center relative">

                    {/* Animated Cloud-like Gradient Backgrounds */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
                        {/* Cloud 1 - Red gradient */}
                        <motion.div
                            className="absolute w-[400px] h-[300px] rounded-full opacity-30"
                            style={{
                                background: 'radial-gradient(circle, rgba(217,35,50,0.4) 0%, rgba(217,35,50,0.1) 50%, transparent 100%)',
                                filter: 'blur(60px)',
                            }}
                            animate={{
                                x: [0, 50, -30, 0],
                                y: [0, -40, 30, 0],
                                scale: [1, 1.2, 0.9, 1],
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        {/* Cloud 2 - Navy gradient */}
                        <motion.div
                            className="absolute w-[350px] h-[280px] rounded-full opacity-25"
                            style={{
                                background: 'radial-gradient(circle, rgba(14,27,77,0.4) 0%, rgba(14,27,77,0.1) 50%, transparent 100%)',
                                filter: 'blur(70px)',
                            }}
                            animate={{
                                x: [0, -60, 40, 0],
                                y: [0, 50, -35, 0],
                                scale: [1, 0.8, 1.3, 1],
                            }}
                            transition={{
                                duration: 18,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2,
                            }}
                        />

                        {/* Cloud 3 - Red-Navy blend */}
                        <motion.div
                            className="absolute w-[450px] h-[320px] rounded-full opacity-20"
                            style={{
                                background: 'radial-gradient(circle, rgba(217,35,50,0.3) 0%, rgba(14,27,77,0.3) 50%, transparent 100%)',
                                filter: 'blur(80px)',
                            }}
                            animate={{
                                x: [0, 30, -50, 0],
                                y: [0, -60, 40, 0],
                                scale: [1, 1.1, 0.95, 1],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 4,
                            }}
                        />

                        {/* Cloud 4 - Smaller accent */}
                        <motion.div
                            className="absolute w-[300px] h-[250px] rounded-full opacity-20"
                            style={{
                                background: 'radial-gradient(circle, rgba(217,35,50,0.35) 0%, rgba(14,27,77,0.25) 100%)',
                                filter: 'blur(50px)',
                            }}
                            animate={{
                                x: [0, -40, 60, 0],
                                y: [0, 30, -50, 0],
                                scale: [1, 1.15, 0.85, 1],
                            }}
                            transition={{
                                duration: 16,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                        />
                    </div>

                    {/* Main Typography */}
                    <motion.div
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-brand-navy mb-8 max-w-6xl leading-[1.1] relative z-10 font-poppins"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        FORGING THE <br />
                        <div className="relative h-[1.2em] inline-flex items-center justify-center overflow-visible min-w-[400px] z-10">
                            {isTransitioning && (
                                <div className="text-brand-red inline-block absolute font-bold tracking-tighter">
                                    <AnimatedText
                                        text={rotatingTexts[(currentIndex - 1 + rotatingTexts.length) % rotatingTexts.length].title}
                                        direction="out"
                                    />
                                </div>
                            )}
                            <div className="text-brand-red inline-block font-bold tracking-tighter">
                                <AnimatedText
                                    text={rotatingTexts[currentIndex].title}
                                    direction="in"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative min-h-[80px] md:min-h-[60px] mb-12 flex items-center justify-center overflow-visible z-10">
                        {isTransitioning && (
                            <p className="text-base md:text-lg text-brand-navy/60 max-w-2xl font-normal font-inter absolute">
                                <AnimatedDescription
                                    text={rotatingTexts[(currentIndex - 1 + rotatingTexts.length) % rotatingTexts.length].description}
                                    direction="out"
                                />
                            </p>
                        )}
                        <p className="text-base md:text-lg text-brand-navy/60 max-w-2xl font-normal font-inter">
                            <AnimatedDescription
                                text={rotatingTexts[currentIndex].description}
                                direction="in"
                            />
                        </p>
                    </div>
                </div>
            </Container>

        </Section>
    );
}
