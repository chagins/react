import { Parent } from './components/Parent';
import { ThemeContextProvider } from './themeContext';

export const ContextStand = () => {
  return (
    <ThemeContextProvider>
      <div>
        <h2>Context stand</h2>
        <Parent />
      </div>
    </ThemeContextProvider>
  );
};
