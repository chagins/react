import React, { useMemo, useState } from 'react';
import { ThemeMode, ThemeContext, Theme } from './ThemeContext';

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  const value = useMemo<Theme>(() => {
    return {
      themeMode,
      toggleTheme: () => {
        setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
      },
    };
  }, [themeMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
