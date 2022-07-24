import React, { ChangeEvent, useRef, useState } from 'react';

export default {
  title: 'Input',
};

export const UncontrolledInput = () => <input />;
export const ControlledInputWithFixValue = () => <input value='it' />;

export const InputTrackValueOnchange = () => {
  const [value, setValue] = useState<string>('');
  const changeValue = (e: ChangeEvent<HTMLInputElement>): void => setValue(e.currentTarget.value);
  return (
    <>
      <input onChange={changeValue} /> - {value}
    </>
  );
};
export const InputButtonPress = () => {
  const [value, setValue] = useState<string>('');
  const getValue = () => {
    const elem = document.getElementById('input') as HTMLInputElement;
    setValue(elem.value);
  };
  return (
    <>
      <input id='input' />
      <button onClick={getValue}>Save</button> - actual value: {value}
    </>
  );
};
export const InputButtonPressUseReference = () => {
  const [value, setValue] = useState<string>('');
  const refInput = useRef<HTMLInputElement>(null);
  const saveValue = () => {
    const elem = refInput.current as HTMLInputElement;
    setValue(elem.value);
  };
  return (
    <>
      <input ref={refInput} />
      <button onClick={saveValue}>Save</button> - actual value: {value}
    </>
  );
};
export const ControlledInput = () => {
  const [value, setValue] = useState<string>('');
  const changeValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
  return (
    <>
      <input value={value} onChange={changeValue} />
    </>
  );
};
export const ControlledCheckbox = () => {
  const [value, setValue] = useState<boolean>(true);
  const changeValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.checked);
  return (
    <>
      <input type='checkbox' checked={value} onChange={changeValue} /> - sample
    </>
  );
};
export const ControlledSelect = () => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const selectValue = (e: ChangeEvent<HTMLSelectElement>): void => setValue(e.currentTarget.value);
  return (
    <>
      <select value={value} onChange={selectValue}>
        <option value='volvo'>Volvo</option>
        <option value='porsche'>Porsche</option>
        <option value='bmw'>BMW</option>
        <option value='audi'>Audi</option>
      </select>
    </>
  );
};
