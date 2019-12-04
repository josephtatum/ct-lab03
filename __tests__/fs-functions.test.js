const {
  mkdirp,
  writeJSON,
  readJSON,
  updateJSON,
  readDirectoryJSON,
  deleteFile
} = require('../lib/fs-functions.js');

describe('fs function tests', () => {
  beforeEach(
    mkdirp('./testfolder')
  );

  it('should write a JSON object to a specified file', () => {
    writeJSON('./testfolder/test.json', { name: 'test' })
      .then(
        expect()
      );
  });
});
