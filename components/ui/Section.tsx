import { cn } from "@/lib/utils";
import React from "react";

export function Section({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <section className={cn("py-20 md:py-32 relative overflow-hidden", className)} {...props}>
            {children}
        </section>
    );
}
