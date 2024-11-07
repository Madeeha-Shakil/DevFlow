"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

// Define the custom type
type ThemeProviderProps = {
  children: React.ReactNode;
  forcedTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  storageKey?: string;
  themes?: string[];
  defaultTheme?: string;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...props
}) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
