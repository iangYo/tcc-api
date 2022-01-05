class TestimonialRepository {
  constructor(mongoose) {
    this.mongoose = mongoose;
  }

  async index(limit, page) {
    const Testimonial = this.mongoose.model('Testimonial');
    const testimonials = await Testimonial.find()
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ createdAt: 'desc' });

    return testimonials;
  }

  async show(id) {
    const Testimonial = this.mongoose.model('Testimonial');
    const testimonial = await Testimonial.findById(id);
    return testimonial;
  }

  async allByUser(userId, limit, page) {
    const Testimonial = this.mongoose.model('Testimonial');
    const testimonials = await Testimonial.find({ user: userId })
      .limit(limit)
      .skip((page - 1) * limit);

    return testimonials;
  }

  async create(body) {
    const Testimonial = this.mongoose.model('Testimonial');
    const testimonial = new Testimonial({ ...body });
    await testimonial.save();
  }
}

module.exports = TestimonialRepository;
