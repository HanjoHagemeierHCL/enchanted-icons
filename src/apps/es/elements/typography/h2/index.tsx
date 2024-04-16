/* ========================================================================== *
 * Copyright (C) 2024 HCL America Inc.                                        *
 * Apache-2.0 license   https://www.apache.org/licenses/LICENSE-2.0           *
 * ========================================================================== */

import { createSvgIcon, IIconAttrs, IIconContent } from '../../../../../utils';

const attrs: IIconAttrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 32 32',
  width: 32,
  height: 32,
};

const content: IIconContent[] = [
  {
    elem: 'path',
    attrs: {
      d:
        `M24,9 C25.1045695,9 26,9.8954305 26,11 L26,15 C26,16.1045695 25.1045695,17 24,17 L20,17 L20,21 L26,21 L26,23 L18,23 L18,17 C18,15.8954305 18.8954305,15 20,15 L24,15 L24,11 
          L18,11 L18,9 L24,9 Z M8,9 L8,15 L12,15 L12,9 L14,9 L14,23 L12,23 L12,17 L8,17 L8,23 L6,23 L6,9 L8,9 Z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('h2', 32, content, attrs);
