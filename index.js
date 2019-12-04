const {
  mkdirp,
  writeJSON,
  readJSON
} = require('./lib/fs-functions.js');

mkdirp('./joseph');

writeJSON('./joseph/joseph.txt', {
  name: 'rover',
  age: 10,
  weight: '40 lbs'
});

readJSON('./joseph/joseph.txt');
