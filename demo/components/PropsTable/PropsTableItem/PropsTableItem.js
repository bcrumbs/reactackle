'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { PropsTableItemStyled } from './styles/PropsTableItemStyled';
import { PropsTableCellStyled } from './styles/PropsTableCellStyled';
import { PropsTitleStyled } from './styles/PropsTitleStyled';
import { PropsTypeStyled } from './styles/PropsTypeStyled';
import { PropsDefaultStyled } from './styles/PropsDefaultStyled';
import { PropsDescriptionStyled } from './styles/PropsDescriptionStyled';
import { RequiredStyled } from './styles/RequiredStyled';

const propTypes = {
  title: PropTypes.string,
  default: PropTypes.string,
  type: PropTypes.string,
  values: PropTypes.string,
  required: PropTypes.bool,
  description: PropTypes.string,
};

const defaultProps = {
  title: '',
  default: '',
  type: '',
  values: '',
  required: false,
  description: '',
};

export const PropsTableItem = props => {
  const required = props.required
    ? <RequiredStyled>(required)</RequiredStyled>
    : false;
  
  const value = props.values
    ? `: ${props.values}`
    : null;
  
  
  const description = props.description
    ? <PropsDescriptionStyled>{props.description}</PropsDescriptionStyled>
    : null;
  
  return (
    <PropsTableItemStyled>
      <PropsTableCellStyled>
        <PropsTitleStyled>
          {props.title}
        </PropsTitleStyled>
        {required}
      </PropsTableCellStyled>
      <PropsTableCellStyled>
        <PropsTypeStyled>
          {props.type}
        </PropsTypeStyled>
        {value}
      </PropsTableCellStyled>
      <PropsTableCellStyled>
        <PropsDefaultStyled>
          {props.default}
        </PropsDefaultStyled>
      </PropsTableCellStyled>
      <PropsTableCellStyled>
        {description}
      </PropsTableCellStyled>
    </PropsTableItemStyled>
  );
};

PropsTableItem.propTypes = propTypes;
PropsTableItem.defaultProps = defaultProps;
PropsTableItem.displayName = 'PropsTableItem';
