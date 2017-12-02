'use strict';

const bitmap = require('./lib/bitmap');
const fs = require('fs');

fs.readFile(`${__dirname}/asset/house.bmp`, (error,data) => {
  if(error)
  {
    console.error(error);
    return;
  }

  let parsedBitmap = bitmap.parseBitmap(data);
  console.log(parsedBitmap);
});

fs.writeFile(`${__dirname}/asset/house.bmp`, (error,data) => {
  if(error)
  {
    console.error(error);
    return;
  }

  let changedBitmap = bitmap.parseBitmap(data);
  console.log(changedBitmap);
});