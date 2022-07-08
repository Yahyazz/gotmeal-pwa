/* eslint-disable comma-dangle */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/hero');
const destination = path.resolve(__dirname, 'src/public/images/hero');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  // change width to 800px
  sharp(`${target}/${image}`)
    .resize(800)
    .toFile(
      path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`)
    );

  // change width to 480px
  sharp(`${target}/${image}`)
    .resize(480)
    .toFile(
      path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`)
    );
});
