/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

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
  },[]);

  return <p>text - {time}</p>;
};

export const SetIntervalDemo = () => {
  const [time, setTime] = useState<number>(0);
  console.log('SetInterval');

	useEffect(() => {
    console.log('useEffect + SetInterval');

    const setIntervalId = setInterval(() => {
      console.log('tick: ' + time);
      setTime((prevState) => prevState + 1);
    }, 1000);

    return () => {
      console.log('reset: ' + time);
      return clearInterval(setIntervalId);
    };
  }, []);

  return <p>timer - {time}</p>;
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
