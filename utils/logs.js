var graylog2 = require("graylog2");
var logger = new graylog2.graylog({
    servers: [
        { 'host': process.env.graylogServer, port: process.env.graylogPort }
    ],
    hostname: process.env.graylogHostName, // the name of this host
                             // (optional, default: os.hostname())
    facility: process.env.graylogFacility,     // the facility for these log messages
                             // (optional, default: "Node.js")
    bufferSize: 1350         // max UDP packet size, should never exceed the
                             // MTU of your system (optional, default: 1400)
});

logger.on('error', function (error) {
  console.error('Error while trying to write to graylog2:', error);
});

module.exports = logger;