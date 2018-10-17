const babelOptions = { presets: ['es2015', 'react'] };

module.exports = require('babel-jest').createTransformer(babelOptions);
