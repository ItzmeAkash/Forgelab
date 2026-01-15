"use client";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { motion } from "framer-motion";
import { TrendingUp, Users, Lightbulb, ArrowRight } from "lucide-react";
import { memo } from "react";

const HIGHLIGHTS = [
    {
        icon: TrendingUp,
        title: "Boost Your Profits",
        description: "We build AI solutions that directly impact your bottom line — automating tasks, reducing costs, and uncovering new revenue opportunities.",
    },
    {
        icon: Users,
        title: "Empower Your Team",
        description: "AI isn't here to replace your people. We help your team work smarter, not harder — amplifying their skills and unlocking their true potential.",
    },
    {
        icon: Lightbulb,
        title: "Your Idea, Powered by AI",
        description: "Got a business challenge? We'll show you how AI can solve it. From concept to deployment, we turn your vision into intelligent solutions.",
    },
];

export const Why = memo(function Why() {
    return (
        <Section id="why" className="bg-linear-to-b from-white to-surface-50 relative overflow-hidden">
            <Container className="relative z-10">
                {/* Main Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-left mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-brand-red/10 text-brand-red text-sm font-medium rounded-full mb-6">
                        Why Forgelab
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 leading-tight">
                        AI That Works <span className="text-brand-red">For</span> Your Business,<br className="hidden md:block" />
                        Not <span className="text-brand-red">Against</span> Your People
                    </h2>
                    <p className="text-lg md:text-xl text-surface-600 max-w-3xl leading-relaxed">
                        We exist for one reason — to help businesses like yours harness the power of AI
                        to grow, compete, and thrive. No hype, no buzzwords. Just real solutions that
                        deliver real results.
                    </p>
                </motion.div>

                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-surface-100 mb-12"
                >
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left - Our Mission */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                                Our Mission
                            </h3>
                            <p className="text-surface-600 text-lg leading-relaxed mb-6">
                                Every business deserves access to AI — not just the tech giants. We're here to
                                democratize artificial intelligence, making it accessible, practical, and
                                profitable for businesses of all sizes.
                            </p>
                            <p className="text-surface-600 text-lg leading-relaxed">
                                We don't just build AI — we build AI that <strong className="text-brand-navy">makes sense</strong> for
                                your business. Whether you're looking to automate repetitive tasks, gain deeper
                                insights from your data, or create entirely new customer experiences, we're
                                your partner in making it happen.
                            </p>
                        </div>

                        {/* Right - Key Stats/Promise */}
                        <div className="bg-linear-to-br from-brand-navy to-brand-navy/90 rounded-2xl p-8 text-white">
                            <h4 className="text-xl font-semibold mb-6 text-white/90">Our Promise to You</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <ArrowRight className="w-5 h-5 text-brand-red mt-1 shrink-0" />
                                    <span className="text-white/90">AI solutions that actually increase your revenue</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ArrowRight className="w-5 h-5 text-brand-red mt-1 shrink-0" />
                                    <span className="text-white/90">Technology that empowers your team, not replaces them</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ArrowRight className="w-5 h-5 text-brand-red mt-1 shrink-0" />
                                    <span className="text-white/90">Clear ROI you can measure and track</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ArrowRight className="w-5 h-5 text-brand-red mt-1 shrink-0" />
                                    <span className="text-white/90">Support every step of the way</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Three Key Highlights */}
                <div className="grid md:grid-cols-3 gap-6">
                    {HIGHLIGHTS.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className="bg-white rounded-2xl p-6 md:p-8 border border-surface-100 hover:border-brand-red/30 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center mb-5">
                                <item.icon className="w-7 h-7 text-brand-red" />
                            </div>
                            <h4 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h4>
                            <p className="text-surface-600 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
});

