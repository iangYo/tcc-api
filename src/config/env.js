module.exports = {
  app: {
    port: process.env.PORT,
    nodeEnv: process.env.NODE_ENV,
    secret: process.env.SECRET
  },
  mongo: {
    uri: process.env.DATABASE_URI,
    debug: process.env.MONGO_DEBUG || false
  },
  application_logging: {
    level: process.env.LOG_LEVEL || 'info',
    console: process.env.LOG_ENABLE_CONSOLE || true
  }
};
