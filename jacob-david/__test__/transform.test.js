'use strict';

const transform = require('../lib/transform');

describe('transform-test.js', () => {
  test('the transformation we applied should be returned if there are no errors', (done) => {

    transform.readFile((error,data) => {
      expect(error).toBeNull();
      expect(transformedBitmap.color).toEqual(97);
      done();
    });
  });

  test('the output should be a bmp file - maybe', (done) => {
    expect(`${__dirname}/../asset/transformNew.bmp`).not.toBeNull();

    done();
  });
});