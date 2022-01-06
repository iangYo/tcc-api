class CommentController {
  constructor(log, commentRepository) {
    this.log = log;
    this.commentRepository = commentRepository;
  }

  async index(request, response) {
    const { testimonial } = request.query;
    try {
      const comments = await this.commentRepository.index(testimonial);
      return response.json(comments);
    } catch (error) {
      this.log.error(error);
      return response.status(error.status || 500).json({ error: 'Ocorreu um erro inesperado!' });
    }
  }

  async create(request, response) {
    const { body } = request;
    try {
      await this.commentRepository.create(body);
      return response.sendStatus(201);
    } catch (error) {
      this.log.error(error);
      return response.status(error.status || 500).json({ error: 'Ocorreu um erro inesperado!' });
    }
  }
}

module.exports = CommentController;
