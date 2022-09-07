import React, { useMemo, useState } from 'react';

const factorialDelay = (n: number): number => {
  let result = 1;
  let temp = 100000000;
  while (temp) {
    temp--;
    const random = Math.random();
  }
  while (n) {
    result *= n--;
  }
  return result;
};

const factorial = (n: number): number => {
  let result = 1;
  while (n) {
    result *= n--;
  }
  return result;
};

export const ReactUseMemo = () => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const resultX = useMemo(() => factorialDelay(x),[x]);
  const resultY = useMemo(() => factorial(y),[y]);

  return (
    <form>
      <input type='number' value={x} onChange={(e) => setX(Number(e.currentTarget.value))} />
      <input type='number' value={y} onChange={(e) => setY(Number(e.currentTarget.value))} />
      <p>result factorial X: {resultX} </p>
      <p>result factorial Y: {resultY} </p>
    </form>
  );
};
