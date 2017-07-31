const iDevicesCheck = () => {
  const iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod',
  ];

  while (iDevices.length) {
    if (navigator.platform === iDevices.pop())
      return true;
  }

  return false;
};

let iOS = null;

export const isiOS = () => {
  if (iOS === null)
    iOS = iDevicesCheck();
  
  return iOS;
};
