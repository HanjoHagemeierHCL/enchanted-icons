/* ========================================================================== *
 * Copyright (C) 2024 HCL America Inc.                                        *
 * Apache-2.0 license   https://www.apache.org/licenses/LICENSE-2.0           *
 * ========================================================================== */

import { createSvgIcon, IIconAttrs, IIconContent } from '../../../utils';

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
      `M18 13L18 4 16 4 16 6 13 6 13 8 16 8 16 13 13 13 13 15 21 15 21 13 18 13zM16.5 20A3.5 3.5 0 1113 23.5 3.5 3.5 0 0116.5 20m0-2A5.5 5.5 0 1022 23.5 5.5 5.5 0 0016.5 18zM8 30L2 30 2 2 8 2 8 4 4 4
       4 28 8 28 8 30zM30 30L24 30 24 28 28 28 28 4 24 4 24 2 30 2 30 30z`,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('research--matrix', 32, content, attrs);