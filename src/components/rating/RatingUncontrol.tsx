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
  const [value, setValue] = useState<RatingValue>(defaultValue ?? 0);
  return (
    <div>
			<Star setRating={() => {setValue(1); onChange && onChange(1);}} selected={value > 0} />
      <Star setRating={() => {setValue(2); onChange && onChange(2);}} selected={value > 1} />
      <Star setRating={() => {setValue(3); onChange && onChange(3);}} selected={value > 2} />
      <Star setRating={() => {setValue(4); onChange && onChange(4);}} selected={value > 3} />
      <Star setRating={() => {setValue(5); onChange && onChange(5);}} selected={value > 4} />
    </div>
  );
}
function Star(props: StarProps) {
  const setRating = () => props.setRating();
  return <span onClick={setRating}>{props.selected ? <b>Star </b> : 'Star '}</span>;
}
