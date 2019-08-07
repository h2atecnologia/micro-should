declare const should: {
  (message: string, test: () => void|Promise<boolean>);
  only(message: string, test: () => void|Promise<boolean>);
  skip(message: string, test: () => void|Promise<boolean>);
  run();
}

export {should};