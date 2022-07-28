import React from 'react';
import { OnOffUncontrolled } from './OnOffUncontrolled';
import { action } from '@storybook/addon-actions';

export default {
  title: 'OnOffUncontrolled',
  component: OnOffUncontrolled,
};

const callback = action('on or off clicked');
export const ModeChangeOff = () => <OnOffUncontrolled setToggle={callback} />;
export const ModeChangeOn = () => <OnOffUncontrolled setToggle={callback} toggle={true} />;
