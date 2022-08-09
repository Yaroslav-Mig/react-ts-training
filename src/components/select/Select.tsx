import React, { useState } from 'react';
import st from './Select.module.css';
import { ItemType } from '../accordion/Accordion';

type SelectProps = {
  items: Array<ItemType>;
  onChange?: (name: string) => void;
};

export const Select = (props: SelectProps) => {
  const { items, onChange } = props;

  const [value, setValue] = useState<string>('Choose an option');
  const [toggle, setToggle] = useState<boolean>(true);

  const selectItem = items.find((item) => item.name === value);

  const toogleHandler = (): void => setToggle(!toggle);

  const chooseValueHadler = (name: string): void => {
    onChange && onChange(name);
    setValue(name);
    toogleHandler();
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
      <p className={st.text} title='Click to choose an option' onClick={toogleHandler}>
        {value}
      </p>
      {toggle && <ul className={st.list}>{itemsList}</ul>}
    </div>
  );
};
