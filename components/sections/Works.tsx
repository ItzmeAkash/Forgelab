"use client";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import Image from "next/image";

// Placeholder project data
const PROJECTS = [
    {
        title: "Brand Orbit",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2700",
    },
    {
        title: "Nebula Stream",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1558655146-d09347e0b7a8?auto=format&fit=crop&q=80&w=2700",
    },
    {
        title: "Kinetix App",
        category: "Product Design",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=2700",
    },
];

export function Works() {
    return (
        <Section id="works" className="bg-surface-50">
            <Container>
                <div className="text-center mb-16">
                    <Badge className="mb-4">Selected Works</Badge>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-brand-navy">
                        Crafted with <span className="text-brand-red">Precision.</span>
                    </h2>
                </div>

                <div className="space-y-16 md:space-y-32">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 group`}>
                            {/* Project Image */}
                            <div className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-2xl relative aspect-[4/3]">
                                <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-multiply transition-all duration-500" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Project Info */}
                            <div className="w-full md:w-1/2 text-left">
                                <span className="text-brand-red font-mono text-sm mb-4 block font-semibold">{project.category}</span>
                                <h3 className="text-4xl md:text-5xl font-bold mb-6 text-brand-navy">{project.title}</h3>
                                <p className="text-brand-navy/60 mb-8 max-w-md font-medium">
                                    A strategic approach to digital transformation, delivering a seamless experience that redefined the user journey.
                                </p>
                                <Button variant="outline" className="border-brand-navy/10 text-brand-navy hover:bg-brand-navy/5" withArrow>View Case Study</Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Button size="lg">View All Projects</Button>
                </div>
            </Container>
        </Section>
    );
}
