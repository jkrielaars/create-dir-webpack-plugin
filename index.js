const fs = require('fs');
const path = require('path');

class CreateDirPlugin {

  constructor(dirs) {
    if (!dirs || Array.isArray(dirs)) {
      throw new Error('Required directories must be defined as an array of strings');
    }
    this.dirs = dirs;
  }

  makeDir(dir) {
    const { sep } = path;
    const initDir = path.isAbsolute(dir) ? sep : '';
    dir.split(sep).reduce((parentDir, childDir) => {
      const currentDir = path.resolve(parentDir, childDir);
      if (!fs.existsSync(currentDir)) {
        fs.mkdirSync(currentDir);
      }
      return currentDir;
    }, initDir);
  }

  apply(compiler) {
    compiler.hooks.done.tap('CreateDirPlugin',
      () => {
        this.dirs.forEach((p) => {
          this.makeDir(p);
        });
      });
  }
}

module.exports = CreateDirPlugin;
