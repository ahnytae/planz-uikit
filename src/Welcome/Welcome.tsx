/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export type WelcomeProps = {
  /** 이름을 표시하는 props */
  name: string;
  isBold?: boolean;
};

/**
 * 반갑다는 컴포넌트
 */
const Welcome = ({ name, isBold }: WelcomeProps) => {
  return (
    <div>
      <div css={isBold && boldStyle}>{`Welcome ${name}`}</div>
    </div>
  );
};

const boldStyle = css`
  font-weight: bold;
`;

export default Welcome;
