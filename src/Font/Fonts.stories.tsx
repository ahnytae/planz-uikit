// external modules
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { text, number, withKnobs } from '@storybook/addon-knobs';

// internal modules
import Font from './Font';

export default {
  title: 'components|Fonts',
  component: Font,
  decorators: [withKnobs],
};

export const title = (type: string): JSX.Element => {
  const fontFamily = text('fontFamily', 'Times Sans Serif');
  const lineHeight = number('lineHeight', 1.2);
  const children = text('children', 'COFFEE');

  type = 'title';

  return (
    <Font fontFamily={fontFamily} lineHeight={lineHeight} type={type}>
      {children}
    </Font>
  );
};

export const contentEn = (type: string): JSX.Element => {
  const fontFamily = text('fontFamily', 'Times Sans Serif');
  const lineHeight = number('lineHeight', 1.2);
  const children = text('children', 'We Select, You Pick');

  type = 'contentEn';

  return (
    <Font fontFamily={fontFamily} lineHeight={lineHeight} type={type}>
      {children}
    </Font>
  );
};
