import React from 'react';
import { styles } from './OnOffStyle';

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
      <div style={styles.OnOff(props.status, flagOn)} onClick={onChange}>
        On
      </div>
      <div style={styles.OnOff(props.status, flagOff)} onClick={offChange}>
        Off
      </div>
      <div style={styles.Indicator(props.status)}></div>
    </div>
  );
}
