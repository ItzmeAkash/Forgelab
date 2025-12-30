"use client";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        // You can add your form submission logic here
    };

    return (
        <Section id="contact" className="bg-white relative overflow-hidden">
            {/* Partition at top using Hero section background color */}
            <div className="absolute top-0 left-0 right-0 h-px bg-surface-50 z-0" />
            {/* Partition at bottom using Hero section background color */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-surface-50 z-0" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy mb-12 text-center">
                        Ready To Get Started?
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-brand-navy mb-2">
                                Your Name <span className="text-brand-red">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-xl border border-brand-navy/10 bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-brand-navy placeholder:text-brand-navy/40"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-brand-navy mb-2">
                                Your Email <span className="text-brand-red">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded-xl border border-brand-navy/10 bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-brand-navy placeholder:text-brand-navy/40"
                            />
                        </div>

                        {/* Phone Number Field */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-brand-navy mb-2">
                                Your Phone Number <span className="text-brand-red">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Your phone number"
                                className="w-full px-4 py-3 rounded-xl border border-brand-navy/10 bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-brand-navy placeholder:text-brand-navy/40"
                            />
                        </div>

                        {/* Message/Notes Field */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-brand-navy mb-2">
                                What about? Why are you contacting? <span className="text-brand-red">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Tell us about your project and why you're reaching out..."
                                className="w-full px-4 py-3 rounded-xl border border-brand-navy/10 bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-brand-navy placeholder:text-brand-navy/40 resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <Button
                                type="submit"
                                className="w-full md:w-auto"
                                withArrow
                            >
                                Send Message
                            </Button>
                        </div>
                    </form>
                </motion.div>
            </Container>
        </Section>
    );
}

