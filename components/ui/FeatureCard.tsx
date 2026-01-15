"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { memo } from "react";
import { cn } from "@/lib/utils";

export interface FeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    index?: number;
    className?: string;
    delay?: number;
    viewportOnce?: boolean;
}

export const FeatureCard = memo(function FeatureCard({
    title,
    description,
    icon: Icon,
    index = 0,
    className,
    delay = 0.1,
    viewportOnce = true,
}: FeatureCardProps) {
    return (
        <motion.div
            className={cn(
                "p-8 rounded-3xl bg-[var(--color-surface-cream)] hover:bg-white hover:shadow-xl border border-transparent transition-all duration-300 group cursor-pointer",
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * delay }}
            viewport={{ once: viewportOnce }}
        >
            <div className="w-14 h-14 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-brand-navy">{title}</h3>
            <p className="text-brand-navy/60 text-sm leading-relaxed font-medium">
                {description}
            </p>
        </motion.div>
    );
});

