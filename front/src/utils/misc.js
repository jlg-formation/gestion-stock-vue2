export const sleep = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const isProd = () => process.env.NODE_ENV !== "development";
