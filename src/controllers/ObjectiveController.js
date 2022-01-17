class ObjectiveController {
  constructor(log, objectiveRepository) {
    this.log = log;
    this.objectiveRepository = objectiveRepository;
  }

  async index(request, response) {
    const { limit = 10, page = 1 } = request.query;
    try {
      const objective = await this.objectiveRepository.index(request.user._id, Number(limit), Number(page));
      return response.json(objective);
    } catch (error) {
      this.log.error(error);
      return response.status(error.status || 500).json({ error: 'Ocorreu um erro inesperado!' });
    }
  }

  async create(request, response) {
    try {
      await this.objectiveRepository.create(request.body);
      return response.sendStatus(201);
    } catch (error) {
      this.log.error(error);
      return response.status(error.status || 500).json({ error: 'Ocorreu um erro inesperado!' });
    }
  }

  async update(request, response) {
    try {
      await this.objectiveRepository.update(request.params.id, request.body);
      return response.sendStatus(200);
    } catch (error) {
      this.log.error(error);
      return response.status(error.status || 500).json({ error: 'Ocorreu um erro inesperado!' });
    }
  }

  async remove(request, response) {
    try {
      await this.objectiveRepository.remove(request.params.id);
      return response.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ObjectiveController;
