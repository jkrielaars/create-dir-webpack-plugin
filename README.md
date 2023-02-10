# create-dir-webpack-plugin
[![npm version](https://badge.fury.io/js/create-dir-webpack-plugin.svg)](https://badge.fury.io/js/make-dir-webpack-plugin) by Jasper Krielaars

Based on [make-dir-webpack-plugin](https://www.npmjs.com/package/make-dir-webpack-plugin) by [Monokh](https://monokh.com) 

Make directories at webpack compilation. Webpack 5 compatible.
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
