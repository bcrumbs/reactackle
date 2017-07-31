import { injectGlobal } from 'styled-components';

export const injectHelperClasses = () => {
  // eslint-disable-next-line no-unused-expressions
  injectGlobal`    
    .rctckl__app-container {
      min-height: 100vh;
      width: 100vw;
      min-width: 0;
      height: 100%;
    }
  `;
};
