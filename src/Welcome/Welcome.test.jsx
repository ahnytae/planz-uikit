import React from 'react';
import { render, getByText, getByTestId } from '@testing-library/react';
import Welcome from './Welcome';

describe('<Welcome />', () => {
  it('Welcome 문자열 체크', () => {
    const { container } = render(<Welcome />);
    getByText(container, 'Welcome');
  });
  it('name props 체크', () => {
    const { container } = render(<Welcome name={'dabin'} />);
    getByText(container, 'dabin');
  });
  //   it('bold 체크', () => {
  //     const { container } = render(<Welcome isBold={true} />);
  //     const nameTag = getByTestId(container, 'name-tag');
  //     expect(getByTestId(container,'name-tag')).toHaveProperty()
  //   });
});
