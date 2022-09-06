import React, { memo } from 'react';

export type RatingValue = 0 | 1 | 2 | 3 | 4 | 5;

type RatingProps = {
  value: RatingValue;
  onClick: (value: RatingValue) => void;
};

type StarProps = {
  selected: boolean;
  value: RatingValue;
  onClick: (value: RatingValue) => void;
};

export const Rating = memo((props: RatingProps) => {
	console.log('rating body');
  return (
    <div>
      <Star value={1} selected={props.value > 0} onClick={props.onClick} />
      <Star value={2} selected={props.value > 1} onClick={props.onClick} />
      <Star value={3} selected={props.value > 2} onClick={props.onClick} />
      <Star value={4} selected={props.value > 3} onClick={props.onClick} />
      <Star value={5} selected={props.value > 4} onClick={props.onClick} />
    </div>
  );
});

const Star = memo((props: StarProps) => {
	console.log('rating item');
  const setRating = () => props.onClick(props.value);
  return <span onClick={setRating}>{props.selected ? <b>Star </b> : 'Star '}</span>;
});
