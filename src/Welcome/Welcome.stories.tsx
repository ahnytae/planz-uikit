import React from 'react';
import Welcome from './Welcome';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Welcome',
  component: Welcome,
  decorators: [withKnobs],
};

export const basic = () => {
  const name = text('name', 'Wecode');
  const isBold = boolean('isBold', false);

  return <Welcome name={name} isBold={isBold} />;
};
