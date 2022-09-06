import React, { useState } from 'react';

const Counter = ({ count }: { count: number }) => {
	console.log('Counter');
  return <p>{count}</p>;
};

const Users = ({ users }: { users: string[] }) => {
	console.log('Users');
  const mappedUsers = users.map((el, ind) => {
    return <li key={ind}>{el}</li>;
  });

  return <ul>{mappedUsers}</ul>;
};

const MemoCounter = React.memo(Counter);
const MemoUsers = React.memo(Users);

export const ReactMemo = () => {
	const [count, setCount] = useState<number>(0)
	const [users, setUsers] = useState<string[]>(['Anna', 'Bob', 'Alex'])

	const addCounterHandler = () => setCount(count + 1);
	const addUserHandler = () => {
		const newUsers = [...users, 'Yar ' + Math.round(Math.random()*100)];
		setUsers(newUsers);
	}

	console.log('ReactMemo');

  return (
    <>
			<MemoCounter count={count} />
			<button onClick={addCounterHandler}>+</button>
      <MemoUsers users={users} />
			<button onClick={addUserHandler}>add user</button>
    </>
  );
};
