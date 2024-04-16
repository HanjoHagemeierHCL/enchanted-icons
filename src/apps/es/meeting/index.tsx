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
        `M26 4H22V2H20V4H12V2H10V4H6C4.89543 4 4 4.89543 4 6V26C4 27.1046 4.89543 28 6 28H26C27.1046 28 28 27.1046 28 26V6C28 4.89543 27.1046 4 26 4ZM26 26H6V12H26V26ZM18 15C18.552 15 19 15.448 19
         16V17.586L21.44 16.054C21.69 15.898 22 16.096 22 16.412V21.588C22 21.904 21.69 22.102 21.44 21.946L19 20.414V22C19 22.552 18.552 23 18 23H11C10.448 23 10 22.552 10 22V16C10 15.448 10.448
         15 11 15H18ZM10 6V8H12V6H20V8H22V6H26V10H6V6H10Z`,
    },
  },
];

export default createSvgIcon('meeting', 32, content, attrs);
