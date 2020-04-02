const {hexToRgb} = require('./hex-to-rgb');
const {rgbToHex} = require('./rgb-to-hex');
const {hslToRgb} = require('./hsl-to-rgb');
const {rgbToHsl} = require('./rgb-to-hsl');
const {hexToHsl} = require('/hex-to-hsl');
const userInput = process.argv[3];
const userCommand = process.argv[2];



if (userCommand === 'hex') {
  console.log(hexToRgb(userInput));
  console.log(hexToHsl(userInput));
}

if (userCommand === 'rgb') {
  console.log(rgbToHsl(+process.argv[3], +process.argv[4], +process.argv[5]));
  console.log(rgbToHex(+process.argv[3], +process.argv[4], +process.argv[5]));
}


if (userCommand === 'hsl') {
  console.log(hslToRgb(+process.argv[3], +process.argv[4], +process.argv[5]));
}

