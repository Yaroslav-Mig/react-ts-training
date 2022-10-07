import React, { ChangeEvent, useRef, useState } from 'react';
import st from './useRefDemo.module.css';

const useRefDemo = () => {
  console.log('useRefDemo');
  return <InputToggleButtonMemo />;
};
export default React.memo(useRefDemo);

const InputToggleButton = () => {
  console.log('InputToggleButton');

  const [value, setValue] = useState<string>('');
  const inputEl = useRef<HTMLInputElement>(null);

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
