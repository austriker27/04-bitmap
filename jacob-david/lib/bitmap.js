'use strict';

const bitmap = module.exports = {};

bitmap.parseBitmap = (buffer) => {
  let parsedBitmap = {};

  const HEIGHT_OFFSET = 22;
  const PIXEL_TABLE_OFFSET = 10;
  const FILE_SIZE_OFFSET = 2;
  const HEADER_OFFSET = 22;
  const HEADER_AND_DIB_OFFSET = 54;

  parsedBitmap.buffer = buffer;

  // parsedBitmap.type = buffer.toString('utf-8',0,2);
  // parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
  // parsedBitmap.pixelTableOffset = buffer.readInt32LE(PIXEL_TABLE_OFFSET);
  // parsedBitmap.height = buffer.readInt32LE(HEIGHT_OFFSET);
  // parsedBitmap.headerSize = buffer.readInt32LE(HEADER_OFFSET);
  
  //TODO: find where colors start and how to access
  //TODO: find where pixels start
  let colorPallete = parsedBitmap.colorOffset = buffer.slice(HEADER_AND_DIB_OFFSET, buffer.length);
  console.log('====================================');
  console.log(colorPallete.readUInt32LE().toString());
  console.log('====================================');

  return parsedBitmap;
};