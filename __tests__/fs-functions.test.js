const {
  mkdirp,
  writeJSON,
  readJSON,
  updateJSON,
  readDirectoryJSON,
  deleteFile
} = require('../lib/fs-functions.js');

describe('fs function tests', () => {

  it('should make a directory (or a parent directory) in a specific file location', () => {
    expect(mkdirp('./new')).toEqual('./new');
    expect(mkdirp('./new/directory')).toEqual('./new/directory');
  });

  it('should throw an error if it fails', () => {
    expect(() => mkdirp('//fail')).toThrowErrorMatchingInlineSnapshot();
  });
});
