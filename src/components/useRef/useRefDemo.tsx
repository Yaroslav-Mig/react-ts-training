import React, { ChangeEvent, createRef, useEffect, useRef, useState } from 'react';
import st from './useRefDemo.module.css';

const useRefDemo = () => {
  console.log('useRefDemo');
  return (
    <>
      <InputToggleButtonMemo />
      <CreateRefDemo />
    </>
  );
};
export default React.memo(useRefDemo);

const InputToggleButton = () => {
  console.log('InputToggleButton');

  const [value, setValue] = useState<string>('');
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = inputEl.current as HTMLInputElement;
    el.focus();
  }, []);

  const BlurHandler = () => {
    const el = inputEl.current as HTMLInputElement;
    el.blur();
  };
  const FocusHandler = () => {
    const el = inputEl.current as HTMLInputElement;
    el.focus();
  };
  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

  return (
    <div className={st.box}>
      <label htmlFor='text'>Enter text</label>
      <input id='text' type='text' ref={inputEl} value={value} onChange={changeValueHandler} />
      <button className={st.btn} onClick={BlurHandler}>
        Remove focus
      </button>
      <button className={st.btn} onClick={FocusHandler}>
        Add focus
      </button>
    </div>
  );
};
const InputToggleButtonMemo = React.memo(InputToggleButton);

// Compiled with --strictNullChecks
export const CreateRefDemo = () => {
  const [counter, setCounter] = useState<number>(0);

  const createRefExp = createRef<number | null>();
  const useRefExp = useRef<number | null>(0);
  console.log(createRefExp, '1');

  const onClickHandler = () => setCounter(counter + 1);
  if (!createRefExp) {
    //@ts-ignore
    createRefExp.current = counter;
    console.log(createRefExp, '2');
    // createRefExp['current']['style']['color'] = 'red';
    // createRefExp.current.style.color = 'red';
  }
  if (!useRefExp.current) {
    useRefExp.current = counter;
  }

  return (
    <section className='box'>
      <div className='values'>
        <span>createRef value: {createRefExp.current}</span>
      </div>
      <div className='values'>
        <span>useRef value: {useRefExp.current}</span>
      </div>
      <div className='values'>
        <span>This component has been rendered {counter} times. </span>
      </div>
      <button onClick={onClickHandler}>Add a render!</button>
    </section>
  );
};
