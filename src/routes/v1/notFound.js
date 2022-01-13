const router = require('express').Router();

router.all('*', (_, res) => res.status(404).json({ error: 'Rota não encontrada!' }));

module.exports = router;
