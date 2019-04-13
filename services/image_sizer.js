const sizeOf = require('image-size');
const path = require('path');

class ImageSizer {
  static getSize(file) {
    return {
      image: path.basename(file),
      ...sizeOf(file)
    }
  }
}

module.exports = ImageSizer