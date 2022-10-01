/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

const title = document.title;

const useEffectDemo = () => {
  const [counter, setCounter] = useState<number>(0);
  const [fake, setFake] = useState<number>(0);
  console.log('useEffectDemo');

  useEffect(() => {
    console.log('useEffect renders always every render');
    document.title = title + '-' + counter.toString();
  });

  useEffect(() => {
    console.log('useEffect renders only first render');
    document.title = title + '-' + counter.toString();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log('useEffect renders when counter is changed');
      document.title = title + '-' + counter.toString();
    }, 1000);
  }, [counter]);

  const addCounterHandler = () => setCounter(counter + 1);
  const addFakerHandler = () => setFake(counter + 1);

  return (
    <div>
      Hello, useEffect
      <br />
      counter - {counter}
      <br />
      fake - {fake}
      <br />
      <button onClick={addCounterHandler}>counter+</button>
      <button onClick={addFakerHandler}>fake+</button>
    </div>
  );
};

export default React.memo(useEffectDemo);
