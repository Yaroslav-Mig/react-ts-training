import React, { useState } from 'react';
import { AccordionUncontrol } from './AccordionUncontrol';
import { action } from '@storybook/addon-actions';

export default {
  title: 'AccordionUncontrol',
  component: AccordionUncontrol,
};

export const ModeChange = () => {
  return <AccordionUncontrol title={'User'}/>;
};
