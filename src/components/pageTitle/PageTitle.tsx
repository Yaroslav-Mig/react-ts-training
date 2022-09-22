import React from 'react';

type PageTitleProps = {
  title: string;
};

const PageTitle = (props: PageTitleProps) => {
  console.log('PageTitle');
  return <h1>{props.title}</h1>;
};

export default React.memo(PageTitle);
