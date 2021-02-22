// import React, { useState } from 'react';
// import { Accordion } from './Accordion';
// import { action } from '@storybook/addon-actions';

// export default {
//   title: 'Accordion',
//   component: Accordion,
// };

// const callback1 = action('collapsed');
// const callback2 = action('uncollapsed');

// export const CollapsedMode = () => (
//   <Accordion title={'Menu'} collapsed={true} setCollapsed={callback1} />
// );
// export const UnCollapsedMode = () => (
//   <Accordion title={'Menu'} collapsed={false} setCollapsed={callback2} />
// );

// export const ModeChange = () => {
//   const [collapsed, setCollapsed] = useState<boolean>(false);
//   return <Accordion title={'Menu'} collapsed={collapsed} setCollapsed={setCollapsed} />;
// };
