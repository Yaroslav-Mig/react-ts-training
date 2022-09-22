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

const Accordion = (props: AccordionProps) => {
  const { title, collapsed, items, setCollapsed } = props;
  const collapsedHandler = () => setCollapsed(!collapsed);
  console.log('accordion');
  const itemsList = items.map((item) => {
    return <AccordionItemMemo key={item.id} {...item} />;
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

const AccordionItem = ({ name }: ItemType) => {
  console.log('accordion item');
  return <li>{name}</li>;
};

const AccordionTitleMemo = React.memo(AccordionTitle);
const AccordionItemMemo = React.memo(AccordionItem);
export default React.memo(Accordion);
