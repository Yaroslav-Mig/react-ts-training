/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';

export default {
  title: 'useEffectDemo',
};

export const SetTimeoutDemo = () => {
  const [time, setTime] = useState<string>('');
  console.log('SetTimeout');

  useEffect(() => {
    console.log('useEffect + SetTimeout');

    const setTimeoutID = setTimeout(() => {
      console.log('setTimeOut expired after 3 sec');
      setTime('3 sec passed');
    }, 3000);

    return () => clearTimeout(setTimeoutID);
  }, []);

  return <p>text - {time}</p>;
};

export const SetIntervalDemo = () => {
  console.log('SetInterval');

  let [time, setTime] = useState<number>(0);
  const intervalRefID = useRef<any>();
  const prevRefTime = useRef<any>();

  const resetHandler = () => {
    clearTimeout(intervalRefID.current);
    setTime(0);
  };

  const stopHandler = () => {
    clearTimeout(intervalRefID.current);
  };

  const continueHandler = () => {
    setTime((prev) => (prev = prevRefTime.current + 0.1));
  };

  useEffect(() => {
    console.log('useEffect + SetInterval');

    const intervalId = setTimeout(() => {
      console.log('tick: ' + time);
      setTime((prevState) => prevState + 1);
    }, 1000);

    intervalRefID.current = intervalId;
    prevRefTime.current = time;

    return () => {
      console.log('reset: ' + time);
      return clearTimeout(intervalId);
    };
  }, [time]);

  return (
    <>
      <p>timer - {Math.trunc(time)}</p>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={stopHandler}>Stop</button>
      <button onClick={continueHandler}>Continue</button>
    </>
  );
};

export const KeysTracker = () => {
  const [text, setText] = useState<string>('');
  console.log('KeysTracker component render with text:' + text);

  useEffect(() => {
    const printHandler = (e: KeyboardEvent) => {
      console.log(e.key);
      setText(text + e.key);
    };

    window.addEventListener('keypress', printHandler);

    return () => {
      window.removeEventListener('keypress', printHandler);
    };
  }, [text]);

  return <p>typed text: {text}</p>;
};
