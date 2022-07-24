import React, { useState } from 'react';
import { styles } from './OnOffStyle';

type PropsType = {
  onChange?: (value: boolean) => void;
  defaultValue?: boolean;
};

export function OnOffUncontrol(props: PropsType) {
  const [status, setStatus] = useState<boolean>(props.defaultValue ?? false);
  const onClick = () => setStatus(true);
  const offClick = () =>  setStatus(false);
  const flagOn = true;
  const flagOff = false;

  return (
    <div>
      <div style={styles.OnOff(status, flagOn)} onClick={onClick}>
        On
      </div>
      <div style={styles.OnOff(status, flagOff)} onClick={offClick}>
        Off
      </div>
      <div style={styles.Indicator(status)}></div>
    </div>
  );
}
