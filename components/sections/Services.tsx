"use client";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Globe, Smartphone, Sparkles, ChevronDown, Check } from "lucide-react";
import { memo, useState } from "react";

const SERVICES = [
    {
        title: "Custom AI Solutions",
        description: "We build the AI your business needs — from intelligent chatbots and automation systems to predictive analytics and machine learning models tailored to your specific challenges.",
        icon: Brain,
        highlight: "Built for your business",
        expandedContent: {
            intro: "Transform your business operations with AI solutions designed specifically for your needs.",
            features: [
                "Intelligent Chatbots & Virtual Assistants",
                "Process Automation & Workflow Optimization",
                "Predictive Analytics & Forecasting",
                "Custom Machine Learning Models",
                "Natural Language Processing (NLP)",
                "Computer Vision & Image Recognition",
            ],
            outcome: "Get AI that understands your business and delivers measurable results from day one.",
        },
    },
    {
        title: "Websites & Web Apps",
        description: "Modern, fast, and scalable websites and web applications. We create digital experiences that not only look great but also drive conversions and grow your business.",
        icon: Globe,
        highlight: "Performance-focused",
        expandedContent: {
            intro: "Your website is your digital storefront. We make sure it works as hard as you do.",
            features: [
                "Custom Website Design & Development",
                "E-commerce Solutions",
                "Progressive Web Apps (PWA)",
                "Content Management Systems",
                "API Development & Integration",
                "Performance Optimization & SEO",
            ],
            outcome: "Fast, beautiful, and conversion-optimized websites that grow your business.",
        },
    },
    {
        title: "Mobile Applications",
        description: "Native and cross-platform mobile apps that your customers will love. From concept to launch, we build apps that solve real problems and deliver real value.",
        icon: Smartphone,
        highlight: "iOS & Android",
        expandedContent: {
            intro: "Reach your customers wherever they are with mobile apps that deliver exceptional experiences.",
            features: [
                "Native iOS & Android Development",
                "Cross-Platform Apps (React Native)",
                "UI/UX Design for Mobile",
                "App Store Optimization",
                "Push Notifications & Engagement",
                "Offline-First Architecture",
            ],
            outcome: "Apps your users will love to use — and keep coming back to.",
        },
    },
    {
        title: "AI for Your Existing Products",
        description: "Already have a product? Let us supercharge it with AI. We integrate intelligent features into your existing websites, apps, and software to make them smarter and more valuable.",
        icon: Sparkles,
        highlight: "Upgrade with AI",
        expandedContent: {
            intro: "Don't rebuild from scratch. Add AI capabilities to what you already have.",
            features: [
                "AI-Powered Search & Recommendations",
                "Smart Content Personalization",
                "Automated Customer Support",
                "Intelligent Data Analysis",
                "Voice & Image Recognition Features",
                "Predictive User Behavior",
            ],
            outcome: "Make your existing product smarter, faster, and more valuable to your users.",
        },
    },
];

export const Services = memo(function Services() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <Section id="services" className="bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-surface-50 z-0" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-surface-50 z-0" />
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
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 leading-tight">
                        AI-Powered Solutions <br className="hidden md:block" />
                        <span className="text-brand-red">For Modern Businesses</span>
                    </h2>
                    <p className="text-lg md:text-xl text-surface-600 max-w-3xl leading-relaxed">
                        From custom AI development to websites and mobile apps — we build
                        intelligent digital solutions that help your business grow and compete.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SERVICES.map((service, index) => {
                        const isExpanded = expandedIndex === index;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                layout
                                className={`rounded-2xl p-8 border transition-all duration-300 ${isExpanded
                                        ? "bg-white border-brand-red/30 shadow-xl"
                                        : "bg-surface-50 hover:bg-white border-surface-100 hover:border-brand-red/30 hover:shadow-xl"
                                    }`}
                            >
                                <div className="flex items-start gap-5">
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 shrink-0 ${isExpanded ? "bg-brand-red" : "bg-brand-red/10"
                                        }`}>
                                        <service.icon className={`w-7 h-7 transition-colors duration-300 ${isExpanded ? "text-white" : "text-brand-red"
                                            }`} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                                            <h3 className="text-xl font-bold text-brand-navy">{service.title}</h3>
                                            <span className="text-xs font-medium px-2 py-1 bg-brand-navy/10 text-brand-navy rounded-full">
                                                {service.highlight}
                                            </span>
                                        </div>
                                        <p className="text-surface-600 leading-relaxed mb-4">{service.description}</p>

                                        {/* Learn More Button */}
                                        <button
                                            onClick={() => toggleExpand(index)}
                                            className="flex items-center text-brand-red font-medium text-sm hover:text-brand-red/80 transition-colors cursor-pointer"
                                        >
                                            {isExpanded ? "Show less" : "Learn more"}
                                            <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                                                }`} />
                                        </button>

                                        {/* Expanded Content */}
                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-6 mt-6 border-t border-surface-200">
                                                        <p className="text-surface-700 font-medium mb-4">
                                                            {service.expandedContent.intro}
                                                        </p>

                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                                            {service.expandedContent.features.map((feature) => (
                                                                <div key={feature} className="flex items-center gap-2">
                                                                    <Check className="w-4 h-4 text-brand-red shrink-0" />
                                                                    <span className="text-sm text-surface-600">{feature}</span>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        <p className="text-brand-navy font-medium text-sm bg-brand-navy/5 rounded-lg p-3">
                                                            {service.expandedContent.outcome}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
});
