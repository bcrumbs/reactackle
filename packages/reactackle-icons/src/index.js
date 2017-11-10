import { registerDefaultComponentTheme } from 'reactackle-core';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('icon', componentTheme);

export * from './IconCustom';
export * from './IconSvg';
export * from './iconStyleMixin';
export * from './iconsPropType';
