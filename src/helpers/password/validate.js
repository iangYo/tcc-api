const bcrypt = require('bcrypt');

async function validate(pass, hashPass) {
  const bool = await bcrypt.compare(pass, hashPass);
  return bool;
}

module.exports = validate;
