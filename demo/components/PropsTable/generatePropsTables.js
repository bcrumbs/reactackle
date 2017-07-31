import { parse as parseCode } from 'react-docgen';
import { parse as parseJSDoc } from 'doctrine';
import map from 'lodash.map';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const isUndef = value => typeof value === 'undefined';
const parseEnum = values => values.map(type => type.value).join(' | ');
const parseUnion = values => values.map(type => type.name).join(' | ');
const parseShape = shape =>
  map(shape, (prop, name) => ({
    name,
    description: prop.description,
    type: prop.name === 'enum' ? parseEnum(prop.value) : prop.name,
    required: prop.required,
    defaultValue: '',
  }));

const parseType = (type, tags = {}) => {
  if (tags.customType) return tags.customType.description;
  else if (type.name === 'enum') return parseEnum(type.value);
  else if (type.name === 'union') return parseUnion(type.value);
  else return type.name;
};

const parseDescription = unparsedDescription => {
  const { description, tags: unparsedTags } = parseJSDoc(unparsedDescription);
  const getTags = tagsSource => tagsNames => {
    const tags = {};
    tagsNames.forEach(tagName => {
      tags[tagName] = tagsSource.filter(tag => tag.title === tagName)[0];
    });
    return tags;
  };

  const tags = getTags(unparsedTags)([
    'ignore',
    'customType',
    'separate',
    'link',
  ]);

  return { description, tags };
};
const parseProp = (
  name,
  {
    description: unparsedDescription,
    type: unparsedType,
    defaultValue,
    required,
  },
) => {
  const { description, tags } = parseDescription(unparsedDescription);
  const type = parseType(unparsedType, tags);

  if (tags.ignore) {
    return {};
  } else if (tags.link) {
    return {
      mainDescription: {
        name,
        link: tags.link.description,
        description,
      },
    };
  } else if (tags.separate && type === 'shape') {
    return {
      tableName: tags.separate.description,
      childsDescription: parseShape(unparsedType.value),
      mainDescription: {
        name,
        type: <Link to={{ hash: `#${tags.separate.description}` }}>See below</Link>,
        description,
      },
    };
  } else {
    return {
      mainDescription: {
        name,
        required,
        type,
        description,
        defaultValue: defaultValue ? defaultValue.value : '',
      },
    };
  }
};

export default function generatePropsTables(
  componentCode,
  mainTableName = 'Component Props',
) {
  const { props } = parseCode(componentCode);
  const tables = {
    [mainTableName]: [],
  };

  Object.entries(props).forEach(([key, value]) => {
    const {
      tableName = mainTableName,
      childsDescription,
      mainDescription,
    } = parseProp(key, value);

    if (isUndef(tables[tableName])) tables[tableName] = [];

    if (childsDescription) tables[tableName] = childsDescription;
    if (mainDescription) tables[mainTableName].push(mainDescription);
  });
  return tables;
}
