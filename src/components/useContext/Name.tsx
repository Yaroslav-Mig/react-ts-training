import React, {useContext } from 'react';
import { NameContext } from './UseContextDemo';

export const NameModifier = () => {
  console.log('NameModifier');
  const { name, updateName } = useContext(NameContext) as any;
  return (
    <>
      <label htmlFor='name'>Enter name</label>
      <input id='name' type='text' value={name} onChange={updateName} />
    </>
  );
};

export const NamePrinter = () => {
  console.log('NamePrinter');
  const { name } = useContext(NameContext) as any;
  return <p>My name is {name}</p>;
};
