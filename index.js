const { app } = require('./src/app');
const configs = require('./src/config/env');

app.listen(configs.app.port, () => console.log(`Server running on port ${process.env.PORT}`));
