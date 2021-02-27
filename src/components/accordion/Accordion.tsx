import React from 'react';

type AccordionProps = {
  title: string;
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
};
type AccordionTitleProps = {
  titleValue: string;
  setCollapsed: () => void;
};

export function Accordion(props: AccordionProps) {
  const set = () => props.setCollapsed(!props.collapsed);
  return (
    <div>
      <AccordionTitle titleValue={props.title} setCollapsed={set} />
      {!props.collapsed && <AccordionBody />}
    </div>
  );
}
function AccordionTitle(props: AccordionTitleProps) {
  const set = () => props.setCollapsed();
  return <h3 onClick={set}>{props.titleValue}</h3>;
}
function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
