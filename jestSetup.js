/* eslint-env jest */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const throwError = jest.fn(
  mes => {
    throw new Error(mes);
  },
);

/* eslint-disable no-console */
console.error = throwError;
console.warn = throwError;
