import React, { useState } from 'react';

type AccordionProps = {
	title: string;
};
type AccordionTitleProps = {
  titleValue: string;
  valueCollapsed: boolean;
  changeCollapsed: (value: boolean) => void;
};

export function AccordionUncontrol(props: AccordionProps) {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <div>
      <AccordionTitle
        titleValue={props.title}
        valueCollapsed={collapsed}
        changeCollapsed={setCollapsed}
      />
      {!collapsed && <AccordionBody />}
    </div>
  );
}

function AccordionTitle(props: AccordionTitleProps) {
  const setCollapsed = () => props.changeCollapsed(!props.valueCollapsed);
  return <h3 onClick={setCollapsed}>{props.titleValue}</h3>;
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
