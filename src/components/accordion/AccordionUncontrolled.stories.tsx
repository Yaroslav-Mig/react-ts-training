import React from 'react';
import { action } from '@storybook/addon-actions';
import { AccordionUncontrolled } from './AccordionUncontrolled';

export default {
  title: 'AccordionUncontrolled',
  component: AccordionUncontrolled,
};

const callback = action('collapsing and spread list');

export const ModeChange = () => {
  return <AccordionUncontrolled title={'User'} changeCollapsed={callback} />;
};
