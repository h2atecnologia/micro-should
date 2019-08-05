async function runSingleTest(message, fn) {
  console.log();
  let output = `should ${message}`;
  console.log(output + ":");
  try {
    let result = await fn();
    console.log("√ " + output);
    return Promise.resolve();
  } catch (error) {
    output += " x";
    console.error(error);
    return Promise.reject(error);
  }
}

const onlyQueue = [];
function should(message, fn) {
  should.queue.push({ message, fn });
}
should.only = (message, fn) => {
  onlyQueue.push({ message, fn });
};
should.queue = [];
should.onlyQueue = [];

should.run = async () => {
  if (onlyQueue.length) should.queue = onlyQueue;
  for (const test of should.queue) {
    await runSingleTest(test.message, test.fn);
  }
};

exports.should = should;
exports.it = should;
