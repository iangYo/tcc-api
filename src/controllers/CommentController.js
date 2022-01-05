class CommentController {
  constructor(log, commentRepository) {
    this.log = log;
    this.commentRepository = commentRepository;
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
