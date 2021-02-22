import React, { useState } from 'react';

type RatingProps = {
  value: number;
  onClick: (value: number) => void;
};

type StarProps = {
  selected: boolean;
  value: number;
  onClick: (value: number) => void;
};

export function Rating(props: RatingProps) {
  return (
    <div>
      <Star value={1} selected={props.value > 0} onClick={props.onClick} />
      <Star value={2} selected={props.value > 1} onClick={props.onClick} />
      <Star value={3} selected={props.value > 2} onClick={props.onClick} />
      <Star value={4} selected={props.value > 3} onClick={props.onClick} />
      <Star value={5} selected={props.value > 4} onClick={props.onClick} />
    </div>
  );
}

function Star(props: StarProps) {
  const setRating = () => props.onClick(props.value);
  return <span onClick={setRating}>{props.selected ? <b>Star </b> : 'Star '}</span>;
}
