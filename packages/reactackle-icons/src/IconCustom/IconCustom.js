import React from 'react';
import PropTypes from 'prop-types';
import { IconCustomStyled } from './styles/IconCustomStyled';

//eslint-disable-next-line
const DEFAULT_ICON_DARK = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ItCh0LvQvtC5XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0OCA0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDggNDg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7b3BhY2l0eTowLjU0O30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxnIGNsYXNzPSJzdDAiPgoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIzNCwxNCAxOCwxNCAxOCwzMCAzNCwzMCAJIi8+Cgk8cmVjdCB4PSIxNCIgeT0iMTgiIGNsYXNzPSJzdDEiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIvPgoJPGc+CgkJPGxpbmUgY2xhc3M9InN0MSIgeDE9IjE0IiB5MT0iMTgiIHgyPSIxOCIgeTI9IjE0Ii8+Cgk8L2c+Cgk8bGluZSBjbGFzcz0ic3QxIiB4MT0iMzQiIHkxPSIzMCIgeDI9IjMwIiB5Mj0iMzQiLz4KCTxnPgoJCTxsaW5lIGNsYXNzPSJzdDEiIHgxPSIzMCIgeTE9IjE4IiB4Mj0iMzQiIHkyPSIxNCIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=';
const DEFAULT_ICON_LIGHT = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ItCh0LvQvtC5XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0OCA0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDggNDg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7b3BhY2l0eTowLjU0O30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxnIGNsYXNzPSJzdDAiPgoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIzNCwxNCAxOCwxNCAxOCwzMCAzNCwzMCAJIi8+Cgk8cmVjdCB4PSIxNCIgeT0iMTgiIGNsYXNzPSJzdDEiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIvPgoJPGc+CgkJPGxpbmUgY2xhc3M9InN0MSIgeDE9IjE0IiB5MT0iMTgiIHgyPSIxOCIgeTI9IjE0Ii8+Cgk8L2c+Cgk8bGluZSBjbGFzcz0ic3QxIiB4MT0iMzQiIHkxPSIzMCIgeDI9IjMwIiB5Mj0iMzQiLz4KCTxnPgoJCTxsaW5lIGNsYXNzPSJzdDEiIHgxPSIzMCIgeTE9IjE4IiB4Mj0iMzQiIHkyPSIxNCIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=';

const propTypes = {
  /** Turns on/off icon's border */
  border: PropTypes.bool,
  /** Set icon's border width */
  borderWidth: PropTypes.number,
  /** Make icon rounded */
  rounded: PropTypes.bool,
  /** Set icon size */
  size: PropTypes.oneOf(['custom', 'small', 'normal', 'large', 'xlarge']),
  /** Set icon's color scheme */
  colorScheme: PropTypes.oneOf(['light', 'dark', 'default']),
  /** Set exact icon's border color */
  color: PropTypes.string,
  /** Set icon's background color */
  backgroundColor: PropTypes.string,
  /** Set icon's flipping plane */
  flip: PropTypes.oneOf(['none', 'horizontal', 'vertical']),
  /** Rotate icon by some degree */
  rotate: PropTypes.number,
  /** Set icon's source */
  src: PropTypes.string,
};

const defaultProps = {
  src: '',
  border: false,
  borderWidth: 0,
  rounded: false,
  size: 'normal',
  colorScheme: 'default',
  color: '',
  backgroundColor: '',
  flip: 'none',
  rotate: 0,
};

export const IconCustom = props => {
  const iconDefault = props.colorScheme === 'light'
    ? DEFAULT_ICON_LIGHT
    : DEFAULT_ICON_DARK;
    
  return (
    <IconCustomStyled
      border={props.border}
      borderWidth={props.borderWidth}
      rounded={props.rounded}
      sizeKey={props.size}
      colorScheme={props.colorScheme}
      customColor={props.color}
      bgColor={props.backgroundColor}
      flip={props.flip}
      rotate={props.rotate}
      src={props.src || iconDefault}
    />
  );
};

IconCustom.propTypes = propTypes;
IconCustom.defaultProps = defaultProps;
IconCustom.displayName = 'IconCustom';
