import React from 'react';
import { styles } from './OnOffStyle';

type PropsType = {
  status: boolean;
  setStatus: (value: boolean) => void;
};

const OnOff = ({ status, setStatus }: PropsType) => {
  console.log('toggle');
  const onChange = () => setStatus(true);
  const offChangeHandler = () => setStatus(false);

  return (
    <div>
      <div style={styles.OnOff(status, true)} onClick={onChange}>
        On
      </div>
      <div style={styles.OnOff(status, false)} onClick={offChangeHandler}>
        Off
      </div>
      <div style={styles.Indicator(status)}></div>
    </div>
  );
};

export default React.memo(OnOff);