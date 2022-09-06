import React, { memo } from 'react';

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

export const Accordion = memo((props: AccordionProps) => {
  const { title, collapsed, items, setCollapsed } = props;
  const collapsedHandler = () => setCollapsed(!collapsed);
  console.log('accordion');
  const itemsList = items.map((item, ind) => {
    return <AccordionItem key={ind} {...item} />;
  });

  return (
    <div>
      <AccordionTitle titleValue={title} setCollapsed={collapsedHandler} />
      {!collapsed && <ul>{itemsList}</ul>}
    </div>
  );
});

const AccordionTitle = memo((props: AccordionTitleProps) => {
  const { titleValue, setCollapsed } = props;
  const collapsedHandler = () => setCollapsed();
  console.log('accordion title');
  return <h3 onClick={collapsedHandler}>{titleValue}</h3>;
});

const AccordionItem = memo(({ name }: ItemType) => {
  console.log('accordion item');
  return <li>{name}</li>;
});
