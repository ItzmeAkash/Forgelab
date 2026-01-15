"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { cn } from "@/lib/utils";

function getTitleAnimation(direction: "in" | "out", index: number, total: number) {
    const delay = direction === "out" ? (total - index - 1) * 0.03 : index * 0.04;

    return {
        initial: { opacity: 0, y: direction === "out" ? 0 : -50 },
        animate: { opacity: direction === "out" ? 0 : 1, y: direction === "out" ? 50 : 0 },
        transition: { duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] as const }
    };
}

export interface AnimatedTextProps {
    text: string;
    className?: string;
    direction?: "in" | "out";
}

export const AnimatedText = memo(function AnimatedText({ text, className, direction = "in" }: AnimatedTextProps) {
    const letters = text.split("");

    return (
        <span className={cn("inline-block", className)}>
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
});

export interface AnimatedDescriptionProps {
    text: string;
    className?: string;
    direction?: "in" | "out";
}

export const AnimatedDescription = memo(function AnimatedDescription({ text, className, direction = "in" }: AnimatedDescriptionProps) {
    return (
        <motion.span
            className={cn("inline-block", className)}
            initial={{ opacity: 0 }}
            animate={{ opacity: direction === "out" ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
            {text}
        </motion.span>
    );
});

