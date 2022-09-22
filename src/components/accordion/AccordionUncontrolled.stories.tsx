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

const callback = action('collapsing and spread list');

export const ModeChange = () => {
  return <AccordionUncontrolled title={'Films'} items={filmList} changeCollapsed={callback} />;
};
