import { injectGlobal } from 'styled-components';

/*
 * Reset
 * Normalization of HTML elements
 * We recommend you to use Normalize - https://github.com/necolas/normalize.css
 * or https://github.com/twbs/bootstrap/blob/v4-dev/scss/_reboot.scss
 */

/*
 * 1 - Set box-sizing to border-box to be sure that width isn't affected by
 * padding or border
 *
 * 2 - Prevent adjustments of font size after orientation changes in IE on
 * Windows Phone and in iOS.
 *
 * 3 - Remove the margin in all browsers (opinionated).
 *
*/

export const injectResetStyle = () => {
  // eslint-disable-next-line no-unused-expressions
  injectGlobal`
    *,
    *::before,
    *::after {
      box-sizing: border-box; /* 1 */
    }
    
    html {
      font-family: sans-serif;      
      -ms-text-size-adjust: 100%; /* 2 */
      -webkit-text-size-adjust: 100%; /* 2 */
    }
    
    body {
      margin: 0; /* 3 */
    }
    
    p:first-child { margin-top: 0; }
    p:last-child { margin-bottom: 0; }
  `;
};
