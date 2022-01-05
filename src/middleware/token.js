const serviceLocator = require('../serviceLocator/register');

const jwt = serviceLocator.get('jwt');
const configs = require('../config/env');

module.exports = async function verify(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'Nenhum token encontrado!' });

  const _token = token.split(' ');

  if (_token[0] !== 'Bearer') return res.status(401).json({ error: 'Token mal formado!' });

  try {
    const decoded = await jwt.verify(_token[1], configs.app.secret);
    req.user = { ...decoded };
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Falha token inválido.' });
  }
};
