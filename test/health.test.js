const { test } = require("node:test");
const assert = require("node:assert/strict");

test("health endpoint returns healthy status", async () => {
  const response = await fetch("http://localhost:3000/health");

  assert.equal(response.status, 200);

  const body = await response.json();

  assert.equal(body.status, "ok");
  assert.equal(body.service, "devops-api");
  assert.ok(body.timestamp);
});
