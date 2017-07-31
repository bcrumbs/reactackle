'use strict';

import { registerDefaultComponentTheme } from 'reactackle-core';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('grid', componentTheme);

export * from './Container/Container';
export * from './Column/Column';
export * from './FlexRegion/FlexRegion';
export * from './PaddingBox/PaddingBox';
export * from './Row/Row';
