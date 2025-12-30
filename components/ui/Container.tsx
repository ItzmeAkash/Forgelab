import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "default" | "small" | "large";
}

export function Container({ className, size = "default", ...props }: ContainerProps) {
    return (
        <div
            className={cn(
                "w-full mx-auto px-6 md:px-8",
                {
                    "max-w-7xl": size === "default",
                    "max-w-5xl": size === "small",
                    "max-w-[1400px]": size === "large",
                },
                className
            )}
            {...props}
        />
    );
}
