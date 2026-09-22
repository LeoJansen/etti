export const wrapIndex = (index, length) => {
  if (length <= 0) {
    return 0;
  }

  return ((index % length) + length) % length;
};
