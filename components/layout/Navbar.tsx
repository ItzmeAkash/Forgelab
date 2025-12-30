"use client";

import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Works", href: "#works" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
                scrolled
                    ? "glass-nav py-4"
                    : "bg-transparent py-6 border-0 shadow-none"
            )}
            style={!scrolled ? {
                background: 'transparent',
                borderBottom: 'none',
                boxShadow: 'none'
            } : undefined}
        >
            <Container className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-3xl font-bold tracking-tighter flex items-center">
                    <span className="text-brand-red">forge</span>
                    <span className="text-brand-navy">labs.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-black/5 shadow-sm">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="px-5 py-2 text-sm font-medium text-foreground/80 hover:text-brand hover:bg-white rounded-full transition-all"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </Container>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-background border-b border-border/10 p-6 md:hidden flex flex-col gap-4 shadow-xl">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-lg font-medium text-foreground hover:text-brand"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button className="w-full" withArrow>
                        Get Started
                    </Button>
                </div>
            )}
        </header>
    );
}
