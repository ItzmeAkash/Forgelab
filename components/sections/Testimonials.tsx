"use client";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { Star } from "lucide-react";
import { memo, useMemo } from "react";

const TESTIMONIALS = [
    { id: 1, name: "Alex Morgan", role: "CEO, TechFlow" },
    { id: 2, name: "Alex Morgan", role: "CEO, TechFlow" },
    { id: 3, name: "Alex Morgan", role: "CEO, TechFlow" },
];

export const Testimonials = memo(function Testimonials() {
    const testimonialsList = useMemo(() => TESTIMONIALS, []);
    const stars = useMemo(() => Array.from({ length: 5 }, (_, i) => i), []);

    return (
        <Section className="bg-brand-navy text-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <Badge className="bg-white/10 text-white border-white/20 mb-4">Testimonials</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold">Trusted by Visionaries</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonialsList.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                            <div className="flex gap-1 mb-6 text-yellow-300">
                                {stars.map((starIndex) => (
                                    <Star key={starIndex} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-xl font-medium leading-relaxed mb-6">
                                "Forgelab transformed our digital presence. Their attention to detail and design philosophy is unmatched."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/20" />
                                <div>
                                    <div className="font-bold">{testimonial.name}</div>
                                    <div className="text-sm text-white/60">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
});
