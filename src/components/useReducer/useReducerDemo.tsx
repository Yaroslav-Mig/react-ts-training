import React, { useReducer } from 'react';
import { increaseWidthAC, resetWidthAC, setInitWidth, widthReducer } from './width-reducer';

const useReducerDemo = ({ initWidth }: { initWidth: number }): JSX.Element => {
  const [width, dispatch] = useReducer(widthReducer, initWidth, setInitWidth);

  const handleIncrease = (): void => dispatch(increaseWidthAC());
  const handleReset = (): void => dispatch(resetWidthAC(initWidth));

  return (
    <div>
      <h1>Click the button below to see it grow:</h1>
      <button style={{ width }} onClick={handleIncrease}>
        I grow
      </button>
      <br />
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default React.memo(useReducerDemo);
