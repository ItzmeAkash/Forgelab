"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

// Note: Ensure you install class-variance-authority @radix-ui/react-slot if not present, otherwise generic implementation below.
// Since we didn't install radix, I'll use a standard implementation without Slot for simplicity unless requested.

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 duration-200",
    {
        variants: {
            variant: {
                default: "bg-brand-red text-white hover:bg-brand-dark shadow-lg shadow-brand-red/20",
                navy: "bg-brand-navy text-white hover:bg-brand-navy/90 shadow-lg shadow-brand-navy/20",
                outline: "border border-input bg-transparent hover:bg-surface-50 text-foreground",
                ghost: "hover:bg-surface-50 hover:text-brand-red",
                link: "text-brand-red underline-offset-4 hover:underline",
                white: "bg-white text-brand-navy hover:bg-surface-50 shadow-md",
            },
            size: {
                default: "h-12 px-8 py-2",
                sm: "h-10 px-5 text-sm",
                lg: "h-14 px-10 text-lg",
                icon: "h-12 w-12",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    withArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, withArrow = false, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {props.children}
                {withArrow && (
                    <span className="ml-1 flex items-center justify-center bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                    </span>
                )}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
