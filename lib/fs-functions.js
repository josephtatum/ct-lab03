const fs = require('fs').promises;

const mkdirp = (filepath) => {
  fs.mkdir(filepath, { recursive: true }, (err) => {
    if(err) throw err;
  });
};

const writeJSON = (filepath, data) => {
  const stringifiedData = JSON.stringify(data);
  return fs.writeFile(filepath, stringifiedData, (err) => {
    if(err) throw err;
  });
  console.log(`${filepath} written`);
};

const readJSON = () => {

};

const readDirectoryJSON = () => {

};

const updateJSON = () => {

};

const deleteFile = () => {

};

module.exports = {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON,
  deleteFile
};
