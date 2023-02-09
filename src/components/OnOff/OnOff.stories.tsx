import React, { useState } from 'react';
import OnOff from './OnOffControl';
import { action } from '@storybook/addon-actions';

export default {
  title: 'OnOff',
  component: OnOff,
};

const Callback = action('on or off clicked');

export const OnMode = () => <OnOff status={true} setStatus={Callback} />;
export const OffMode = () => <OnOff status={false} setStatus={Callback} />;

export const ModeChange = () => {
	const [value, setValue] = useState<boolean>(false);

	const changeHandler = (value: boolean) => {
		Callback(value);
		setValue(value)
	}
	
	return <OnOff status={value} setStatus={changeHandler}/>;
};