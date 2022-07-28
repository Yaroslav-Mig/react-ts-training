import React, { useState } from 'react';

type AccordionProps = {
  title: string;
  changeCollapsed?: (collapsed: boolean) => void;
};
type AccordionTitleProps = {
  titleValue: string;
  changeCollapsed: () => void;
};

export function AccordionUncontrolled(props: AccordionProps) {
  const { title, changeCollapsed } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const collapseHandler = () => {
    changeCollapsed && changeCollapsed(!collapsed);
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <AccordionTitle titleValue={title} changeCollapsed={collapseHandler} />
      {!collapsed && <AccordionBody />}
    </div>
  );
}

function AccordionTitle(props: AccordionTitleProps) {
  const collapseHandler = () => props.changeCollapsed();
  return <h3 onClick={collapseHandler}>{props.titleValue}</h3>;
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
