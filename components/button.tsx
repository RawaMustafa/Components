"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function MyButton({ children, className, ...props }: React.ComponentProps<"button">) {
    return (
        <button
            className={cn("rounded-lg bg-green-600 text-white px-4 py-2 hover:bg-green-700", className)}
            {...props}
        >
            {children}
        </button>
    )
}
