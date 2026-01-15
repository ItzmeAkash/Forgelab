"use client";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { motion } from "framer-motion";
import { Zap, Users, Lightbulb, TrendingUp, ArrowRight, Check } from "lucide-react";
import { memo } from "react";

const VALUE_POINTS = [
    {
        icon: Zap,
        title: "Simplify Your Workload",
        description: "Let AI handle the repetitive, time-consuming tasks so your team can focus on what truly matters — growing your business.",
    },
    {
        icon: Users,
        title: "Empower Your People",
        description: "We don't replace humans. We give them superpowers. AI tools that make your team faster, smarter, and more productive.",
    },
    {
        icon: Lightbulb,
        title: "Your Use Case, Our Solution",
        description: "Every business is different. Tell us your challenge, and we'll build a custom AI application designed specifically for you.",
    },
    {
        icon: TrendingUp,
        title: "Profitable Products",
        description: "We build AI solutions that pay for themselves — increasing revenue, cutting costs, and delivering real ROI you can measure.",
    },
];

const WHAT_YOU_GET = [
    "Custom AI applications tailored to your business",
    "Automation that saves hours of manual work",
    "Tools that make your team more productive",
    "Solutions that increase your profit margins",
    "Ongoing support and optimization",
    "Technology that scales with your growth",
];

export const WhatWeOffer = memo(function WhatWeOffer() {
    return (
        <Section id="what-we-offer" className="bg-surface-50 relative overflow-hidden">
            <Container className="relative z-10">
                {/* Header - Left aligned */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-left mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-brand-red/10 text-brand-red text-sm font-medium rounded-full mb-6">
                        What We Offer
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 leading-tight">
                        AI Solutions That <br className="hidden md:block" />
                        <span className="text-brand-red">Work For Your Business</span>
                    </h2>
                    <p className="text-lg md:text-xl text-surface-600 max-w-3xl leading-relaxed">
                        We build intelligent applications based on your unique use case. No generic tools —
                        just custom AI solutions that simplify your work, boost productivity, and deliver real profits.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Left - Value Points */}
                    <div className="space-y-4">
                        {VALUE_POINTS.map((point, index) => (
                            <motion.div
                                key={point.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 border border-surface-100 hover:border-brand-red/30 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-brand-red/10 flex items-center justify-center shrink-0">
                                        <point.icon className="w-6 h-6 text-brand-red" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-brand-navy mb-1">{point.title}</h3>
                                        <p className="text-surface-600 text-sm leading-relaxed">{point.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right - What You Get Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-brand-navy rounded-2xl p-8 md:p-10 text-white h-fit lg:sticky lg:top-8"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">
                            What You Get With <span className="text-brand-red">Forgelab</span>
                        </h3>
                        <p className="text-white/80 mb-8 leading-relaxed">
                            When you partner with us, you're not just getting a product — you're getting a team
                            dedicated to making AI work for your business.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {WHAT_YOU_GET.map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-5 h-5 rounded-full bg-brand-red/20 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 text-brand-red" />
                                    </div>
                                    <span className="text-white/90">{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                        >
                            Let's Build Something <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white rounded-2xl p-8 md:p-10 border border-surface-100 text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                        Have a Unique Use Case?
                    </h3>
                    <p className="text-surface-600 max-w-2xl mx-auto mb-6 leading-relaxed">
                        Every business challenge is different. Share your idea with us, and we'll show you
                        how AI can turn it into a profitable solution. No obligation, just a conversation.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-brand-red font-semibold hover:text-brand-red/80 transition-colors"
                    >
                        Tell us about your project <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </Container>
        </Section>
    );
});

