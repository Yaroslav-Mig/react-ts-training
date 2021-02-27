import React, { useState } from 'react';
import { setStyleBtn, indicatorStyleFn } from './OnOffStyle';

type PropsType = {
  onChange: (value: boolean) => void;
  defaultValue?: boolean;
};

export function OnOffUncontrol(props: PropsType) {
  const [status, setStatus] = useState<boolean>(props.defaultValue ?? false);
  const onClick = () => {
    setStatus(true);
    props.onChange(true);
  };
  const offClick = () => {
    setStatus(false);
    props.onChange(false);
  };
  const flagOn = true;
  const flagOff = false;

  return (
    <div>
      <div style={setStyleBtn(status, flagOn)} onClick={onClick}>
        On
      </div>
      <div style={setStyleBtn(status, flagOff)} onClick={offClick}>
        Off
      </div>
      <div style={indicatorStyleFn(status)}></div>
    </div>
  );
}
