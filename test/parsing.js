const moment = require('moment');
const assert = require('assert');

describe('moment', () => {
  describe('is valid', () => {
    it('parse date 2011-11-28 is valid', async () => {
      const m = moment('02011-11-28');
      assert.ok(m.isValid());
    });
  });
});

