const { mongo } = require('../config/env');
const serviceLocator = require('../serviceLocator/register');

const logger = serviceLocator.get('logger');

class Database {
  constructor(uri) {
    this.mongoose = serviceLocator.get('mongoose');
    this.mongoose.set('debug', mongo.debug);
    this._connect(uri);
  }

  _connect(uri) {
    this.mongoose.connect(uri);
    const { connection } = this.mongoose;

    connection.on('connected', () => logger.info('Database Connection was Successful'));
    connection.on('error', err => logger.info(`Database Connection Failed${err}`));
    connection.on('disconnected', () => logger.info('Database Connection Disconnected'));

    process.on('SIGINT', () => {
      connection.close();
      logger.info('Database Connection closed due to NodeJs process termination');
      process.exit(0);
    });

    require('../models');
  }
}

module.exports = new Database(mongo.uri);
