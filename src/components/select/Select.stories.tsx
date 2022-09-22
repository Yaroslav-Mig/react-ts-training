import React from 'react';
import Select, { SelectHoverMemo as SelectHover } from './Select';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Select',
	component: Select,
};

const petsList = [
  { id: '1', name: 'Dog' },
  { id: '2', name: 'Cat' },
  { id: '3', name: 'Fish' },
  { id: '4', name: 'Parrot' },
  { id: '5', name: 'Rodent' },
];

const callback = action('choose option');

export const SelectConditionalRendering = () => {
  return <Select items={petsList} onChange={callback} />;
};

export const SelectShowWithHover = () => {
  return <SelectHover items={petsList} onChange={callback} />;
};

