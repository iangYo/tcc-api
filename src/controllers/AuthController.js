const { app } = require('../config/env');

class AuthController {
  constructor(log, jwt, authRepository, validatePassword) {
    this.log = log;
    this.jwt = jwt;
    this.authRepository = authRepository;
    this.validatePassword = validatePassword;
  }

  async create(request, response) {
    const { body } = request;

    try {
      const userExists = await this.authRepository.findByEmail(body.email);
      if (userExists) return response.status(401).json({ error: 'Email já cadastrado!' });

      const result = await this.authRepository.create(body);
      return response.status(201).send(result);
    } catch (error) {
      this.log.error(error);
      return response.status(error.status || 500).json({ error: 'Ocorreu um erro inesperado!' });
    }
  }

  async login(request, response) {
    const { email, password } = request.body;

    try {
      const user = await this.authRepository.findByEmail(email);
      if (!user) return response.status(404).json({ error: 'Usuário não encontrado!' });

      const isValid = await this.validatePassword(password, user.password);
      if (!isValid) return response.status(401).json({ error: 'Senha incorreta!' });

      const token = this.jwt.sign({ id: user.id, email: user.email }, app.secret, { expiresIn: '7d' });

      const { password: _, ...rest } = user.toObject();

      return response.status(200).json({ ...rest, token });
    } catch (error) {
      this.log.error(error);
      return response.status(error.status || 500).json({ error: 'Ocorreu um erro inesperado!' });
    }
  }
}

module.exports = AuthController;
