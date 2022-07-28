import React, { useState } from 'react';
import { RatingValue } from './Rating';

type RatingPropsType = {
  defaultValue?: RatingValue;
  onChange?: (value: RatingValue) => void;
};
type StarProps = {
  selected: boolean;
  setRating: () => void;
};

export function RatingUncontrol(props: RatingPropsType) {
  const { defaultValue, onChange } = props;
  let [value, setValue] = useState<RatingValue>(0);

  const setRatingHandler = (value: RatingValue): (() => void) => {
    if (onChange) {
      return () => onChange(value);
    }
    return () => setValue(value);
  };

  if (defaultValue !== undefined) {
    value = defaultValue;
  }
  return (
    <div>
      <Star setRating={setRatingHandler(1)} selected={value > 0} />
      <Star setRating={setRatingHandler(2)} selected={value > 1} />
      <Star setRating={setRatingHandler(3)} selected={value > 2} />
      <Star setRating={setRatingHandler(4)} selected={value > 3} />
      <Star setRating={setRatingHandler(5)} selected={value > 4} />
    </div>
  );
}
function Star(props: StarProps) {
  const setRating = () => props.setRating();
  return <span onClick={setRating}>{props.selected ? <b>Star </b> : 'Star '}</span>;
}
