import React, { useState } from 'react';
import { OnOffUncontrol } from './OnOffUncontrol';
import { action } from '@storybook/addon-actions';

export default {
  title: 'OnOffUncontrolled',
  component: OnOffUncontrol,
};

const callback = action('on or off clicked');
export const ModeChangeOff = () => <OnOffUncontrol onChange={callback}/>;
export const ModeChangeOn = () => <OnOffUncontrol onChange={callback} defaultValue={true}/>;

