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
        `M 2.5 26.300781 C 1.101562 26.300781 0 27.300781 0 28.699219 C 0 30.097656 1.300781 31.097656 2.5 31.097656 C 3.898438 31.097656 5 30.097656 5 28.699219 C 5 27.300781 3.898438 26.300781 2.5
         26.300781 Z M 16.101562 26.300781 C 14.699219 26.300781 13.601562 27.300781 13.601562 28.699219 C 13.601562 30.097656 14.601562 31.097656 16.101562 31.097656 C 17.5 31.097656 18.601562
         30.097656 18.601562 28.699219 C 18.601562 27.300781 17.5 26.300781 16.101562 26.300781 Z M 29.398438 26.300781 C 28 26.300781 26.898438 27.300781 26.898438 28.699219 C 26.898438 30.097656
         28 31.097656 29.5 31.097656 C 30.898438 31.097656 32 30.097656 32 28.699219 C 32 27.300781 30.898438 26.300781 29.398438 26.300781 Z M 29.398438 13.699219 C 28 13.699219 26.898438
         14.699219 26.898438 16.101562 C 26.898438 17.300781 28 18.5 29.398438 18.5 C 30.800781 18.5 31.898438 17.5 31.898438 16.101562 C 31.898438 14.699219 30.800781 13.699219 29.398438
         13.699219 Z M 26.898438 3.300781 C 26.898438 1.898438 28 0.898438 29.398438 0.898438 C 30.800781 0.898438 31.898438 1.898438 31.898438 3.300781 C 31.898438 4.699219 30.800781 5.699219
         29.398438 5.699219 C 28 5.699219 26.898438 4.699219 26.898438 3.300781 Z M 13.601562 16.101562 C 13.601562 14.699219 14.699219 13.699219 16.101562 13.699219 C 17.5 13.699219 18.601562
         14.699219 18.601562 16.101562 C 18.601562 17.5 17.5 18.5 16.101562 18.5 C 14.601562 18.5 13.601562 17.300781 13.601562 16.101562 Z M 13.601562 16.101562 `,
      fill: 'currentColor',
      stroke: 'none',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    },
  },
];

export default createSvgIcon('drag-handle', 32, content, attrs);
