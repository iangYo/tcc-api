class TestimonialController {
  constructor(log, testimonialRepository) {
    this.log = log;
    this.testimonialRepository = testimonialRepository;
  }

  async create(request, response) {
    const { body } = request;
    try {
      await this.testimonialRepository.create(body);
      return response.sendStatus(201);
    } catch (error) {
      this.log.error(error);
      return response.status(error.status || 500).json({ error: 'Ocorreu um erro inesperado!' });
    }
  }
}

module.exports = TestimonialController;
