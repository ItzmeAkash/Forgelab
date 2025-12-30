"use client";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { Sparkles, Users, Zap, Award, Target, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const REASONS = [
    {
        title: "AI-Powered Innovation",
        description: "We leverage cutting-edge AI technology to deliver intelligent solutions that automate processes, optimize workflows, and drive measurable business results.",
        icon: Sparkles,
    },
    {
        title: "Expert Team",
        description: "Our multidisciplinary team of designers, developers, and strategists bring years of experience to every project, ensuring exceptional quality.",
        icon: Users,
    },
    {
        title: "Fast & Agile Delivery",
        description: "We work efficiently without compromising quality, delivering projects on time and within budget while maintaining the highest standards.",
        icon: Zap,
    },
    {
        title: "Proven Track Record",
        description: "With a portfolio of successful projects across various industries, we have a track record of delivering results that exceed expectations.",
        icon: Award,
    },
    {
        title: "Custom Solutions",
        description: "We don't believe in one-size-fits-all. Every solution is tailored to your unique business needs, goals, and challenges.",
        icon: Target,
    },
    {
        title: "Ongoing Support",
        description: "Your success is our priority. We provide continuous support, updates, and optimization to ensure your solutions evolve with your business.",
        icon: Headphones,
    },
];

export function Why() {
    return (
        <Section id="why" className="bg-white relative overflow-hidden">
            {/* Partition at bottom using Hero section background color */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-surface-50 z-0" />

            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
                    <div>
                        <Badge className="mb-4 bg-red-50 text-brand-red border-red-100">
                            Why Choose Us
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy">
                            Why <span className="text-brand-red">Forgelabs?</span>
                        </h2>
                    </div>
                    <p className="text-brand-navy/60 max-w-sm mt-4 md:mt-0 font-medium">
                        We're not just another agency. We're your strategic partner in transforming ideas into digital success stories.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {REASONS.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            className="p-8 rounded-3xl bg-[var(--color-surface-cream)] hover:bg-white hover:shadow-xl border border-brand-navy/10 transition-all duration-300 group cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: false }}
                        >
                            <div className="w-14 h-14 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 transition-transform">
                                <reason.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-brand-navy">{reason.title}</h3>
                            <p className="text-brand-navy/60 text-sm leading-relaxed font-medium">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

