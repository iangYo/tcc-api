class AuthController {
  constructor(log, authRepository) {
    this.log = log;
    this.authRepository = authRepository;
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
}

module.exports = AuthController;
