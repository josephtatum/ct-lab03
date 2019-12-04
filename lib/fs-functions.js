const fs = require('fs').promises;

const mkdirp = (filepath) => {
  fs.mkdir(filepath, { recursive: true }, (err) => {
    if(err) throw err;
  });
};

const writeJSON = () => {

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
