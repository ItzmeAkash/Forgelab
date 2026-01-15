"use client";

import { motion } from "framer-motion";
import { memo } from "react";

interface GradientCloud {
    width: number;
    height: number;
    opacity: number;
    blur: number;
    colors: string;
    animation: {
        x: number[];
        y: number[];
        scale: number[];
    };
    duration: number;
    delay?: number;
}

const gradientClouds: GradientCloud[] = [
    {
        width: 400,
        height: 300,
        opacity: 0.3,
        blur: 60,
        colors: 'radial-gradient(circle, rgba(217,35,50,0.4) 0%, rgba(217,35,50,0.1) 50%, transparent 100%)',
        animation: {
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.9, 1],
        },
        duration: 15,
    },
    {
        width: 350,
        height: 280,
        opacity: 0.25,
        blur: 70,
        colors: 'radial-gradient(circle, rgba(14,27,77,0.4) 0%, rgba(14,27,77,0.1) 50%, transparent 100%)',
        animation: {
            x: [0, -60, 40, 0],
            y: [0, 50, -35, 0],
            scale: [1, 0.8, 1.3, 1],
        },
        duration: 18,
        delay: 2,
    },
    {
        width: 450,
        height: 320,
        opacity: 0.2,
        blur: 80,
        colors: 'radial-gradient(circle, rgba(217,35,50,0.3) 0%, rgba(14,27,77,0.3) 50%, transparent 100%)',
        animation: {
            x: [0, 30, -50, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.1, 0.95, 1],
        },
        duration: 20,
        delay: 4,
    },
    {
        width: 300,
        height: 250,
        opacity: 0.2,
        blur: 50,
        colors: 'radial-gradient(circle, rgba(217,35,50,0.35) 0%, rgba(14,27,77,0.25) 100%)',
        animation: {
            x: [0, -40, 60, 0],
            y: [0, 30, -50, 0],
            scale: [1, 1.15, 0.85, 1],
        },
        duration: 16,
        delay: 1,
    },
];

export const AnimatedGradient = memo(function AnimatedGradient() {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
            {gradientClouds.map((cloud) => (
                <motion.div
                    key={`${cloud.width}-${cloud.height}-${cloud.duration}`}
                    className="absolute rounded-full"
                    style={{
                        width: `${cloud.width}px`,
                        height: `${cloud.height}px`,
                        opacity: cloud.opacity,
                        background: cloud.colors,
                        filter: `blur(${cloud.blur}px)`,
                    }}
                    animate={{
                        x: cloud.animation.x,
                        y: cloud.animation.y,
                        scale: cloud.animation.scale,
                    }}
                    transition={{
                        duration: cloud.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: cloud.delay || 0,
                    }}
                />
            ))}
        </div>
    );
});

