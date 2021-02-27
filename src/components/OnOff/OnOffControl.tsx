import React from 'react';
import { setStyleBtn, indicatorStyleFn } from './OnOffStyle';

type PropsType = {
  status: boolean;
  setStatus: (value: boolean) => void;
};

export function OnOff(props: PropsType) {
  const onChange = () => props.setStatus(true);
  const offChange = () => props.setStatus(false);
  const flagOn = true;
  const flagOff = false;

  return (
    <div>
      <div style={setStyleBtn(props.status, flagOn)} onClick={onChange}>
        On
      </div>
      <div style={setStyleBtn(props.status, flagOff)} onClick={offChange}>
        Off
      </div>
      <div style={indicatorStyleFn(props.status)}></div>
    </div>
  );
}
