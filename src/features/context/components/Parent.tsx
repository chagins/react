import React from 'react';
import { Child } from './Child';
import { useTheme } from '../hooks';

export const Parent = () => {
  const { themeMode } = useTheme();

  const style: React.CSSProperties = {
    backgroundColor: themeMode === 'dark' ? 'gray' : 'wheat',
    width: '500px',
    height: '500px',
    border: '1px solid yellow',
  };

  return (
    <div style={style}>
      <h2>Parent</h2>
      <Child />
    </div>
  );
};
