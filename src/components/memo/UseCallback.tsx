/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';

const UseCallback = () => {
	console.log('UseCallback');
  const [text, setText] = useState<string>('');
	const textRef = useRef<null | string>(null);

	useEffect(() => {
		textRef.current = text;
	}, [text])

	const submitHandler = useCallback(() => {
		const textValue = textRef.current;
    console.log(textValue);
	}, [textRef]);

	const changeTextHandler = (e: ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value);

  return (
    <div>
      <input value={text} onChange={changeTextHandler} />
      <ExpensiveTreeMemo onSubmit={submitHandler} />
    </div>
  );
};

export default React.memo(UseCallback);

const ExpensiveTree = ({ onSubmit }: { onSubmit: () => void }) => {
  console.log('ExpensiveTree');
  return (
    <>
      <p>Show text from input in the console</p>
      <button onClick={onSubmit}>Submit</button>
    </>
  );
};
const ExpensiveTreeMemo = React.memo(ExpensiveTree);
