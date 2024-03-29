import React, { useReducer } from 'react';
import { ItemType } from './Accordion';
import { accordionReducer, changeCollapsedAC } from './Accordion-reducer';

type AccordionProps = {
  title: string;
  collapsed?: boolean;
  items: Array<ItemType>;
  clickItem?: (value: string) => void;
  changeCollapsed?: (collapsed: boolean) => void;
};

type AccordionTitleProps = {
  titleValue: string;
  changeCollapsed: () => void;
};

type AccordionBodyProps = {
  items: Array<ItemType>;
  clickItem?: (value: string) => void;
};

const AccordionTitle = (props: AccordionTitleProps) => {
  console.log('accordion2 title');
	const { titleValue, changeCollapsed } = props;

  const collapseHandler = () => changeCollapsed();
  return <h3 onClick={collapseHandler}>{titleValue}</h3>;
};

const AccordionBody = ({ items, clickItem }: AccordionBodyProps) => {
	console.log('accordion2 item');

  const itemsList = items.map((item) => (
    <li key={item.id} onClick={() => clickItem?.(item.id)}>
      {item.name}
    </li>
	));

  return <ul>{itemsList}</ul>;
};

const AccordionTitleMemoized = React.memo(AccordionTitle);
const AccordionBodyMemoized = React.memo(AccordionBody);

const AccordionUncontrolled = (props: AccordionProps) => {
  const { title, collapsed, items, clickItem, changeCollapsed } = props;
  console.log('accordion2');
  const [state, dispatch] = useReducer(accordionReducer, { collapsed: true });

  const collapseHandler = () => {
    changeCollapsed && changeCollapsed(!state.collapsed);
    dispatch(changeCollapsedAC(state.collapsed));
  };

  if (collapsed !== undefined) {
    state.collapsed = collapsed;
  }

  return (
    <div>
      <AccordionTitleMemoized titleValue={title} changeCollapsed={collapseHandler} />
      {!state.collapsed && <AccordionBodyMemoized items={items} clickItem={clickItem} />}
    </div>
  );
};

export default React.memo(AccordionUncontrolled);
