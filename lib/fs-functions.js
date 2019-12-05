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
    console.log(`${filepath} written`);
  });
};

const readJSON = (filepath) => {
  return fs.readFile(filepath, err => {
    if(err) throw err;
  }).then((result) => {
    return JSON.parse(result);
  });
};

const readDirectoryJSON = (folderpath) => {
  return fs.readdir(folderpath, (err, files) => {
    if(err) throw err;
    files.forEach(file => {
      return console.log(file);
    });
  });
  
  // .then((result) => {
  //   return result.map(words => console.log(words))
  //   console.log(result);
  // });
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
