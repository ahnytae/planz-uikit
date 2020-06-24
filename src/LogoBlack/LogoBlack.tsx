// 외부 모듈
/**@jsx jsx */
import { jsx, css } from '@emotion/core';

// 내부 모듈
import LogoPng from '@/img/logo_black.png';

type LogoBlackProps = {
  width: string;
};

export const LogoBlack = ({ width }: LogoBlackProps): JSX.Element => {
  return (
    <div>
      <img
        css={css`
          width: ${width};
        `}
        src={LogoPng}
        alt="logo"
      />
      ;
    </div>
  );
};

export default LogoBlack;
