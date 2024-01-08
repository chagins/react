import { useTheme } from '../hooks';

export const Child = () => {
  const { toggleTheme } = useTheme();

  const style: React.CSSProperties = {
    width: '300px',
    height: '300px',
    border: '1px solid purple',
  };

  return (
    <div style={style}>
      <h3>Child</h3>
      <button type="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};
