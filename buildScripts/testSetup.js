// This file is not transpiled, use CommonJS and ES5

// Register babel
require('babel-register')();

// Disable webpack features that Mocha does not understand
require.extensions['.css'] = function() {};
