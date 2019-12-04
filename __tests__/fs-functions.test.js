const fs = require('fs').promises;

const {
  mkdirp,
  writeJSON,
  readJSON,
  updateJSON,
  readDirectoryJSON,
  deleteFile
} = require('../lib/fs-functions.js');

describe('fs function tests', () => {
  beforeEach(() => {
    mkdirp('./testfolder');
  });


  it('should write a JSON object to a specified file', () => {
    return writeJSON('./testfolder/test.json', { name: 'test' })
      .then(() => fs.readFile('./testfolder/test.json'))
      .then(file => {
        expect(JSON.parse(file)).toEqual({ name: 'test' });
      });
  });

  it('should read an object from a file', () => {
    return readJSON('./testfolder/test.json')
      .then(result => {
        expect(result).toEqual({ name: 'test' });
      });
  });
});
