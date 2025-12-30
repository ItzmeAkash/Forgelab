"use client";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { Brush, Globe, Layers, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
    {
        title: "UI/UX Design",
        description: "Crafting intuitive and engaging user experiences.",
        icon: Brush,
    },
    {
        title: "Web Development",
        description: "Robust and scalable web solutions.",
        icon: Globe,
    },
    {
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications.",
        icon: Smartphone,
    },
    {
        title: "Brand Strategy",
        description: "Defining your brand's voice and visual identity.",
        icon: Layers,
    },
];

export function Services() {
    return (
        <Section id="services" className="bg-white relative overflow-hidden">
            {/* Partition at top using Hero section background color */}
            <div className="absolute top-0 left-0 right-0 h-px bg-surface-50 z-0" />
            {/* Partition at bottom using Hero section background color */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-surface-50 z-0" />
            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
                    <div>
                        <Badge className="mb-4 bg-red-50 text-brand-red border-red-100">Our Services</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy">
                            Expertise that <br /><span className="text-brand-red">Drives Growth.</span>
                        </h2>
                    </div>
                    <p className="text-brand-navy/60 max-w-sm mt-4 md:mt-0 font-medium">
                        We offer a comprehensive suite of digital services to help you scale your business and reach your audience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            className="p-8 rounded-3xl bg-[var(--color-surface-cream)] hover:bg-white hover:shadow-xl border border-transparent transition-all duration-300 group cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: false }}
                        >
                            <div className="w-14 h-14 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 transition-transform">
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-brand-navy">{service.title}</h3>
                            <p className="text-brand-navy/60 text-sm leading-relaxed font-medium">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
