import React from 'react';

export type ItemType = {
  id: string;
  name: string;
};
type AccordionProps = {
  title: string;
  collapsed: boolean;
  items: Array<ItemType>;
  setCollapsed: (value: boolean) => void;
};
type AccordionTitleProps = {
  titleValue: string;
  setCollapsed: () => void;
};

export function Accordion(props: AccordionProps) {
  const { title, collapsed, items, setCollapsed } = props;
  const collapsedHandler = () => setCollapsed(!collapsed);
  console.dir(items);

  const itemsList = items.map((item, ind) => {
    return <AccordionItem key={ind} {...item} />;
  });

  return (
    <div>
      <AccordionTitle titleValue={title} setCollapsed={collapsedHandler} />
      {!collapsed && <ul>{itemsList}</ul>}
    </div>
  );
}

function AccordionTitle(props: AccordionTitleProps) {
  const { titleValue, setCollapsed } = props;
  const collapsedHandler = () => setCollapsed();

  return <h3 onClick={collapsedHandler}>{titleValue}</h3>;
}

function AccordionItem({ name }: ItemType) {
  return <li>{name}</li>;
}
