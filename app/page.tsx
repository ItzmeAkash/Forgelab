import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Why } from "@/components/sections/Why";
import { WhatWeOffer } from "@/components/sections/WhatWeOffer";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-surface-50">
            <Navbar />
            <Hero />
            <Why />
            <Services />
            <WhatWeOffer />
            <Contact />
            <Footer />
        </main>
    );
}
