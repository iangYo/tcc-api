class CommentRepository {
  constructor(mongoose) {
    this.mongoose = mongoose;
  }

  async create(body) {
    const Comment = this.mongoose.model('Comment');
    const comment = new Comment({ ...body });
    await comment.save();
  }
}

module.exports = CommentRepository;
