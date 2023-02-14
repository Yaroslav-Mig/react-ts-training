import React from 'react';

export type ItemType = {
  id: string;
  name: string;
  clickItem?: (value: string) => void;
};

type AccordionProps = {
  title: string;
  collapsed: boolean;
  items: Array<ItemType>;
  clickItem?: (value: string) => void;
  setCollapsed: (value: boolean) => void;
};

type AccordionTitleProps = {
  titleValue: string;
  setCollapsed: () => void;
};

const Accordion = (props: AccordionProps) => {
  const { title, collapsed, items, clickItem, setCollapsed } = props;

  const collapsedHandler = () => setCollapsed(!collapsed);
  console.log('accordion');
  const itemsList = items.map((item) => {
    return <AccordionItemMemo key={item.id} {...item} clickItem={clickItem} />;
  });

  return (
    <div>
      <AccordionTitleMemo titleValue={title} setCollapsed={collapsedHandler} />
      {!collapsed && <ul>{itemsList}</ul>}
    </div>
  );
};

const AccordionTitle = (props: AccordionTitleProps) => {
  const { titleValue, setCollapsed } = props;
  const collapsedHandler = () => setCollapsed();
  console.log('accordion title');
  return <h3 onClick={collapsedHandler}>{titleValue}</h3>;
};

const AccordionItem = ({ id, name, clickItem }: ItemType) => {
  console.log('accordion item');
  return <li onClick={() => clickItem?.(id)}>{name}</li>;
};

const AccordionTitleMemo = React.memo(AccordionTitle);
const AccordionItemMemo = React.memo(AccordionItem);
export default React.memo(Accordion);
