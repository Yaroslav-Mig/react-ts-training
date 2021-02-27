import React from 'react';
import { RatingUncontrol } from './RatingUncontrol';
import { action } from '@storybook/addon-actions';

export default {
  title: 'RatingUncontrol',
  component: RatingUncontrol,
};

const callback = action('set rating');

export const EmptyRating = () => <RatingUncontrol onChange={callback} />;
export const Rating1 = () => <RatingUncontrol defaultValue={1} onChange={callback} />;
export const Rating2 = () => <RatingUncontrol defaultValue={2} onChange={callback} />;
export const Rating3 = () => <RatingUncontrol defaultValue={3} onChange={callback} />;
export const Rating4 = () => <RatingUncontrol defaultValue={4} onChange={callback} />;
export const Rating5 = () => <RatingUncontrol defaultValue={5} onChange={callback} />;
