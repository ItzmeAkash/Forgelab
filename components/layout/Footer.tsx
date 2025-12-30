"use client";

import { Container } from "../ui/Container";
import Link from "next/link";
import { Instagram, Twitter, Linkedin, Mail, Phone, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative">
            {/* Partition at top using Hero section background color */}
            <div className="absolute top-0 left-0 right-0 h-px bg-surface-50 z-10" />

            {/* Main Footer Section - White/Cream Background */}
            <div className="bg-gradient-to-b from-white to-surface-50 text-brand-navy py-12 md:py-16 relative">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
                        {/* Left Column - Brand Information */}
                        <div>
                            <Link href="/" className="inline-flex items-center gap-2 mb-4">
                                <div className="text-2xl font-bold">
                                    <span className="text-brand-navy">forge</span>
                                    <span className="text-brand-red">labs.</span>
                                </div>
                            </Link>
                            <p className="text-brand-navy/70 text-sm mb-6 max-w-xs">
                                Forging the future with intelligent solutions that transform businesses.
                            </p>
                            {/* Social Media Icons */}
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-lg border border-brand-navy/20 bg-white flex items-center justify-center hover:bg-brand-red hover:border-brand-red hover:text-white transition-all text-brand-navy"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-lg border border-brand-navy/20 bg-white flex items-center justify-center hover:bg-brand-red hover:border-brand-red hover:text-white transition-all text-brand-navy"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-lg border border-brand-navy/20 bg-white flex items-center justify-center hover:bg-brand-red hover:border-brand-red hover:text-white transition-all text-brand-navy"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Middle Column - Quick Links */}
                        <div>
                            <h4 className="font-bold text-lg mb-3">Quick Links</h4>
                            <div className="w-12 h-0.5 bg-brand-navy/20 mb-4" />
                            <ul className="space-y-3 text-brand-navy/70 text-sm">
                                <li>
                                    <Link href="#services" className="hover:text-brand-red transition-colors flex items-center gap-2">
                                        <span>≫</span>
                                        <span>Our Services</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#what-we-offer" className="hover:text-brand-red transition-colors flex items-center gap-2">
                                        <span>≫</span>
                                        <span>What We Offer</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#contact" className="hover:text-brand-red transition-colors flex items-center gap-2">
                                        <span>≫</span>
                                        <span>Contact Us</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Right Column - Contact Us */}
                        <div>
                            <h4 className="font-bold text-lg mb-3">Contact Us</h4>
                            <div className="w-12 h-0.5 bg-brand-navy/20 mb-4" />
                            <ul className="space-y-3 text-brand-navy/70 text-sm">
                                <li>
                                    <a
                                        href="mailto:info@forgelabs.com"
                                        className="hover:text-brand-red transition-colors flex items-center gap-3"
                                    >
                                        <Mail className="w-5 h-5 flex-shrink-0 text-brand-navy/60" />
                                        <span>Info@forgelabs.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:+1234567890"
                                        className="hover:text-brand-red transition-colors flex items-center gap-3"
                                    >
                                        <Phone className="w-5 h-5 flex-shrink-0 text-brand-navy/60" />
                                        <span>+1 (234) 567-890</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Bottom Strip - Copyright */}
            <div className="bg-surface-50 border-t border-brand-navy/10 text-brand-navy py-4 relative">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-navy/60">
                        <p>© {new Date().getFullYear()} Forgelab.in</p>

                        {/* Scroll to Top Button */}
                        {showScrollTop && (
                            <button
                                onClick={scrollToTop}
                                className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-brand-navy/20 flex items-center justify-center hover:bg-brand-navy hover:border-brand-navy transition-all group shadow-lg"
                                aria-label="Scroll to top"
                            >
                                <ChevronUp className="w-6 h-6 text-brand-navy/60 group-hover:text-white transition-colors" />
                            </button>
                        )}
                    </div>
                </Container>
            </div>
        </footer>
    );
}
