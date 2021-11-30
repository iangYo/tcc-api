const { createLogger, format, transports } = require('winston');

const { combine, timestamp, prettyPrint, errors } = format;

const createTransports = config => {
  const customTransporsts = [];

  if (config.console) {
    customTransporsts.push(
      new transports.Console({
        level: config.level,
        handleExceptions: true
      })
    );
  }
  return customTransporsts;
};

module.exports = {
  create(config) {
    return createLogger({
      format: combine(errors({ stack: true }), timestamp(), prettyPrint()),
      transports: createTransports(config),
      exitOnError: false
    });
  }
};
