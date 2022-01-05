class TestimonialController {
  constructor(log, testimonialRepository) {
    this.log = log;
    this.testimonialRepository = testimonialRepository;
  }

  async index(request, response) {
    const { limit = 10, page = 1 } = request.query;

    try {
      const testimonials = await this.testimonialRepository.index(Number(limit), Number(page));
      return response.json(testimonials);
    } catch (error) {
      this.log.error(error);
      return response.status(error.status || 500).json({ error: 'Ocorreu um erro inesperado!' });
    }
  }

  async show(request, response) {
    const { id } = request.params;

    try {
      const testimonial = await this.testimonialRepository.show(id);
      if (!testimonial) return response.status(404).json({ error: 'Nenhum relato de vivência encontrado!' });
      return response.json(testimonial);
    } catch (error) {
      this.log.error(error);
      return response.status(error.status || 500).json({ error: 'Ocorreu um erro inesperado!' });
    }
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
