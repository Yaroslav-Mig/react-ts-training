import React, { useState } from 'react';
import { styles } from './OnOffStyle';

type PropsType = {
  toggle?: boolean;
  setToggle?: (value: boolean) => void;
};

export function OnOffUncontrolled(props: PropsType) {
  const { toggle, setToggle } = props;
  const [status, setStatus] = useState<boolean>(toggle ?? false);

  const onClickHandler = () => {
    setStatus(true);
    setToggle && setToggle(true);
  };
  const offClickHandler = () => {
    setStatus(false);
    setToggle && setToggle(false);
  };
  return (
    <div>
      <div style={styles.OnOff(status, true)} onClick={onClickHandler}>
        On
      </div>
      <div style={styles.OnOff(status, false)} onClick={offClickHandler}>
        Off
      </div>
      <div style={styles.Indicator(status)}></div>
    </div>
  );
}
