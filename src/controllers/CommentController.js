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

  async remove(request, response) {
    const { id } = request.params;
    const { user } = request;
    try {
      const comment = await this.commentRepository.findOne(id);
      if (!comment) return response.status(404).json({ error: 'Comentário não encotrado!' });
      if (user._id !== comment.user.toString()) return response.status(401).json({ error: 'Usuário não autorizado!' });
      await this.commentRepository.remove(id);
      return response.sendStatus(200);
    } catch (error) {
      this.log.error(error);
      return response.status(error.status || 500).json({ error: 'Ocorreu um erro inesperado!' });
    }
  }
}

module.exports = CommentController;
