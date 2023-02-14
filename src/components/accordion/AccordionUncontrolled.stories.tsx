import React from 'react';
import { action } from '@storybook/addon-actions';
import AccordionUncontrolled from './AccordionUncontrolled';

export default {
  title: 'AccordionUncontrolled',
  component: AccordionUncontrolled,
};
const filmList = [
  { id: '1', name: 'Harry Potter' },
  { id: '2', name: 'Green mile' },
  { id: '3', name: 'Snatch' },
  { id: '4', name: 'Shot caller' },
  { id: '5', name: 'Fargo' },
];

const collapseCb = action('collapse list');
const expandCb = action('expand list');
const changeCb = action('collapse and expand list');
const clickItem = action('you clicked item');

export const collapseList = () => {
  return (
    <AccordionUncontrolled
      title={'Films'}
      collapsed={true}
      items={filmList}
      changeCollapsed={collapseCb}
    />
  );
};
export const expandList = () => {
  return (
    <AccordionUncontrolled
      title={'Films'}
      collapsed={false}
      items={filmList}
      clickItem={clickItem}
      changeCollapsed={expandCb}
    />
  );
};
export const changeList = () => {
  return (
    <AccordionUncontrolled
      title={'Films'}
      items={filmList}
      clickItem={clickItem}
      changeCollapsed={changeCb}
    />
  );
};
