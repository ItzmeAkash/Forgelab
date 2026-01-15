"use client";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { FormInput } from "../ui/FormInput";
import { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }, []);

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        // You can add your form submission logic here
    }, [formData]);

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
                id="name"
                name="name"
                type="text"
                label="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
            />

            <FormInput
                id="email"
                name="email"
                type="email"
                label="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
            />

            <FormInput
                id="phone"
                name="phone"
                type="tel"
                label="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Your phone number"
            />

            <FormInput
                id="message"
                name="message"
                label="What about? Why are you contacting?"
                value={formData.message}
                onChange={handleChange}
                required
                isTextarea
                rows={5}
                placeholder="Tell us about your project and why you're reaching out..."
            />

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
    );
}

export const Contact = memo(function Contact() {
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
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy mb-12 text-center">
                        Ready To Get Started?
                    </h2>

                    <ContactForm />
                </motion.div>
            </Container>
        </Section>
    );
});
