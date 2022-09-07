import React, { KeyboardEvent, memo, useEffect, useState } from 'react';
import st from './Select.module.css';
import { ItemType } from '../accordion/Accordion';

type SelectProps = {
  items: Array<ItemType>;
  onChange?: (name: string) => void;
};

export const Select = memo((props: SelectProps) => {
  const { items, onChange } = props;
	console.log('select');
  const [value, setValue] = useState<string>('Choose an option');
  const [toggle, setToggle] = useState<boolean>(false);
  const [hoveredValue, setHoveredValue] = useState<string>('');

  useEffect(() => {
    setHoveredValue(value);
  }, [value]);

  const selectItem = items.find((item) => item.name === value);
  const hoveredItem = items.find((item) => item.name === hoveredValue);

  const toogleHandler = (): void => setToggle(!toggle);

  const onKeyUpHandler = (e: KeyboardEvent<HTMLParagraphElement>): void => {
    const key: string = e.key;

    if (key === 'ArrowUp' || key === 'ArrowDown') {
      items.forEach((el, ind, arr): void => {
        if (el.id === hoveredItem?.id) {
          const item = key === 'ArrowUp' ? arr[ind - 1] : arr[ind + 1];
          if (item) {
            setValue(item.name);
            return;
          }
        }
      });
      if (!selectItem) {
        setValue(items[0].name);
      }
    }

    if (key === 'Enter' || key === 'Escape') {
      setToggle(false);
    }
  };

  const chooseValueHadler = (name: string): void => {
    onChange && onChange(name);
    setValue(name);
    toogleHandler();
  };

  const itemsList = items.map((item) => {
    const stylesItem = hoveredItem?.id === item.id ? `${st.item} ${st.active}` : `${st.item}`;

    return (
      <li
        key={item.id}
        className={stylesItem}
        onClick={() => chooseValueHadler(item.name)}
        onMouseEnter={() => setHoveredValue(item.name)}
      >
        {item.name}
      </li>
    );
  });

  return (
    <div className={st.wrapper}>
      <p
        className={st.text}
        title='Click to choose an option'
        tabIndex={0}
        onClick={toogleHandler}
        onKeyUp={onKeyUpHandler}
      >
        {value}
      </p>
      {toggle && <ul>{itemsList}</ul>}
    </div>
  );
});

//TODO: with hover selector
export const SelectHover = memo((props: SelectProps) => {
  const { items, onChange } = props;
	console.log('select hover');

  const [value, setValue] = useState<string>('Choose an option');

  const selectItem = items.find((item) => item.name === value);

  const chooseValueHadler = (name: string): void => {
    onChange && onChange(name);
    setValue(name);
  };

  const itemsList = items.map((item) => {
    const stylesItem = selectItem?.id === item.id ? `${st.item} ${st.active}` : `${st.item}`;

    return (
      <li key={item.id} className={stylesItem} onClick={() => chooseValueHadler(item.name)}>
        {item.name}
      </li>
    );
  });

  return (
    <div className={st.wrapper}>
      <div className={st.text} title='Click to choose an option'>
        {value}
        <ul className={st.list}>{itemsList}</ul>
      </div>
    </div>
  );
});