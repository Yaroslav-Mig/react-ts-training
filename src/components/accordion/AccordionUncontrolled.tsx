import React, { memo, useReducer } from 'react';
import { ItemType } from './Accordion';
import { accordionReducer, changeCollapsedAC } from './Accordion-reducer';

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

const AccordionTitle = (props: AccordionTitleProps) => {
  console.log('accordion2 title');
  const { titleValue, changeCollapsed } = props;
  const collapseHandler = () => changeCollapsed();
  return <h3 onClick={collapseHandler}>{titleValue}</h3>;
};

const AccordionBody = ({ items }: AccordionBodyProps) => {
  console.log('accordion2 item');
  const itemsList = items.map((item, inx) => <li key={inx}>{item.name}</li>);
  return <ul>{itemsList}</ul>;
};

const AccordionTitleMemoized = memo(AccordionTitle);
const AccordionBodyMemoized = memo(AccordionBody);

export const AccordionUncontrolled = memo((props: AccordionProps) => {
  const { title, items, changeCollapsed } = props;
  console.log('accordion2');
  const [state, dispatch] = useReducer(accordionReducer, { collapsed: true });

  const collapseHandler = () => {
    changeCollapsed && changeCollapsed(!state.collapsed);
    dispatch(changeCollapsedAC(state.collapsed));
  };

  return (
    <div>
      <AccordionTitleMemoized titleValue={title} changeCollapsed={collapseHandler} />
      {!state.collapsed && <AccordionBodyMemoized items={items} />}
    </div>
  );
});

