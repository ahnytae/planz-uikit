import { addParameters } from "@storybook/react";

// 커스텀 값
const customViewports = {
  kiosk: {
    name: "kiosk",
    styles: {
      width: "1920px",
      height: "1080px",
    },
  },
};

addParameters({
  viewport: {
    viewports: {
      ...customViewports,
    },
  },
});
