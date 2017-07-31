import { injectGlobal } from 'styled-components';
import base from './base';

export const injectGlobalStyle = () => {
  // eslint-disable-next-line no-unused-expressions
  injectGlobal`    
    html,
    body {
      font-size: 100%;
      display: flex;
      align-items: stretch;
      overflow-x: hidden;
    }
    
    body {
      cursor: default;
      background-color: ${base.body.backgroundColor};
      color: ${base.body.fontColor};
      font-family: ${base.body.fontFamily};
      font-weight: ${base.body.fontWeight};
      line-height: ${base.body.lineHeight};
      position: relative;
      width: 100%;
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }
  `;
};
