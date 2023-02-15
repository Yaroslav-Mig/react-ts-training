import React, { useEffect, useReducer, useRef } from 'react';
import { changeStepCountAC, countReducer, CountType, resetCountAC, TickCountAC } from './count-reducer';
import { increaseWidthAC, resetWidthAC, setInitWidth, widthReducer } from './width-reducer';

const useReducerDemo = ({ initWidth }: { initWidth: number }): JSX.Element => {
  //TODO: tutorial for change button
  const [width, dispatchWidth] = useReducer(widthReducer, initWidth, setInitWidth);

  const handleIncrease = (): void => dispatchWidth(increaseWidthAC());
  const handleReset = (): void => dispatchWidth(resetWidthAC(initWidth));

  //TODO: tutorial for counter with useReducer
  const initialCount = {
    count: 0,
    step: 1,
  } as CountType;

  const [state, dispatchCount] = useReducer(countReducer, initialCount);
  const refInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      dispatchCount(TickCountAC());
    }, 1000);
    console.log(id);
    return () => {
      clearInterval(id);
    };
  }, [dispatchCount]);

  const addStepHandler = () => {
    const el = refInput.current as HTMLInputElement;
    dispatchCount(changeStepCountAC(Number(el.value)));
	};

	const resetHandler = () => {dispatchCount(resetCountAC(initialCount))}

  return (
    <div>
      <h1>Click the button below to see it grow:</h1>
      <button style={{ width }} onClick={handleIncrease}>
        I grow
      </button>
      <br />
      <button onClick={handleReset}>reset</button>
      <hr />
      <p>{state.count}</p>
      <input ref={refInput} type='number' min={1} max={10} step={1} />
      <button onClick={addStepHandler}>add</button>
      <button onClick={resetHandler}>reset</button>
    </div>
  );
};

export default React.memo(useReducerDemo);
