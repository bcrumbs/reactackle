import kebabCase from 'lodash.kebabcase';

export default ({ stateTransitions, computeValue = (_, v) => v }) => {
  const cssKeyframes = Object.entries(stateTransitions)
    .map(([keyFrameName, style]) => {
      const cssStyles = Object.entries(style).map(([styleName, value]) =>
        `${kebabCase(styleName)}: ${computeValue(styleName, value)};`,
      );
      return `
        ${keyFrameName} {
          ${cssStyles.join(' ')}
        }
      `;
    });
  
  return cssKeyframes.join(' ');
};
