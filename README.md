# create-dir-webpack-plugin

Based on [make-dir-webpack-plugin](https://www.npmjs.com/package/make-dir-webpack-plugin) by [Monokh](https://monokh.com)
but Webpack 5 compatible. 

Make directories at webpack compilation.
Useful when another webpack plugin depends on a directory existing.

## Installation
`
npm install create-dir-webpack-plugin --save-dev
`

## Examples
```
var CreateDirPlugin = require('create-dir-webpack-plugin');

module.exports = {
  ...
  plugins: [
    new CreateDirPlugin([
      './dist/folder1',
      './dist/folder2'
    ])
  ]
};
```
