import { CSSProperties } from 'react';

type StylesType = {
  OnOff: (status: boolean, toggle: boolean) => CSSProperties ;
  Indicator: (status: boolean) => CSSProperties ;
};

const setStyleBtn = (status: boolean, toggle: boolean) => ({
  width: '30px',
  height: '20px',
  border: '1px solid black',
  display: 'inline-block',
  margin: '0 10px',
  padding: '5px',
  backgroundColor: status && toggle ? 'green' : !status && !toggle ? 'tomato' : 'aliceblue',
  cursor: 'pointer',
} as CSSProperties);

const setStyleIndicator = (status: boolean) => ({
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  border: '1px solid black',
  display: 'inline-block',
  backgroundColor: status ? 'green' : 'red',
} as CSSProperties);

export const styles: StylesType = {
  OnOff: setStyleBtn,
  Indicator: setStyleIndicator,
};

// const toggleColor = (status: boolean, toggle: boolean): string => {
//   if (status && toggle) return 'green';
//   else if (!status && toggle) return 'white';
//   else if (!status && !toggle) return 'tomato';
//   else return 'white';
// };
// toggleColor(status, toggle),
