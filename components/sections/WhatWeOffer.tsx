"use client";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { Code, Palette, BarChart3, Cloud, Shield, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const OFFERINGS = [
    {
        title: "Custom Development",
        description: "Tailored web and mobile applications built from the ground up to meet your specific business requirements and goals.",
        icon: Code,
    },
    {
        title: "Design Solutions",
        description: "Complete design services from UI/UX to brand identity, creating visually stunning and user-friendly experiences.",
        icon: Palette,
    },
    {
        title: "Business Intelligence",
        description: "AI-powered analytics and insights to help you make data-driven decisions and optimize your business performance.",
        icon: BarChart3,
    },
    {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and deployment services to ensure your applications perform at their best.",
        icon: Cloud,
    },
    {
        title: "Security & Compliance",
        description: "Enterprise-grade security measures and compliance solutions to protect your data and your customers.",
        icon: Shield,
    },
    {
        title: "Launch & Scale",
        description: "End-to-end support from launch to scale, helping you grow and adapt your digital presence as you expand.",
        icon: Rocket,
    },
];

export function WhatWeOffer() {
    return (
        <Section id="what-we-offer" className="bg-white relative overflow-hidden">
            {/* Partition at top using Hero section background color */}
            <div className="absolute top-0 left-0 right-0 h-px bg-surface-50 z-0" />
            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
                    <div>
                        <Badge className="mb-4 bg-red-50 text-brand-red border-red-100">
                            What We Offer
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy">
                            Comprehensive <br /><span className="text-brand-red">Digital Solutions.</span>
                        </h2>
                    </div>
                    <p className="text-brand-navy/60 max-w-sm mt-4 md:mt-0 font-medium">
                        From concept to launch, we provide everything you need to succeed in the digital landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {OFFERINGS.map((offering, index) => (
                        <motion.div
                            key={offering.title}
                            className="p-8 rounded-3xl bg-[var(--color-surface-cream)] hover:bg-white hover:shadow-xl border border-transparent transition-all duration-300 group cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: false }}
                        >
                            <div className="w-14 h-14 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 transition-transform">
                                <offering.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-brand-navy">{offering.title}</h3>
                            <p className="text-brand-navy/60 text-sm leading-relaxed font-medium">
                                {offering.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

