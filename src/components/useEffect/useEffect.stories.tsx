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
  const refIntervalID = useRef<any>();

  const resetHandler = () => {
    clearTimeout(refIntervalID.current);
    setTime((prev) => (prev = 0));
  };
  const stopHandler = () => {
    clearTimeout(refIntervalID.current);
  };
  const continueHandler = () => {
    setTime((prev) => (prev = prev + 0.001));
  };

  useEffect(() => {
		console.log('useEffect + SetInterval');

    const intervalId = setTimeout(() => {
			console.log('tick: ' + time);
			setTime((prevState) => prevState + 0.1);
    }, 100);

    refIntervalID.current = intervalId;

    return () => {
			console.log('reset: ' + time);
      return clearTimeout(intervalId);
    };
  }, [time]);

	time = Number(time.toFixed(1));

  return (
    <>
      <p>timer - {time}</p>
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
