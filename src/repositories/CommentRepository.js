class CommentRepository {
  constructor(mongoose) {
    this.mongoose = mongoose;
  }

  async index(testimonial) {
    const Comment = this.mongoose.model('Comment');
    const comment = await Comment.find({ testimonial }).sort({ createdAt: 'desc' });
    return comment;
  }

  async create(body) {
    const Comment = this.mongoose.model('Comment');
    const comment = new Comment({ ...body });
    await comment.save();
  }
}

module.exports = CommentRepository;
