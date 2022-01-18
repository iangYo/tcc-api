class DiaryController {
  constructor(log, diaryRepository) {
    this.log = log;
    this.diaryRepository = diaryRepository;
  }

  async index(request, response) {
    const { limit = 10, page = 1 } = request.query;
    try {
      const diary = await this.diaryRepository.index(request.user._id, Number(limit), Number(page));
      return response.json(diary);
    } catch (error) {
      this.log.error(error);
      return response.status(error.status || 500).json({ error: 'Ocorreu um erro inesperado!' });
    }
  }

  async create(request, response) {
    try {
      await this.diaryRepository.create(request.body);
      return response.sendStatus(201);
    } catch (error) {
      this.log.error(error);
      return response.status(error.status || 500).json({ error: 'Ocorreu um erro inesperado!' });
    }
  }

  async update(request, response) {
    try {
      await this.diaryRepository.update(request.params.id, request.body);
      return response.sendStatus(200);
    } catch (error) {
      this.log.error(error);
      return response.status(error.status || 500).json({ error: 'Ocorreu um erro inesperado!' });
    }
  }

  async remove(request, response) {
    try {
      await this.diaryRepository.remove(request.params.id);
      return response.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DiaryController;
