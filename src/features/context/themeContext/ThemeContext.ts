import { createContext } from 'react';

export type ThemeMode = 'dark' | 'light';

export interface Theme {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const initialThemeContextValue: Theme = {
  themeMode: 'light',
  toggleTheme: () => {},
};

export const ThemeContext = createContext(initialThemeContextValue);
