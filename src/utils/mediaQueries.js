export const breakpoints = {
  xs: 360,
  sm: 765,
  md: 1024,
  lg: 1440,
};

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};

export const mediaQueriesBetween = (key1, key2) => {
  return (style) =>
    `@media screen and (min-width: ${breakpoints[key1]}px) and (max-width: ${breakpoints[key2]}px) { ${style} }`;
};
