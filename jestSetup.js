/* eslint-env jest */
const throwError = jest.fn(
  mes => {
    throw new Error(mes);
  },
);

/* eslint-disable no-console */
console.error = throwError;
console.warn = throwError;
