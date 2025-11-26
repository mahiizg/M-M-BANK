import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a number as Indian Rupee currency with ₹ symbol
 * @param amount - The amount to format
 * @param options - Optional formatting options
 * @returns Formatted currency string with ₹ symbol
 */
export function formatCurrency(
  amount: number,
  options?: {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
  }
): string {
  const formatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: options?.minimumFractionDigits ?? 2,
    maximumFractionDigits: options?.maximumFractionDigits ?? 2,
  }).format(amount);
  
  // Ensure ₹ symbol is used (some locales might use "Rs." or "INR")
  return formatted.replace(/Rs\.?|INR\s*/gi, "₹").replace(/\s+/g, "");
}
