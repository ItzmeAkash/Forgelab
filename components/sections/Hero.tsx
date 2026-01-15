"use client";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { AnimatedText, AnimatedDescription } from "../ui/AnimatedText";
import { AnimatedGradient } from "../ui/AnimatedGradient";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo, useCallback, memo } from "react";

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

export const Hero = memo(function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const textsList = useMemo(() => rotatingTexts, []);

    const handleTransition = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % textsList.length);
            setTimeout(() => setIsTransitioning(false), 100);
        }, 600);
    }, [textsList.length]);

    useEffect(() => {
        const interval = setInterval(handleTransition, 4000);
        return () => clearInterval(interval);
    }, [handleTransition]);

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
                    <AnimatedGradient />

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
                                        text={textsList[(currentIndex - 1 + textsList.length) % textsList.length].title}
                                        direction="out"
                                    />
                                </div>
                            )}
                            <div className="text-brand-red inline-block font-bold tracking-tighter">
                                <AnimatedText
                                    text={textsList[currentIndex].title}
                                    direction="in"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative min-h-[80px] md:min-h-[60px] mb-12 flex items-center justify-center overflow-visible z-10">
                        {isTransitioning && (
                            <p className="text-base md:text-lg text-brand-navy/60 max-w-2xl font-normal font-inter absolute">
                                <AnimatedDescription
                                    text={textsList[(currentIndex - 1 + textsList.length) % textsList.length].description}
                                    direction="out"
                                />
                            </p>
                        )}
                        <p className="text-base md:text-lg text-brand-navy/60 max-w-2xl font-normal font-inter">
                            <AnimatedDescription
                                text={textsList[currentIndex].description}
                                direction="in"
                            />
                        </p>
                    </div>
                </div>
            </Container>

        </Section>
    );
});
