import React, { ChangeEvent, useContext, useState } from 'react';
import { NameModifier, NamePrinter } from './Name';
import ToolbarMemo from './Toolbar';

export type ContextType = {
  [theme: string]: string;
};

const themes = {
  light: {
    color: '#000000',
    background: '#eeeeee',
  },
  dark: {
    color: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext<ContextType>(themes.light);
export const NameContext = React.createContext<any | null>(null);

const UseContextDemo = () => {
  console.log('UseContextDemo');
  const [name, setName] = useState<string>('Milu');

  const updateName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  return (
    <div>
      <ToolbarMemo />
      <ThemeContext.Provider value={themes.dark}>
        <ToolbarMemo />
      </ThemeContext.Provider>
      <NameContext.Provider value={{ name, updateName }}>
        <NameModifier />
        <NamePrinter />
      </NameContext.Provider>
    </div>
  );
};
export default UseContextDemo;

