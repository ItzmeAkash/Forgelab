"use client";

import { memo, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface FormInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows'> {
    label: string;
    required?: boolean;
    isTextarea?: boolean;
    rows?: number;
}

export const FormInput = memo(
    forwardRef<HTMLInputElement | HTMLTextAreaElement, FormInputProps>(
        function FormInput({ label, required = false, isTextarea = false, rows = 5, className, ...props }, ref) {
            const inputClasses = cn(
                "w-full px-4 py-3 rounded-xl border border-brand-navy/10 bg-white focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-brand-navy placeholder:text-brand-navy/40",
                isTextarea && "resize-none",
                className
            );

            return (
                <div>
                    <label htmlFor={props.id} className="block text-sm font-semibold text-brand-navy mb-2">
                        {label} {required && <span className="text-brand-red">*</span>}
                    </label>
                    {isTextarea ? (
                        <textarea
                            ref={ref as React.Ref<HTMLTextAreaElement>}
                            rows={rows}
                            className={inputClasses}
                            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                        />
                    ) : (
                        <input
                            ref={ref as React.Ref<HTMLInputElement>}
                            className={inputClasses}
                            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
                        />
                    )}
                </div>
            );
        }
    )
);

