# micro-should

Minimal testing framework. Zero dependencies, async support.

Works with any assertion library.

## Usage

```js
const {should} = require("micro-should");

// Built-in node.js assertion lib.
// You can use any other library, like Chai or Expect.
const assert = require("assert");

should("add two numbers together", () => {
  assert.equal(2 + 2, 4);
});

should("catch errors", () => {
  assert.throws(() => { throw new Error("invalid"); });
});

should("produce correct promise result", async () => {
  const fs = require("fs").promises;
  const data = await fs.readFile("README.md", "utf-8");
  assert.ok(data.includes("Minimal testing"));
});

// should.only("execute only one test", () => {
//   assert.ok(true);
// });

// Execute this at the end of a file.
should.run();
```

## License

MIT (c) Paul Miller (https://paulmillr.com), see LICENSE file.
