import React, { useState } from 'react';
import { ItemType } from './Accordion';

type AccordionProps = {
  title: string;
  items: Array<ItemType>;
  changeCollapsed?: (collapsed: boolean) => void;
};
type AccordionTitleProps = {
  titleValue: string;
  changeCollapsed: () => void;
};
type AccordionBodyProps = {
  items: Array<ItemType>;
};

export function AccordionUncontrolled(props: AccordionProps) {
  const { title, items, changeCollapsed } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const collapseHandler = () => {
    changeCollapsed && changeCollapsed(!collapsed);
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <AccordionTitle titleValue={title} changeCollapsed={collapseHandler} />
      {!collapsed && <AccordionBody items={items} />}
    </div>
  );
}

function AccordionTitle(props: AccordionTitleProps) {
  const { titleValue, changeCollapsed } = props;
  const collapseHandler = () => changeCollapsed();
  return <h3 onClick={collapseHandler}>{titleValue}</h3>;
}

function AccordionBody({ items }: AccordionBodyProps) {
  const itemsList = items.map((item, inx) => <li key={inx}>{item.name}</li>);
  return <ul>{itemsList}</ul>;
}
