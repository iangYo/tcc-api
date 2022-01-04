const bcrypt = require('bcrypt');

async function hash(password) {
  const hashedPass = await bcrypt.hash(password, 5);
  return hashedPass;
}

module.exports = hash;
