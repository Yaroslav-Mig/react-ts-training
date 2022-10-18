import React, { ChangeEvent, useContext, useState } from 'react';

type ContextType = {
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

const ThemeContext = React.createContext<ContextType>(themes.light);
const NameContext = React.createContext<any | null>(null);

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

const Toolbar = () => {
  console.log('Toolbar');
  return (
    <div>
      <ThemedButton />
    </div>
  );
};
const ToolbarMemo = React.memo(Toolbar);

const ThemedButton = () => {
  console.log('ThemedButton');
  const theme = useContext(ThemeContext);
  return <button style={theme}>Круче только яйца!</button>;
};

const NameModifier = () => {
  console.log('NameModifier');
  const { name, updateName } = useContext(NameContext);
  return (
    <>
      <label htmlFor='name'>Enter name</label>
      <input id='name' type='text' value={name} onChange={updateName} />
    </>
  );
};

const NamePrinter = () => {
  console.log('NamePrinter');
  const { name } = useContext(NameContext);
  return <p>My name is {name}</p>;
};
