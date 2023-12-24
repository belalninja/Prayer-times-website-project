"use client";
import * as React from "react";
import { ThemeProvider } from "next-themes";
type ThemeProviderProps = Parameters<typeof ThemeProvider>[0];

export function Providers({ children }: ThemeProviderProps) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
