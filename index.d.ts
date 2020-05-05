declare const should: {
  (message: string, test: () => void|Promise<void>);
  only(message: string, test: () => void|Promise<void>);
  skip(message: string, test: () => void|Promise<void>);
  run();
}

export {should};