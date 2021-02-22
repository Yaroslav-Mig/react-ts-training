import React from 'react';

type AccordionProps = {
  title: string;
  collapsed: boolean;
  setCollapsed1: (value: boolean) => void;
};
type AccordionTitleProps = {
  titleValue: string;
  setCollapsed2: () => void;
};

export function Accordion(props: AccordionProps) {
  const set = () => props.setCollapsed1(!props.collapsed);
  return (
    <div>
      <AccordionTitle titleValue={props.title} setCollapsed2={set} />
      {!props.collapsed && <AccordionBody />}
    </div>
  );
}
function AccordionTitle(props: AccordionTitleProps) {
  const set = () => props.setCollapsed2();
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
