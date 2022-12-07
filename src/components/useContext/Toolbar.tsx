import React, { useContext } from 'react';
import { ContextType, ThemeContext } from './UseContextDemo';

const ToolbarMemo = () => {
  console.log('Toolbar');
  return (
    <div>
      <ThemedButton />
    </div>
  );
};
export default ToolbarMemo;

const ThemedButton = () => {
  console.log('ThemedButton');
  const theme = useContext(ThemeContext) as ContextType;
  return <button style={theme}>Круче только яйца!</button>;
};
