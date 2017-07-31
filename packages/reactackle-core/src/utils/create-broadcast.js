export const createBroadcast = initialValue => {
  let listeners = [];
  let currentValue = initialValue;

  return {
    publish(value) {
      currentValue = value;
      listeners.forEach(listener => listener(currentValue));
    },

    subscribe(listener) {
      listeners.push(listener);

      listener(currentValue);

      return () => {
        listeners = listeners.filter(item => item !== listener);
      };
    },
  };
};
