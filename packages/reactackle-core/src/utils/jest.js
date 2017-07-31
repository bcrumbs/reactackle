// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import React from 'react';

const isTestInstance = item => !!item._component;

/**
 * Find first element by condition in tree
 * @param  {Object} tree
 * @param  {Function} condition
 * @return {Object}
 */
const findInTreeBy = (tree, condition) => {
  if (!condition) return null;
  if (condition(tree)) return tree;
  if (!tree.children) return null;

  let component = null;

  for (let i = 0, len = tree.children.length; i < len; i++) {
    component = findInTreeBy(tree.children[i], condition);
    if (component) return component;
  }

  return component;
};

/**
 * Find first element by condition in test instance
 * @param  {ReactTestInstance} component
 * @param  {Function} condition
 * @return {Object}
 */
const findInComponentBy = (component, condition) => {
  if (!condition) return null;
  if (condition(component)) return component;

  let result = null;

  if (!component) return null;

  if (component._component) {
    result = findInComponentBy(component._component, condition);
  }

  if (condition(component._currentElement)) {
    return {
      props: component._currentElement.props,
    };
  }

  if (component._renderedComponent) {
    result = findInComponentBy(component._renderedComponent, condition);
  } else if (component._renderedChildren) {
    let found = false;

    Object.keys(component._renderedChildren).forEach(key => {
      if (!found) {
        result = findInComponentBy(component._renderedChildren[key], condition);
      }

      if (result) found = true;
    });
  }

  return result;
};

/**
 * Find all element by condition in tree
 * @param  {Object} tree
 * @param  {Function} condition [description]
 * @return {Array}
 */
const findAllInTreeBy = (tree, condition) => {
  let result = [];

  if (condition(tree)) result.push(tree);
  if (!tree.children || !condition) return result;

  for (let i = 0, len = tree.children.length; i < len; i++) {
    result = result.concat(...findAllInTreeBy(tree.children[i], condition));
  }

  return result;
};

/**
 * Find all element by condition in test instance
 * @param  {ReactTestInstance} component
 * @param  {Function} condition [description]
 * @return {Array}
 */
const findAllInComponentBy = (component, condition) => {
  let result = [];

  if (!component || !condition) return result;

  if (component._component) {
    result = result.concat(
      findAllInComponentBy(component._component, condition),
    );
  } else if (condition(component)) {
    return result.push(component);
  }

  if (condition(component._currentElement)) {
    result.push({
      props: component._currentElement.props,
    });
  }

  if (component._renderedComponent) {
    result = result.concat(
      findAllInComponentBy(component._renderedComponent, condition),
    );
  } else if (component._renderedChildren) {
    Object.keys(component._renderedChildren).forEach(key => {
      result = result.concat(
        findAllInComponentBy(component._renderedChildren[key], condition),
      );
    });
  }

  return result;
};

export const findByType = (item, type) => {
  const condition = item => item && item.type && item.type === type;
  return isTestInstance(item)
    ? findInComponentBy(item, condition)
    : findInTreeBy(item, condition);
};

export const findByClass = (item, className) => {
  const condition = item =>
    item.props &&
    item.props.className &&
    item.props.className.split(' ').includes(className);

  return isTestInstance(item)
    ? findInComponentBy(item, condition)
    : findInTreeBy(item, condition);
};

export const findAllByType = (item, type) => {
  const condition = item => item && item.type && item.type === type;

  return isTestInstance(item)
    ? findAllInComponentBy(item, condition)
    : findAllInTreeBy(item, condition);
};

export const findAllByClass = (item, className) => {
  const condition = item =>
    item.props &&
    item.props.className &&
    item.props.className.split(' ').includes(className);

  return isTestInstance(item)
    ? findAllInComponentBy(item, condition)
    : findAllInTreeBy(item, condition);
};

export const findBySelector = (item, selector) => {
  const reducer = (acc, current) => {
    if (current[0] === '.') return findByClass(acc, current.slice(1));
    else return findByType(acc, current);
  };

  return selector.split(' ').reduce(reducer, item);
};

/**
 * Update component props
 * @param  {Object} component
 * @param  {Object} changedProps
  */
export const setProps = (component, changedProps) => {
  const instance = component.getInstance();
  const nextProps = Object.assign({}, instance.props, changedProps);

  instance.componentWillReceiveProps(nextProps);
  instance.props = nextProps;
};

const findPortalInInstance = (component, componentType) => {
  if (component.type === componentType) return component.props.children;

  let foundPortal = null;

  React.Children.forEach(component.props.children, child => {
    foundPortal = findPortalInInstance(child, componentType);
  });

  return foundPortal;
};

export const findPortal = (component, componentType) =>
  renderer.create(
    findPortalInInstance(component.getInstance().render(), componentType),
  );

export const mockPortal = (component, options, componentType) => {
  if (isTestInstance(component)) {
    const mockReactTestInstance = Object.create(component);
    mockReactTestInstance._component = mockPortal(
      component._component,
      {},
      componentType,
    );

    return mockReactTestInstance;
  }

  const mockComponent = Object.create(component),
    { _renderedComponent, _renderedChildren } = mockComponent;

  Object.assign(mockComponent, component);

  if (_renderedComponent) {
    if (
      _renderedComponent._currentElement &&
      _renderedComponent._currentElement.type === componentType
    ) {
      class FakePortal extends componentType {
        render() {
          return this.state.active ? this.props.children : null;
        }
      }
      const { props } = _renderedComponent._currentElement;
      mockComponent._renderedComponent = renderer.create(
        <FakePortal {...props} />,
        options,
      )._component;
    } else {
      mockComponent._renderedComponent = mockPortal(
        _renderedComponent,
        {},
        componentType,
      );
    }
  } else if (_renderedChildren) {
    mockComponent._renderedChildren = Object.keys(_renderedChildren).map(key =>
      mockPortal(_renderedChildren[key], {}, componentType),
    );
  }

  return mockComponent;
};

export const rendererWithPortal = (component, options, componentType) =>
  mockPortal(renderer.create(component, options), options, componentType);
