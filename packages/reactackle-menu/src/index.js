import { registerDefaultComponentTheme } from 'reactackle-core';
import componentTheme from './styles/theme';
import Menu from './Menu';

registerDefaultComponentTheme('menu', componentTheme);

export { Menu };
export * from './MenuItem';
export * from './MenuList';
export * from './MenuGroup';
