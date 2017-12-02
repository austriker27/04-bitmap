'use strict';

const bitmap = require('../bitmap');

describe('bitmap-test.js', () => {
  test('the test to make sure our bitmap rendered. i think', (done) => {

    bitmap.readFile((error,data) => {
      expect(error).toBeNull();
      expect(data).toEqual('new bitmap- question mark');
      done();
    });
  });

  test('if the file does not exist and file path is wrong, throw an error', (done) => {
    let filePaths = [
      `${__dirname}/../asset/bitmap.bmp`,
      `${__dirname}/../asset/finger-print.bmp`,
      `${__dirname}/../asset/house.bmp`,
    ];

    bitmap.readFiles(filePaths, (error) => {
      expect(error).not.toBeNull();
      done();
    });

  }
  );

});
