import React, { memo } from 'react';

type PageTitleProps = {
  title: string;
};

export const PageTitle = memo((props: PageTitleProps) => {
  return <h1>{props.title}</h1>;
});
