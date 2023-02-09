import React, { useState } from 'react';
import RatingUncontrolled from './RatingUncontrolled';
import { RatingValue } from './Rating';
import { action } from '@storybook/addon-actions';

export default {
  title: 'RatingUncontrolled',
  component: RatingUncontrolled,
};

const callback = action('want to set new rating');
const callback_2 = action('changed to rating');

export const EmptyRating = () => <RatingUncontrolled value={0} onChange={callback} />;
export const Rating1 = () => <RatingUncontrolled value={1} onChange={callback} />;
export const Rating2 = () => <RatingUncontrolled value={2} onChange={callback} />;
export const Rating3 = () => <RatingUncontrolled value={3} onChange={callback} />;
export const Rating4 = () => <RatingUncontrolled value={4} onChange={callback} />;
export const Rating5 = () => <RatingUncontrolled value={5} onChange={callback} />;

export const RatingChange = () => {
	const [rating, setRating] = useState<RatingValue>(0);

	const ratingHandler = (value: RatingValue) => {
    callback_2(value);
    setRating(value);
	};

	return <RatingUncontrolled value={rating} onChange={ratingHandler} />;
}
