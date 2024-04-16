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
    elem: 'circle',
    attrs: {
      cx: '16',
      cy: '16',
      fill: 'currentColor',
      r: '14',
    },
  },
  {
    elem: 'line',
    attrs: {
      stroke: '#fff',
      strokeWidth: '4',
      x1: '7',
      x2: '25',
      y1: '16',
      y2: '16',
    },
  },
];

export default createSvgIcon('user-status--in-a-meeting', 32, content, attrs);