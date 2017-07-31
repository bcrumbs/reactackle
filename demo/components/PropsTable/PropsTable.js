'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import sortBy from 'lodash.sortby';
import { Link } from 'react-router-dom';
import { PropsTableItem } from './PropsTableItem/PropsTableItem';
import { PropsTableStyled } from './styles/PropsTableStyled';
import { HeaderRowStyled } from './styles/HeaderRowStyled';
import { HeaderCellStyled } from './styles/HeaderCellStyled';

const propTypes = {
  propsDescription: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      required: PropTypes.bool,
      type: PropTypes.string,
      defaultValue: PropTypes.string,
    }),
  ).isRequired,
};

export const PropsTable = ({ propsDescription }) => {
  const tableItems = sortBy(propsDescription, 'name').map(desc =>
    <PropsTableItem
      key={`${desc.name}-${desc.description}`}
      title={desc.name}
      default={desc.defaultValue}
      type={
        desc.link
          ? <Link to={desc.link}>
              {'Link'}
            </Link>
          : desc.type
      }
      required={desc.required}
      description={desc.description}
    />,
  );

  return (
    <PropsTableStyled>
      <HeaderRowStyled>
        <tr>
          <HeaderCellStyled>Title</HeaderCellStyled>
          <HeaderCellStyled>Type</HeaderCellStyled>
          <HeaderCellStyled>Default value</HeaderCellStyled>
          <HeaderCellStyled>Description</HeaderCellStyled>
        </tr>
      </HeaderRowStyled>
      <tbody>
        {tableItems}
      </tbody>
    </PropsTableStyled>
  );
};

PropsTable.propTypes = propTypes;
PropsTable.displayName = 'PropsTable';

export * from './PropsTableItem/PropsTableItem';
