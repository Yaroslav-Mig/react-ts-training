import React, { useState } from 'react';
import { Accordion } from './Accordion';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Accordion',
  component: Accordion,
};

const callback1 = action('collapsed');
const callback2 = action('uncollapsed');

export const Collapsed = () => <Accordion title='Menu' collapsed={true} setCollapsed={callback1} />;
export const UnCollapsed = () => <Accordion title='Menu' collapsed={false} setCollapsed={callback2} />;

export const ModeChange = () => {
	const [collapsed, setCollapsed] = useState(true)
	return <Accordion title={'Menu'} collapsed={collapsed} setCollapsed={setCollapsed}/>;
};
