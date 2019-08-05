async function runSingleTest(message, test) {
  console.log();
  let output = `should ${message}`;
  console.log(output + ":");
  try {
    let result = await test();
    console.log("√ " + output);
    return true;
  } catch (error) {
    output += " x";
    console.error(error);
    return Promise.reject(error);
  }
}

const onlyQueue = [];
function should(message, test) {
  should.queue.push({ message, test });
}
should.only = (message, test) => {
  onlyQueue.push({ message, test });
};
should.queue = [];
should.onlyQueue = [];

should.run = async () => {
  if (onlyQueue.length) should.queue = onlyQueue;
  for (const test of should.queue) {
    await runSingleTest(test.message, test.test);
  }
};

exports.should = should;
exports.it = should;
