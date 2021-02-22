type StyleType = {
  width: string;
  height: string;
  border: string;
  display: string;
  margin: string;
  padding: string;
  backgroundColor: string;
  cursor: string;
};

export const setStyleBtn = (status: boolean, toggle: boolean): StyleType => ({
  width: '30px',
  height: '20px',
  border: '1px solid black',
  display: 'inline-block',
  margin: '0 10px',
  padding: '5px',
  backgroundColor: status && toggle ? 'green' : !status && !toggle ? 'tomato' : 'aliceblue',
  cursor: 'pointer',
});
export const indicatorStyleFn = (status: boolean) => ({
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  border: '1px solid black',
  display: 'inline-block',
  backgroundColor: status ? 'green' : 'red',
});

// const toggleColor = (status: boolean, toggle: boolean): string => {
//   if (status && toggle) return 'green';
//   else if (!status && toggle) return 'white';
//   else if (!status && !toggle) return 'tomato';
//   else return 'white';
// };
// toggleColor(status, toggle),
