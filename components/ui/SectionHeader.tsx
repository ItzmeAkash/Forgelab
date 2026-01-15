"use client";

import { Badge } from "./Badge";
import { memo } from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
    badge: string;
    title: string | React.ReactNode;
    description?: string;
    className?: string;
    badgeClassName?: string;
}

export const SectionHeader = memo(function SectionHeader({
    badge,
    title,
    description,
    className,
    badgeClassName,
}: SectionHeaderProps) {
    return (
        <div className={cn("flex flex-col md:flex-row justify-between items-start md:items-end mb-16", className)}>
            <div>
                <Badge className={cn("mb-4 bg-red-50 text-brand-red border-red-100", badgeClassName)}>
                    {badge}
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy">
                    {title}
                </h2>
            </div>
            {description && (
                <p className="text-brand-navy/60 max-w-sm mt-4 md:mt-0 font-medium">
                    {description}
                </p>
            )}
        </div>
    );
});

