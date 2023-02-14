import React, { KeyboardEvent, useEffect, useState } from 'react';
import st from './Select.module.css';
import { ItemType } from '../accordion/Accordion';

type SelectProps = {
  items: Array<ItemType>;
  onChange?: (name: string) => void;
};

const Select = (props: SelectProps) => {
  const { items, onChange } = props;
  console.log('select');
  const [value, setValue] = useState<string>('Choose an option');
  const [toggle, setToggle] = useState<boolean>(false);
  const [hoveredValue, setHoveredValue] = useState<string>('');

  useEffect(() => {
    setHoveredValue(value);
  }, [value]);

  // const selectItem = items.find((item) => item.name === value) as ItemType;
  const hoveredItem = items.find((item) => item.name === hoveredValue) as ItemType;

  const toogleHandler = (): void => setToggle(!toggle);

  const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>): void => {
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

      if (!hoveredItem) {
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
    <div className={st.wrapper} onKeyUp={onKeyUpHandler} tabIndex={1}>
      <p className={st.text} title='Click to choose an option' onClick={toogleHandler}>
        {value}
      </p>
      {toggle && <ul>{itemsList}</ul>}
    </div>
  );
};
export default React.memo(Select);

//TODO: with hover selector
const SelectHover = (props: SelectProps) => {
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
};

export const SelectHoverMemo = React.memo(SelectHover);
