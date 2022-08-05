import React, { useState } from 'react';
import { Accordion } from './Accordion';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Accordion',
  component: Accordion,
};

const menuList = [
  { id: '1', name: 'French fries' },
  { id: '2', name: 'Vegetable salad' },
  { id: '3', name: 'Soup' },
  { id: '4', name: 'Pork chop' },
  { id: '4', name: 'Roast chicken' },
];

const callback1 = action('collapsed');
const callback2 = action('uncollapsed');

export const Collapsed = () => (
  <Accordion title='Menu' items={menuList} collapsed={true} setCollapsed={callback1} />
);
export const UnCollapsed = () => (
  <Accordion title='Menu' items={menuList} collapsed={false} setCollapsed={callback2} />
);

export const ModeChange = () => {
  const [collapsed, setCollapsed] = useState(true);
  return <Accordion title={'Menu'} items={menuList} collapsed={collapsed} setCollapsed={setCollapsed} />;
};
