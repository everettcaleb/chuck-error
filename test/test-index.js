const chuck = require('../index'),
  assert = require('assert');

describe('chuck', () => {
  it('should throw an Error', done => {
    let err = new Error('My Test Error'),
      thrown = false;

    try {
      chuck(err);
    }
    catch(caughtErr) {
      assert.equal(err, caughtErr);
      thrown = true;
    }
    finally {
      assert.ok(thrown);
      done();
    }
  });
});
