import React, { useState } from 'react';
import Accordion from './Accordion';
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
  { id: '5', name: 'Roast chicken' },
];

const collapseCb = action('collapse list');
const expandCb = action('expand list');
const changeCb = action('collapse and expand list');
const clickItem = action('you clicked item');

export const collapseList = () => (
  <Accordion title='Menu' items={menuList} collapsed={true} setCollapsed={collapseCb} />
);
export const expandList = () => (
  <Accordion
    title='Menu'
    items={menuList}
    collapsed={false}
    clickItem={clickItem}
    setCollapsed={expandCb}
  />
);

export const ModeChange = () => {
  const [collapsed, setCollapsed] = useState(true);

  const collapsedHandler = (value: boolean) => {
    changeCb(value);
    setCollapsed(value);
  };

  return (
    <Accordion
      title={'Menu'}
      items={menuList}
      collapsed={collapsed}
      clickItem={clickItem}
      setCollapsed={collapsedHandler}
    />
  );
};
