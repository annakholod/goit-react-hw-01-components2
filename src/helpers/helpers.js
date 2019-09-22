export const ramdomColor = () => {
  const bgColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256,
  )}, ${Math.floor(Math.random() * 256)})`;
  return bgColor;
};

export const checkStatus = (style, status) => {
  return status ? [style.statusOnline] : [style.statusOffline];
};
