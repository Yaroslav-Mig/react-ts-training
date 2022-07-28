import React from 'react';
import { OnOffUncontrol } from './OnOffUncontrol';
import { action } from '@storybook/addon-actions';

export default {
  title: 'OnOffUncontrolled',
  component: OnOffUncontrol,
};

const callback = action('on or off clicked');
export const ModeChangeOff = () => <OnOffUncontrol setToggle={callback} />;
export const ModeChangeOn = () => <OnOffUncontrol setToggle={callback} toggle={true} />;
