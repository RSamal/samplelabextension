var path = require('path');

var buildExtension = require('jupyterlab-extension-builder').buildExtension;

buildExtension({
  name: 'samplelabextension',
  entry: './lib/plugin',
  outputDir : './samplelabextension/static'
});