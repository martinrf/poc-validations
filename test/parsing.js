const moment = require('moment');
const assert = require('assert');

describe('moment', () => {
  describe('is valid', () => {
    it('parse date 2011-11-28 is valid', async () => {
      const m = moment('2011-11-28');
      assert.ok(m.isValid());
    });

    it('parse date 31 12 2018 with format is valid', async () => {
      const m = moment('31 12 2018', 'DD MM YYYY');
      assert.ok(m.isValid());
    });
  });
});

