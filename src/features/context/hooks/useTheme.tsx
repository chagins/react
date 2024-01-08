import { useContext } from 'react';
import { ThemeContext } from '../themeContext';

export const useTheme = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  return { themeMode, toggleTheme };
};
