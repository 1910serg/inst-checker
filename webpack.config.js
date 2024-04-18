const clientConfig = require('./webpack/webpack.client.js');
const serverConfig = require('./webpack/webpack.server.js');

module.exports = [serverConfig, clientConfig];
