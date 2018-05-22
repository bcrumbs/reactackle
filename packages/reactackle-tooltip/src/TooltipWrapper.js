import React from "react";
import PropTypes from "prop-types";
import { noop } from "reactackle-core";
import { TooltipStyled } from "./styles/TooltipStyled";
import { TooltipContentStyled } from "./styles/TooltipContentStyled";

const propTypes = {
  isVisible: PropTypes.bool,
  positionX: PropTypes.oneOf(["right", "left"]),
  positionY: PropTypes.oneOf(["top", "bottom"]),
  tooltipRef: PropTypes.func,
};

const defaultProps = {
  isVisible: true,
  positionX: "left",
  positionY: "bottom",
  tooltipRef: noop,
};

const TooltipWrapper = ({
  isVisible,
  positionX,
  positionY,
  tooltipRef,
  children,
}) => (
  <TooltipStyled
    visible={isVisible}
    positionX={positionX}
    positionY={positionY}
    innerRef={tooltipRef}
  >
    <TooltipContentStyled>{children}</TooltipContentStyled>
  </TooltipStyled>
);

TooltipWrapper.propTypes = propTypes;
TooltipWrapper.defaultProps = defaultProps;

export default TooltipWrapper;
