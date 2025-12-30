import { cn } from "@/lib/utils";
import React from "react";

export function Badge({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span
            className={cn("inline-flex items-center rounded-full border border-brand-red/20 bg-brand-red/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-red shadow-sm", className)}
            {...props}
        >
            {children}
        </span>
    );
}
