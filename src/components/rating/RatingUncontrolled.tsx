import React, { useState } from 'react';
import { RatingValue } from './Rating';

type RatingPropsType = {
  value?: RatingValue;
  onChange?: (value: RatingValue) => void;
};
type StarProps = {
  selected: boolean;
  setRating: () => void;
};

const RatingUncontrolled = (props: RatingPropsType) => {
  const { value: defaultValue, onChange } = props;
  let [value, setValue] = useState<RatingValue>(0);
  console.log('rating2 body');
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
      <StarMemo setRating={setRatingHandler(1)} selected={value > 0} />
      <StarMemo setRating={setRatingHandler(2)} selected={value > 1} />
      <StarMemo setRating={setRatingHandler(3)} selected={value > 2} />
      <StarMemo setRating={setRatingHandler(4)} selected={value > 3} />
      <StarMemo setRating={setRatingHandler(5)} selected={value > 4} />
    </div>
  );
};

const Star = (props: StarProps) => {
  console.log('rating2 item');
  const setRating = () => props.setRating();
  return <span onClick={setRating}>{props.selected ? <b>Star </b> : 'Star '}</span>;
};

const StarMemo = React.memo(Star);
export default React.memo(RatingUncontrolled);
