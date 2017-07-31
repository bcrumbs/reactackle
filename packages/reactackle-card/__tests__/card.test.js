'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import {
    Card,
    CardActions,
    CardAreaMain,
    CardAreaSide,
    CardContent,
    CardHeaderPrimary,
    CardHeaderSecondary,
    CardMedia,
    CardContentText,
    CardActionsMain,
    CardActionsSupplemental,
} from '../src';

jest.mock('react-dom');

describe('<Card/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <Card>
        <div> test </div>
      </Card>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if contains CardAreaSide', () => {
    const tree = renderer.create(
      <Card>
        <CardAreaSide />
      </Card>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  
  it('renders correctly if prop size changing', () => {
    const component = renderer.create(
      <Card size="large">
        <CardContent />
      </Card>,
    );

    expect(component.toJSON()).toMatchSnapshot();
    
    const instance = component.getInstance();
    instance.componentWillReceiveProps({ size: 'xlarge' });
    
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('<CardActions/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <CardActions>
        <div> test </div>
      </CardActions>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<CardAreaMain/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <CardAreaMain>
        <div> test </div>
      </CardAreaMain>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<CardAreaSide/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <CardAreaSide>
        <div> test </div>
      </CardAreaSide>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<CardContent/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <CardContent>
        <div> test </div>
      </CardContent>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop last set true', () => {
    const tree = renderer.create(
      <CardContent last />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop last set false', () => {
    const tree = renderer.create(
      <CardContent last={false} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe('<CardHeaderPrimary/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <CardHeaderPrimary>
        <div> test </div>
      </CardHeaderPrimary>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop title set test', () => {
    const tree = renderer.create(
      <CardHeaderPrimary title="test" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop subtitle set test', () => {
    const tree = renderer.create(
      <CardHeaderPrimary subtitle="test" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe('<CardHeaderSecondary/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <CardHeaderSecondary>
        <div> test </div>
      </CardHeaderSecondary>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop title set test', () => {
    const tree = renderer.create(
      <CardHeaderSecondary title="test" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop subtitle set test', () => {
    const tree = renderer.create(
      <CardHeaderSecondary subtitle="test" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop image set image.png', () => {
    const tree = renderer.create(
      <CardHeaderSecondary image="./image.png" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe('<CardMedia/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <CardMedia>
        <div> test </div>
      </CardMedia>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<CardActionsSupplemental/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <CardActionsSupplemental>
        <div> test </div>
      </CardActionsSupplemental>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<CardActionsMain/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <CardActionsMain>
        <div> test </div>
      </CardActionsMain>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<CardContentText/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <CardContentText>
        <div> test </div>
      </CardContentText>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
