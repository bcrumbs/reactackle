import { registerDefaultComponentTheme } from 'reactackle-core';
import componentTheme from './styles/theme';

registerDefaultComponentTheme('progress', componentTheme);

export { default as CircleProgress } from './CircleProgress/CircleProgress';
export * from './LinearProgress/LinearProgress';
export * from './Preloader/Preloader';
