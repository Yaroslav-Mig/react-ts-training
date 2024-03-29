import React, { useState } from 'react';
import Rating, { RatingValue } from './Rating';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Rating',
  component: Rating,
};
const callback = action('star click');

export const EmptyRating = () => <Rating value={0} onClick={callback} />;
export const Rating1 = () => <Rating value={1} onClick={callback} />;
export const Rating2 = () => <Rating value={2} onClick={callback} />;
export const Rating3 = () => <Rating value={3} onClick={callback} />;
export const Rating4 = () => <Rating value={4} onClick={callback} />;
export const Rating5 = () => <Rating value={5} onClick={callback} />;

export const RatingChange = () => {
  const [rating, setRating] = useState<RatingValue>(0);

  const ratingHandler = (value: RatingValue) => {
    callback(value);
    setRating(value);
  };

  return <Rating value={rating} onClick={ratingHandler} />;
};
