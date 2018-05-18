import React from 'react';
import renderer from 'react-test-renderer';
import { IconCross } from 'reactackle-icons';

import {
    Menu,
    MenuGroup,
    MenuList,
    MenuItem,
} from '../src';

jest.mock('react-dom');

const data = [
  {
    data: [
      {
        text: 'Structure',
      },
      {
        text: 'Design',
        submenuGroup: {
          data: [
            {
              data: [
                { text: 'Submenu 1-1' },
                { text: 'Submenu 1-2' },
              ],
            },
            {
              data: [
                { text: 'Submenu 2-1' },
                { text: 'Submenu 2-2' },
              ],
            },
          ],
        },
      },
    ],
  },
];


describe('<Menu/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <Menu />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop inline set true', () => {
    const tree = renderer.create(
      <Menu inline />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop colorScheme set dark', () => {
    const tree = renderer.create(
      <Menu colorScheme='dark' />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if contains children', () => {
    const tree = renderer.create(
      <Menu>
        <MenuGroup>
          <MenuList>
            <MenuItem text="test" />
          </MenuList>
        </MenuGroup>
      </Menu>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<MenuList/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <MenuList />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop bordered set true', () => {
    const tree = renderer.create(
      <MenuList bordered />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop bordered set false', () => {
    const tree = renderer.create(
      <MenuList bordered={false} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop title set', () => {
    const tree = renderer.create(
      <MenuList title="test" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop className set', () => {
    const tree = renderer.create(
      <MenuList className="test" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop prefix set', () => {
    const tree = renderer.create(
      <MenuList prefix="test" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe('<MenuItem/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <MenuItem />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop iconLeft set', () => {
    const tree = renderer.create(
      <MenuItem iconLeft={<IconCross />} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop iconRight set', () => {
    const tree = renderer.create(
      <MenuItem iconRight={<IconCross />} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop textRight set', () => {
    const tree = renderer.create(
      <MenuItem textRight="test" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop image set', () => {
    const tree = renderer.create(
      <MenuItem image="star" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop linkHref set', () => {
    const tree = renderer.create(
      <MenuItem linkHref="#" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop text set', () => {
    const tree = renderer.create(
      <MenuItem text="test" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop prefix set', () => {
    const tree = renderer.create(
      <MenuItem prefix="test" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop className set', () => {
    const tree = renderer.create(
      <MenuItem className="test" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop textSecondary set', () => {
    const tree = renderer.create(
      <MenuItem textSecondary="test" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop isActive set', () => {
    const tree = renderer.create(
      <MenuItem isActive />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop openSubmenuOnMouseEnter set', () => {
    const tree = renderer.create(
      <MenuItem openSubmenuOnMouseEnter />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop subcomponentRight set', () => {
    const subcomponentRight = (
      <div> TEST </div>
        );

    const tree = renderer.create(
      <MenuItem subcomponentRight={subcomponentRight} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly without children if submenuOpen in state was set to' +
    ' true', () => {
    const component = renderer.create(
      <MenuItem text="test1" />,
    );

    const instance = component.getInstance();

    instance.setState({
      submenuOpen: true,
    });

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if call toggleMenu with param true', () => {
    const component = renderer.create(
      <MenuItem text="test1">
        <MenuGroup>
          <MenuList>
            <MenuItem text="test2" />
          </MenuList>
        </MenuGroup>
      </MenuItem>,
    );

    const instance = component.getInstance();

    instance._toggleMenu(true);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if call toggleMenu with param false', () => {
    const component = renderer.create(
      <MenuItem text="test1">
        <MenuGroup>
          <MenuList>
            <MenuItem text="test2" />
          </MenuList>
        </MenuGroup>
      </MenuItem>,
    );

    const instance = component.getInstance();

    instance._toggleMenu(false);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if call toggleMenu with not boolean param', () => {
    const component = renderer.create(
      <MenuItem text="test1">
        <MenuGroup>
          <MenuList>
            <MenuItem text="test2" />
          </MenuList>
        </MenuGroup>
      </MenuItem>,
    );

    const instance = component.getInstance();

    instance._toggleMenu(null);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('one call "handleClick"', () => {
    const mockFn = jest.fn(),
      component = renderer.create(
        <MenuItem onClick={mockFn} />,
            );

    const instance = component.getInstance();

    instance._handleClick();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('renders correctly with children if one call "handleClick"', () => {
    const component = renderer.create(
      <MenuItem text="test1">
        <MenuGroup>
          <MenuList>
            <MenuItem text="test2" />
          </MenuList>
        </MenuGroup>
      </MenuItem>,
    );

    const instance = component.getInstance();

    instance._handleClick();

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly without children if one call "handleClick"', () => {
    const component = renderer.create(
      <MenuItem text="test1" />,
    );

    const instance = component.getInstance();

    instance._handleClick();

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly without children if "handleMouseEnter" was called' +
    ' while openSubmenuOnMouseEnter was set to true', () => {
    const component = renderer.create(
      <MenuItem openSubmenuOnMouseEnter text="test1" />,
    );

    const instance = component.getInstance();

    instance._handleMouseEnter();

    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('<MenuGroup/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(
      <MenuGroup />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop data set', () => {
    const tree = renderer.create(
      <MenuGroup data={data} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop prefix set', () => {
    const tree = renderer.create(
      <MenuGroup prefix="test" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop mode set light', () => {
    const tree = renderer.create(
      <MenuGroup mode="light" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop mode set dark', () => {
    const tree = renderer.create(
      <MenuGroup mode="dark" />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop inline set true', () => {
    const tree = renderer.create(
      <MenuGroup inline />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop inline set false', () => {
    const tree = renderer.create(
      <MenuGroup inline={false} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop leftOffset set true', () => {
    const tree = renderer.create(
      <MenuGroup leftOffset />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if prop leftOffset set false', () => {
    const tree = renderer.create(
      <MenuGroup leftOffset={false} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});


